import { combineReducers } from "redux";
import reducer1 from "./reducer1";
import reducer2 from "./reducer2";

//combine reducer for multiple reducers]
//Dont forget to Put <App> inside a Provider at App.js

//combinar mais de 1 reducer
//Nao esqueca de colocar o <App> dentro do Provider no App.js

const rootReducer = combineReducers({
  reducer1State: reducer1,
  reducer2State: reducer2
});

export default rootReducer;
