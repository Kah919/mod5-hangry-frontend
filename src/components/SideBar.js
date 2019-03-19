import React, { Component } from "react";
import {BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";

const SideBar = props => {
  let logged = () => {
    if(localStorage.token) {
      return (
        <div>
          <Link to="/profile">Profile</Link>
          <Link to="/" onClick={() => localStorage.removeItem("token")} >Sign Out</Link>
        </div>
      )
    } else {
      return (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )
    }
  }

  return (
    <div className="sidenav">
      {logged()}
    </div>
  )
}

export default SideBar;
