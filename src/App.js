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
import Article2 from "./Article2.js";
import Article3 from "./Article3.js";
import Article4 from "./Article4.js";
import Article5 from "./Article5.js";

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
        <Route exact path="/article2" component={Article2} />
        <Route exact path="/article3" component={Article3} />
        <Route exact path="/article4" component={Article4} />
        <Route exact path="/article5" component={Article5} />
        <Route exact path="/form" component={Form} />
      </Router>
    </div>
  );
}

export default App;
