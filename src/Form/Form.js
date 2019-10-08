import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  mudaValor = e => {
    var date = new Date();

    var stringData =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      (date.getDate() < 10 ? "-0" + date.getDate() : "-" + date.getDate());

    stringData +=
      " " +
      (date.getHours() < 10 ? "0" + date.getHours() : ":" + date.getHours()) +
      (date.getMinutes() < 10
        ? ":0" + date.getMinutes()
        : ":" + date.getMinutes()) +
      (date.getSeconds() < 10
        ? ":0" + date.getSeconds()
        : ":" + date.getSeconds());
    document.getElementById("date").value = stringData;
    console.log(document.getElementById("date").value);

    if (e.target.name === "email") {
      var email = e.target.value;
      console.log(email);
      if (
        email.includes("yahoo") ||
        email.includes("gmail") ||
        email.includes("hotmail")
      ) {
        document.getElementById("b2b").value = "b2c";
      } else {
        document.getElementById("b2b").value = "b2b";
      }
    }
    document.getElementById("ip").value = sessionStorage.getItem("ip");
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
                <form
                  enctype="application/x-www-form-urlencoded"
                  name="cadastro"
                  method="post"
                  netlify
                >
                  <input type="hidden" name="form-name" value="cadastro" />
                  <h3>Cadastro</h3>
                  <div className="form-group">
                    <div className="prepend">
                      <i className="prepend"></i>
                      <label>Nome</label>
                      <input
                        placeholder="Nome Completo"
                        type="text"
                        className="form-control col-md-12"
                        name="nome"
                        id="nome"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="prepend">
                      <label>Email</label>
                      <i className="prepend"></i>
                      <input
                        placeholder="Email"
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                      />
                    </div>
                  </div>
                  <input id="date" name="date" />
                  <input id="ip" name="ip" />
                  <input id="b2b" name="b2b" />
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
