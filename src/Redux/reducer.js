const initialState = {
  username: ""
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case "LOGGED":
      console.log({...state, username: action.payload})
      return {...state, username: action.payload}
    case "SIGN_UP":
      return {...state}
    case "USERNAME":
      console.log("Inside the reducer this is the username:", ...state)
      return {state}

    default:
    return state;
  }
}
