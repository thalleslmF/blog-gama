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
            <div class="col-md-12">
              <div class="row">
                <h2>
                  <a href="article">Venha fazer empréstimo com a bxblue </a>
                </h2>
              </div>
            </div>

            <div class="col-md-12">
              <div class="row">
                <div class="col-md-3">
                  <i class="fa fa-user">Thalles Freitas </i>
                </div>
                <div class="col-md-3">
                  <i class="fa fa-calendar"> 06/10/2019</i>
                </div>
              </div>
            </div>
            <hr></hr>
            <p>
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book
            </p>

            <br />
            <div class="offset-md-4 col-md-8">
              <Link to="/article" class="btn btn-info btn-block">
                Leia Mais
              </Link>
            </div>
          </div>
          <br />
        </div>

        <div className="sidebar1"></div>
      </div>
    );
  }
}
export default Posts;
