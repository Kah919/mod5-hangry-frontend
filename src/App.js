import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Forms from "./components/Forms";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider, connect } from "react-redux";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Users from "./components/Users";
import Favorites from "./components/Favorites";
import SideBar from "./components/SideBar";
import CategoriesContainer from "./components/CategoriesContainer";
import LeftSideBar from "./components/LeftSideBar"
import store from "./store";
import { usernameFetch } from "./Redux/actions";

class App extends Component {
  componentDidMount = () => {
    this.props.usernameFetch()
  }

  render() {
    return (
      <div>
        <Router>
            <Switch>
              <Route path="/favorites" render={() => <Favorites />} />
              <Route path="/categories" render={() => <CategoriesContainer />} />
              <Route path="/signup" render={() => <Forms name="Sign Up" />} />
              <Route path="/login" render={() => <Forms name="Login" />} />
              <Route path="/users" render={() => <Users />} />
              <Route path="/" render={() => <Home />} />
            </Switch>
        </Router >
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    usernameFetch: () => dispatch(usernameFetch())
  }
}

const mapStateToProps = (state) =>{
  return{
    username: state.username
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
