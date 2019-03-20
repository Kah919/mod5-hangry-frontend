import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { usernameFetch} from "../Redux/actions"


const SideBar = props => {
  console.log("username from the side bar", props.username);

  let componentDidMount = () => {
    props.usernameFetch()
  }

  let logged = () => {
    if(localStorage.token) {
      return (
        <div>
          <h2 className="sidebar_username">{props.username}</h2>
          <Link to="/profile">Profile</Link>
          <Link to="/category">Categories</Link>
          <Link to="/follows">Follows</Link>
          <Link to="/login" onClick={() => localStorage.removeItem("token")} >Sign Out</Link>
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

const mapStateToProps = (state) => {
  return {
    username: state.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    usernameFetch: () => dispatch(usernameFetch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
