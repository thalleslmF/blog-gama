import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="navbar-collapse collapse" id="lista-dados"></div>
        <div class="navbar-header">
          <a to="/" className="navbar-brand mx-auto" style={{ color: "white" }}>
            amigo<span>Consignado</span>
          </a>
        </div>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
            <Link to="/posts" className="nav-link">
              Posts
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/form" className="nav-link">
              Contato
            </Link>
          </li>
        </ul>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#lista-dados"
        ></button>
      </div>
    );
  }
}
export default Navbar;
