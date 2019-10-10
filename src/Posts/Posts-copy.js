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

            <div class="row" id="posts" style={{ "margin-top": "20px" }}>
              {/* <div class="col-md-12">
                <h3 id="orange"> Posts Recentes</h3>
              </div> */}
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
                            O que é empréstimo consignado? Quais são as pessoas
                            que podem ter acesso?
                          </Link>
                        </h4>
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-6 col-sm-12">
                              <i className="fa fa-user">Pedro </i>
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <i className="fa fa-calendar"> 07/10/2019</i>
                            </div>
                          </div>
                        </div>
                        <hr></hr>
                        <div class="row">
                          <div class="col-md-12">
                            <p>
                              O Empréstimo Consignado é a modalidade de crédito
                              pessoal em que o valor das parcelas é descontado
                              automaticamente do contracheque do tomador ou do
                              benefício do INSS, todo mês.
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
              </div>
            </div>
            <div class="row" id="posts" style={{ "margin-top": "20px" }}>
              {/* <div class="col-md-12">
                <h3 id="orange"> Posts Recentes</h3>
              </div> */}
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
                            Empréstimo Consignado: Ele é realmente bom?
                          </Link>
                        </h4>
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-6 col-sm-12">
                              <i className="fa fa-user">pedro </i>
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <i className="fa fa-calendar"> 07/10/2019</i>
                            </div>
                          </div>
                        </div>
                        <hr></hr>
                        <div class="row">
                          <div class="col-md-12">
                            <p>
                              Crédito pode ser um aliado ou um inimigo para o
                              seu orçamento. Você precisa entender quando vale a
                              pena pegar empréstimo consignado ou quando esse
                              crédito pode fazer você apenas se enrolar ainda
                              mais.
                            </p>
                            <Link
                              to="/article2"
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
              </div>
            </div>
            <div class="row" id="posts" style={{ "margin-top": "20px" }}>
              {/* <div class="col-md-12">
                <h3 id="orange"> Posts Recentes</h3>
              </div> */}
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
                            5 motivos para o crédito consignado
                          </Link>
                        </h4>
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-6 col-sm-12">
                              <i className="fa fa-user">Tanise </i>
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <i className="fa fa-calendar"> 07/10/2019</i>
                            </div>
                          </div>
                        </div>
                        <hr></hr>
                        <div class="row">
                          <div class="col-md-12">
                            <p>
                              Quem nunca passou um aperto financeiro, precisou
                              pagar uma conta que estava atrasada ou um dinheiro
                              extra para realizar aquela viagem dos sonhos. Pois
                              é, com o empréstimo consignado você consegue fazer
                              todas essas coisas sem se endividar. Isto porque o
                              empréstimo consignado proporciona para você:
                            </p>
                            <Link
                              to="/article3"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Posts;
