import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  render() {
    return (
      <div className="container-posts">
        <div className="sidebar"></div>

        <div class="post-preview">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2 className="display-5" id="header-blue">
                  Entre em contato para as melhores ofertas
                </h2>
                <p>
                  Inscreva-se com seu nome e email para poder acompanhar as
                  melhores ofertas e propostas disponiveis!
                </p>
              </div>
              <div class="col-md-6" id="shadow">
                <form>
                  <h3>Cadastro</h3>
                  <div className="form-group">
                    <div className="prepend">
                      <i className="prepend"></i>
                      <label>Nome</label>
                      <input
                        placeholder="Nome Completo"
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="prepend">
                      <label>Email</label>
                      <i className="prepend"></i>
                      <input
                        placeholder="Email"
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <button class="btn btn-primary">Enviar</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar1"></div>
      </div>
    );
  }
}
export default Form;
