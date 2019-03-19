const initialState = {
  username: ""
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "LOGGED":
      return {...state, username: action.payload}
    case "SIGN_UP":
      return {...state}
    default:
    return state;
  }
}

export default reducer
