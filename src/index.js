import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';

import {Provider} from "react-redux"; // caps is a component
import { createStore, applyMiddleware, compose } from "redux"; // lower is a function
import reducer from "./Redux/reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import invariant from 'redux-immutable-state-invariant';
import { BrowserRouter } from "react-router-dom";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
  ));

// const store = createStore(
//   reducer, composeWithDevTools(
//     applyMiddleware(invariant(), thunk)
//   )
// ) // second argument for createstore is middleware

console.log("getState", store.getState())
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
