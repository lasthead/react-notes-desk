import React from 'react';
import { render } from 'react-dom'
import App from './App.js';
import { Provider } from "react-redux";
import rootReducer from './store/reducers'
import { Router } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from "redux";
import axios from "axios";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import {setUserData} from "./store/actions";
import {useDispatch, useSelector} from "react-redux";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
const store = createStore(rootReducer, applyMiddleware(thunk));
const customHistory = createBrowserHistory();
const asyncGetUserData = async () => {
  if (localStorage.getItem('refreshToken')) {
    try {
      store.dispatch(await setUserData());
    } catch(error) {}
  }
};

asyncGetUserData();

const app = (
  <Provider store={store}>
    <Router history={customHistory}>
      <App> </App>
    </Router>
  </Provider>
);

render(app, document.getElementById('root'));
serviceWorker.unregister();
