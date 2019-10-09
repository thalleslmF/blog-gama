import React, { Component } from "react";
import "./Posts.css";

import { Link, Router } from "react-router-dom";
class Posts extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="offset-md-1 col-md-10">
            <img src="/IMG-20191009-WA0086.jpg" class="header img-responsive" />

            <div class="row" id="posts">
              <div class="col-md-12">
                <h3 id="orange"> Posts Recentes</h3>
              </div>
              <div class="col-md-8">
                <div className="container" id="post">
                  <div class="col-md-12">
                    <div class="row">
                      <div class=" col-md-5">
                        <img
                          className="image-fluid"
                          srcSet="/money-2724241_960_720.jpg"
                          alt=""
                        />
                      </div>
                      <div class="col-md-7">
                        <h4>
                          <Link id="orange" to="article">
                            Venha fazer empréstimo com a amigo consignado
                          </Link>
                        </h4>
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
                        <div class="row">
                          <div class="col-md-12">
                            <p>
                              simply dummy text of the printing and typesetting
                              industry. Lorem Ipsum has been the industry's
                              standard dummy text ever since the 1500s, when an
                            </p>
                            <Link
                              to="/article"
                              className="btn btn-dark btn-block"
                              id="orangeButton"
                            >
                              Leia Mais
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div className="container" id="post">
                  <img srcSet="/como-fazer-um-ebook.jpg" />
                  <p>Resumo</p>
                </div>
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Posts;
