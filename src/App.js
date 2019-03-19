import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Forms from "./components/Forms";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <Switch>
               <Route path="/signup" render={() => <Forms name="Sign Up" />} />
               <Route path="/login" render={() => <Forms name="Login" />} />
               <Route path="/" component={Home} />
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
