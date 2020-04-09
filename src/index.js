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

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
const store = createStore(rootReducer, applyMiddleware(thunk));
const customHistory = createBrowserHistory();

const app = (
  <Provider store={store}>
    <Router history={customHistory}>
      <App> </App>
    </Router>
  </Provider>
);

render(app, document.getElementById('root'));
serviceWorker.unregister();
