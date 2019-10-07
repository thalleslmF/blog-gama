import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo">
          <a href="/">
            bx<span>blue</span>
          </a>
        </div>
        <div className="logo">
          <Link to="/posts">Posts</Link>
        </div>
        <div className="logo">
          <Link to="/form">Contato</Link>
        </div>
      </div>
    );
  }
}
export default Navbar;
