import React from "react";
import {
  Link,
  BrowserRouter as Router,
  Redirect,
  Route
} from "react-router-dom";
import "./App.css";
import img from "./sunrise-1634197_960_720.jpg";
import Navbar from "./Navbar.js";
import Posts from "./Posts/Posts.js";
import Article from "./Article.js";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Redirect path="/" to="/posts" />

        <Route path="/posts" component={Posts} />
        <Route path="/contact" component={Article} />
      </Router>
    </div>
  );
}

export default App;
