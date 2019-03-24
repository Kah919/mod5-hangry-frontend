
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
            console.log("data from action", data)
            // this.setState({user: data.user}, console.log("This is the data at login", data))
            dispatch(logged(data)) //data.user.username
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

export const usernameFetch = userObj => {
  return (dispatch) => {
    if (localStorage.token) {
      fetch("http://localhost:3000/api/v1/profile", {
        method: "GET",
        headers: {
          "Accept" : "application/json",
          "Content-Type" : "application/json",
          "Authorization" : `Bearer ${localStorage.token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        dispatch(logged(data.user))
      })
    }
  }
}

export const addToFavorite = (obj) => { // writing some code here lets see if it works
  return { // will be sending this to the reducer
    type: "ADD_FAVORITE",
    payload: obj
  }
}

export const addToFavoriteFetch = (recipe) => { // this now has the information of the card so now we can make a fetch
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/recipes", {
      method: "POST",
      headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        ingredients: {recipe: recipe.ingredients},
        recipeName: recipe.recipeName,
        imageUrlsBySize: recipe.imageUrlsBySize["90"].replace("90-c", "600-c"),
        totalTimeInSeconds: recipe.totalTimeInSeconds / 60,
        rating: recipe.rating
      })
    })
    .then(res => res.json())
    .then(data => {
      dispatch(logged(data.user))
    })
  }
}
