import React from 'react';
import { render } from 'react-dom'
import App from './App.js';
import { Provider } from "react-redux";
import rootReducer from './store/reducers'
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import { addNote } from "./store/actions/notes.actions.js";
import {removeNote} from "./store/actions/notes.actions";
const store = createStore(rootReducer);
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App> </App>
    </BrowserRouter>
  </Provider>
);

render(app, document.getElementById('root'));
serviceWorker.unregister();
