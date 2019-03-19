import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { loginFetch } from "../Redux/actions";
import { signUpFetch } from "../Redux/actions";
import { connect } from "react-redux";
import NavBar from "./NavBar";

class Forms extends Component {
  state = {
    username: "",
    password: ""
  }

  user_input = event => {
    // console.log(event.target.name)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // this.props.loginFetch(this.state)

  submit = () => {
    if(this.props.name === "Sign Up") {
      this.props.signUpFetch(this.state)
    } else {
      this.props.loginFetch(this.state);
    }
  }

  render() {
    console.log(this.props.name)
    return (
      <div>
      <NavBar />

      <div className="login_container">
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <div className="card">
              <div className="card-header">
                <h3><span className="h">H</span>ANGRY!!</h3>
                <div className="d-flex justify-content-end social_icon">
                  <span><i className="fab fa-facebook-square"></i></span>
                  <span><i className="fab fa-github-square"></i></span>
                  <span><i className="fab fa-twitter-square"></i></span>
                </div>
              </div>
              <div className="card-body">
                <form>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-user"></i></span>
                      <input type="text" name="username" className="form-control" placeholder="USERNAME" onChange={this.user_input} value={this.state.username}/>
                    </div>

                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-key"></i></span>
                      <input type="password" name="password" className="form-control" placeholder="PASSWORD" onChange={this.user_input} value={this.state.password}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <input value={this.props.name} className="btn float-right login_btn" onClick={this.submit}/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => { // mapDispatchToProps sends info, arg of dispatch
  return { // returns and object usually name of what you want to return as a key
    loginFetch: (loginInfo) => dispatch(loginFetch(loginInfo)), // dispatch the imported data ususally same as key before
    signUpFetch: (signUpInfo) => dispatch(signUpFetch(signUpInfo))
    // need to pass in an argument
  }
}

export default connect(null, mapDispatchToProps)(Forms);
