// httpss://chatster-app-api.herokuapp.com
export const logged = (obj) => {
  return {
    type: "LOGGED",
    payload: obj
  }
}

export const invalid = () => {
  return {
    type: "INVALID",
    payload: true
  }
}

export const loginFetch = userObj => {
  return (dispatch) => {
        // fetch("https://localhost:3000/api/v1/login", {
        fetch("https://hangry-fapoon.herokuapp.com/api/v1/login", {
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
            if(data.user) {
              localStorage.setItem("token", data.jwt);
              console.log("data from action", data)
              // this.setState({user: data.user}, console.log("This is the data at login", data))
              dispatch(logged(data.user)) //data.user.username
              alert(`Welcome back ${data.user.username} 🥢`)
            } else {
              alert("No existing user")
              dispatch(invalid())
            }
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
    // fetch("https://localhost:3000/api/v1/users", {
    fetch("https://hangry-fapoon.herokuapp.com/api/v1/users", {
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
    .then(alert("You are now signed up, please log in 🥢"))
  }
}

export const usernameFetch = userObj => {
  return (dispatch) => {
    if (localStorage.token) {
      // fetch("https://localhost:3000/api/v1/profile", {
      fetch("https://hangry-fapoon.herokuapp.com/api/v1/profile", {
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

export const usersList = (users) => {
  return {
    type: "USERS_LIST",
    payload: users
  }
}

export const usersListFetch = () => {
  return (dispatch) => {
    // fetch("https://localhost:3000/api/v1/users")
    fetch("https://hangry-fapoon.herokuapp.com/api/v1/users")
      .then(res => res.json())
      .then(users => {
        dispatch(usersList(users))
      })
  }
}

// export const filteredListFetch = () => {
//   return (dispatch) => {
//     fetch("https://localhost:3000/api/v1/users")
//   }
// }

export const addToFavorite = (obj) => { // writing some code here lets see if it works
  return { // will be sending this to the reducer
    type: "ADD_FAVORITE",
    payload: obj
  }
}

export const addToFavoriteFetch = (recipe) => { // this now has the information of the card so now we can make a fetch
  return (dispatch) => {
    // fetch("https://localhost:3000/api/v1/recipes", {
    fetch("https://hangry-fapoon.herokuapp.com/api/v1/recipes", {
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

export const addFriend = (info) => { // writing some code here lets see if it works
  return { // will be sending this to the reducer
    type: "ADD_FRIEND",
    payload: info
  }
}

export const addFriendFetch = (info) => {
  return (dispatch) => {
    // fetch(`https://localhost:3000/api/v1/follows`, {
      fetch(`https://hangry-fapoon.herokuapp.com/api/v1/follows`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
        "Authorization" : `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        follower_id: info.myId,
        followed_id: info.friendInfo
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(".......", data);
      dispatch(addFriend(data.followed))
      dispatch(logged(data.user))
    })
  }
}

export const showFriend = (userInfo) => {
  return {
    type: "SHOW_FRIEND",
    payload: userInfo
  }
}

export const showFriendFetch = (userId) => {
  console.log("This is from the action printing id:", userId)
  return (dispatch) => {
    // fetch(`https://localhost:3000/api/v1/users/${userId}`)
    fetch(`https://hangry-fapoon.herokuapp.com/api/v1/users/${userId}`)
    .then(res => res.json())
    .then(userInfo => {
      dispatch(showFriend(userInfo))
    })
  }
}
