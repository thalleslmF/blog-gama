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

          <div className="post-preview">
            <div className="col-md-12">
              <div class="row">
                <div class=" offset-md-3 col-md-8">
                  <img
                    className="image-fluid"
                    srcSet="\bxblue-emprestimo.png"
                    alt=""
                  />
                </div>
                <div className="offset-md-2 col-md-8">
                  <div className="row">
                    <h4>
                      <a href="article">Venha fazer empréstimo com a bxblue </a>
                    </h4>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <i className="fa fa-user">Thalles Freitas </i>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <i className="fa fa-calendar"> 06/10/2019</i>
                  </div>
                </div>
              </div>
              <hr></hr>
              <p>
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book
              </p>

              <br />
              <div className="col-md-12">
                <Link to="/article" className="btn btn-info btn-block">
                  Leia Mais
                </Link>
              </div>
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
