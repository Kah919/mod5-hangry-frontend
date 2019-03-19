import { Redirect } from "react-router-dom";

export const logged = (obj) => {
  return {
    type: "LOGGED",
    payload: obj
  }
}

export const loginFetch = userObj => {
  return (dispatch) => {
        fetch("http://localhost:3000/api/v1/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accepts: "application/json"
          },
          body: JSON.stringify({
            user: userObj
          })
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("token", data.jwt);
            // this.setState({user: data.user}, console.log("This is the data at login", data))
            dispatch(logged(data.user.username))
          // }
        })
      }

}

export const signup = obj => {
  return {
    type: "SIGN_UP",
    payload: obj
  }
}

export const signUpFetch = userObj => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        user: userObj
      })
    })
    .then(res => res.json())
    .then(console.log)
  }
}
