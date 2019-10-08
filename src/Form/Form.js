import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  mudaValor = e => {
    document.getElementById("date").value = new Date();
    console.log(document.getElementById("date").value);
    console.log("mudando");
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="sidebar"></div>
        <div className="postzao">
          <div className="container">
            <div className="row" id="alinha-itens">
              <div className="col-sm-12 col-md-6 ">
                <h2 className="" id="header-blue">
                  Entre em contato para as melhores ofertas
                </h2>
                <p>
                  Inscreva-se com seu nome e email para poder acompanhar as
                  melhores ofertas e propostas disponiveis!
                </p>
              </div>
              <div className="col-sm-12 col-md-6 " id="shadow">
                <form method="post" name="cadastro" data-netlify="true">
                  <h3>Cadastro</h3>
                  <div className="form-group">
                    <div className="prepend">
                      <i className="prepend"></i>
                      <label>Nome</label>
                      <input
                        onChange={this.mudaValor}
                        placeholder="Nome Completo"
                        type="text"
                        className="form-control col-md-12"
                        name="nome"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="prepend">
                      <label>Email</label>
                      <i className="prepend"></i>
                      <input
                        onChange={this.mudaValor}
                        placeholder="Email"
                        type="text"
                        className="form-control"
                        name="email"
                      />
                    </div>
                  </div>
                  <input
                    onChange={this.chamaFuncao}
                    style={{ display: "hidden" }}
                    id="date"
                    name="date"
                  />
                  <button type="submit" className="btn btn-primary">
                    Enviar
                  </button>
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
