import React, { Component } from "react";
import "./App.css";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo">
          <p id="logo">
            bx<span>blue</span>
          </p>
        </div>
        <div className="logo">
          <ul>
            <li>
              <a href="#contato">Contato</a>
            </li>
            <li>
              <a href="#posts">Posts</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Navbar;
