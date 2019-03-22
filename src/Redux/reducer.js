const initialState = {
  user: {},
  login: false,
  signup: false
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case "LOGGED":
      console.log({...state, user: action.payload})
      return {...state, user: action.payload}
    case "SIGN_UP":
      return {...state}
    case "USERNAME":
      // console.log("Inside the reducer this is the username:", ...state)
      return {...state}

    case "SET_REDIRECT_STATE":
      return {...state, [action.payload]:true}

    case "RESET_REDIRECT_STATE":
      return {...state,
      login: false,
      signup: false }

    case "ADD_FAVORITE":
      console.log("adding to favorites from inside the reducer")
      return {...state}

    default:
    return state;
  }
}
