import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App.js";
import store from "./store";

//Get App inside Provider to make store readable from everywhere inside my app
//Envolver o App com o provider para que a store possa ser compartilhada na aplicacao
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
