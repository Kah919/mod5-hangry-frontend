import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import rootReducer from "./reducers/index"
import reducer from "./Redux/reducer";


const initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, applyMiddleware(...middleware));
console.log("inside store", initialState)
export default store;
