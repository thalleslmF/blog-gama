import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import $ from "jquery";
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
$(document).ready(function() {
  $.getJSON("http://api.db-ip.com/v2/free/self").then(addrInfo =>
    sessionStorage.setItem("ip", addrInfo.ipAddress)
  );
});
