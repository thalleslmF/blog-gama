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
      body: encode({ "form-name": "cadastro", ...this.state })
    })
      .then(() => alert("Sucesso!"))
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
      (date.getHours() < 10 ? "0" + date.getHours() : +date.getHours()) +
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
      <div className="row" id="alinha-itens">
        <div className="col-sm-12 col-md-6 ">
          <h2 className="" id="header-blue">
            Entre em contato para saber mais!
          </h2>
          <p>Inscreva-se com seu nome e email para nos acompanhar.</p>
        </div>
        <div class="row">
          <div className="col-sm-12 col-md-12 " id="shadow">
            <form onSubmit={this.handleSubmit}>
              <input type="hidden" name="form-name" value="cadastro" />
              <h2>Cadastro</h2>
              <div className="form-group">
                <div className="prepend">
                  <i className="prepend"></i>
                  <label style={{ color: "yellow" }}>Nome</label>
                  <input
                    placeholder="Nome Completo"
                    type="text"
                    className="form-control col-md-12"
                    name="nome"
                    id="nome"
                    onChange={this.mudaValor}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="prepend">
                  <label style={{ color: "yellow" }}>Email</label>
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
              <button id="btnYellow" type="submit" className="btn">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Form;
