import React, { Component } from "react";
import "./Posts.css";

import { Link, Router } from "react-router-dom";
class Posts extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="offset-md-2 col-md-8">
            <header class="masthead">
              <div class="overlay"></div>
              <div class="container">
                <div class="row">
                  <div class="col-lg-8 col-md-10 mx-auto"></div>
                </div>
              </div>
            </header>
            <div className="container" id="post">
              <div class="row">
                <div class="col-md-12">
                  <div class=" col-md-5">
                    <img
                      className="image-fluid"
                      srcSet="/money-2724241_960_720.jpg"
                      alt=""
                    />
                  </div>
                  <div class="col-md-7">
                    <a style={{ color: "black" }} href="article">
                      Venha fazer empréstimo com a amigo consignado
                    </a>

                    <div className="col-md-12">
                      <div className="col-md-6 col-sm-12">
                        <i className="fa fa-user">Thalles Freitas </i>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <i className="fa fa-calendar"> 06/10/2019</i>
                      </div>
                    </div>

                    <div class="col-md-12">
                      <hr></hr>
                      <p>
                        simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book
                      </p>
                      <Link to="/article" className="btn btn-dark btn-block">
                        Leia Mais
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Posts;
