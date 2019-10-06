import React, { Component } from "react";
import "./Posts.css";
import { Link, Router } from "react-router-dom";
class Posts extends Component {
  render() {
    return (
      <div className="container-posts">
        <div className="sidebar"></div>
        <div className="postzao">
          <h1>Posts recentes</h1>
          <div class="post-preview">
            <img src="\bxblue-emprestimo.png" alt="" srcset="" />
            <h2>
              <a href="article">Venha fazer empréstimo com a bxblue </a>
            </h2>
            <p>
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book
            </p>

            <Link to="/contact" class="square_btn">
              Leia Mais
            </Link>
          </div>
        </div>

        <div className="sidebar1"></div>
      </div>
    );
  }
}
export default Posts;
