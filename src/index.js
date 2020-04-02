import React from 'react';
import { render } from 'react-dom'
import App from './App.js';
import { Provider } from "react-redux";
import rootReducer from './store/reducers'
import { Router } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import { addNote } from "./store/actions/notes.actions.js";
import {removeNote} from "./store/actions/notes.actions";
import { createBrowserHistory } from "history";

const store = createStore(rootReducer);
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
