import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Forms from "./components/Forms";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider, connect } from "react-redux";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import store from "./store";
import { usernameFetch } from "./Redux/actions";

class App extends Component {
  componentDidMount = () => {
    this.props.usernameFetch()
  }


  render() {
    return (
        <div>
            <Switch>
               <Route path="/signup" render={() => <Forms name="Sign Up" />} />
               <Route path="/login" render={() => <Forms name="Login" />} />
               <Route path="/" component={Home} />
            </Switch>
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    usernameFetch: () => dispatch(usernameFetch())
  }
}

export default connect(null, mapDispatchToProps)(App);
