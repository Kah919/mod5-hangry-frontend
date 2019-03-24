import React, { Component } from "react";
import { Link, Redirect} from "react-router-dom";
import { connect } from "react-redux";
import { usernameFetch} from "../Redux/actions"



const SideBar = props => {
  console.log("username from the side bar", props.user);

  let componentDidMount = () => {
    props.usernameFetch()
    props.resetRedirectState()
  }

    if(props.login){
      return <Redirect to="/login"/>
    }
    else if (props.signup){
      return <Redirect to="/signup"/>
    }



  let logged = () => {
    if(localStorage.token) {
      console.log("this is inside of the logged in side bar", props.user)
      return (
        <div>
          <h2 className="sidebar_username">{props.user.username}</h2>
          <Link to="/profile">Profile</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/follows">Follows</Link>
          <Link to="/favorites">Favorites</Link>


          <Link to="/login" onClick={() => localStorage.removeItem("token")} >Sign Out</Link>
        </div>
      )
    } else {
      return (
        <div>
          <span id="login" onClick={(event) => props.setRedirectState(event.target.id)}>Login</span> <br/>
          <span id="signup" onClick={(event) => props.setRedirectState(event.target.id)}>Sign Up</span>
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
    user: state.user,
    login: state.login,
    signup: state.signup
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    usernameFetch: () => dispatch(usernameFetch()),
    setRedirectState: (clickedSpan) => dispatch({type: "SET_REDIRECT_STATE", payload: clickedSpan}),
    resetRedirectState: (clickedSpan) => dispatch({type: "RESET_REDIRECT_STATE", payload: clickedSpan})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
