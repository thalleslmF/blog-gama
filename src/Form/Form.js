import React, { Component } from "react";
import "./Form.css";
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
class Form extends Component {
  state = {
    email: "",
    nome: "",
    data: "",
    ip: "",
    b2b: ""
  };
  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };
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

    if (e.target.name === "email") {
      var emailUser = e.target.value;

      if (
        emailUser.includes("yahoo") ||
        emailUser.includes("gmail") ||
        emailUser.includes("hotmail")
      ) {
        this.setState({
          b2b: "b2c"
        });
      } else {
        this.setState({
          b2b: "b2c"
        });
      }
    }
    if (e.target.name === "email") {
      this.setState({
        ip: sessionStorage.getItem("ip"),
        date: stringData,
        email: e.target.value
      });
    } else {
      this.setState({
        ip: sessionStorage.getItem("ip"),
        date: stringData,
        nome: e.target.value
      });
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
                <form onSubmit={this.handleSubmit}>
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
                        onChange={this.mudaValor}
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
