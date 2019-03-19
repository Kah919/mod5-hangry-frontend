import React, { Component } from "react";
import {BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";

class NavBar extends Component {

  logged = () => {
    if(localStorage.token) {
      return (
        <div className="navigation">
          <Link to="/login"><li onClick={() => localStorage.removeItem("token")}>Sign Out</li></Link>
        </div>
      )
    } else {
      return (
        <div className="navigation">
          <Link to="/login"><li>Login</li></Link>
          <Link to="/signup"><li>Sign Up</li></Link>
        </div>
      )
    }
  }

  render() {
    return(
      <div>
      <BrowserRouter>
        <Switch>
          {this.logged()}
        </Switch>
      </BrowserRouter>
      </div>
    )
  }
}

export default NavBar;
