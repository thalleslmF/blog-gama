import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <div class="navbar-header">
          <a to="/" className="navbar-brand mx-auto" style={{ color: "white" }}>
            amigoConsignado
          </a>
        </div>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#lista-dados"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="lista-dados">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item ">
              <Link to="/posts" className="nav-link">
                Inicio
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link">
                Ebook
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
