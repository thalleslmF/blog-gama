import React from "react";
import {
  Link,
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import "./App.css";
import img from "./sunrise-1634197_960_720.jpg";
import Navbar from "./Navbar.js";
import Posts from "./Posts/Posts-copy.js";
import Article from "./Article.js";
import Form from "./Form/Form.js";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Redirect path="/" to="/posts" />

        <Route exact path="/posts" component={Posts} />
        <Route exact path="/article" component={Article} />
        <Route exact path="/form" component={Form} />
      </Router>
    </div>
  );
}

export default App;
