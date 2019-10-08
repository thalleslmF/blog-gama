import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  chamaFuncao = e => {
    var currentDate = new Date();

    var date = currentDate.getDate();
    var month = currentDate.getMonth(); //Be careful! January is 0 not 1
    var year = currentDate.getFullYear();

    var dateString = date + "-" + (month + 1) + "-" + year;
    document.getElementById("date").value = currentDate;
    console.log(document.getElementByid("date").value);
    console.log("here");
  };
  render() {
    return (
      <div class="container-fluid">
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
              <div class="col-sm-12 col-md-6 " id="shadow">
                <form onSubmit={this.chamaFuncao} name="cadastro" netlify>
                  <h3>Cadastro</h3>
                  <div className="form-group">
                    <div className="prepend">
                      <i className="prepend"></i>
                      <label>Nome</label>
                      <input
                        placeholder="Nome Completo"
                        type="text"
                        className="form-control col-md-12"
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
                  <input
                    onChange={this.chamaFuncao}
                    style={{ display: "hidden" }}
                    id="date"
                    name="date"
                  />
                  <button type="button" class="btn btn-primary">
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
