import React, { Component } from "react";
import "./Article.css";
import Form from "./Form/Form.js";
import { Link, Router } from "react-router-dom";
class Article extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-md-12 " id="article">
              <div class="col-md-12">
                <h3 class="display-5 text-center">
                  {" "}
                  Empréstimo Consignado: Ele é realmente bom?
                </h3>
              </div>
              <div class="col-md-12">
                <p class="text-center">
                  Escrito por:<a>Pedro</a>
                </p>
              </div>

              <div class="col-md-12">
                <hr />
                <p class="text-center">Dia: 07/10/2019 </p>
                <hr />
              </div>

              <div class="col-md-12">
                <div class="offset-md-3 col-md-6 image-fluid">
                  <img srcSet="/money-2724241_960_720.jpg" alt="money" />
                </div>
              </div>
              <div class="col-md-12 col-sm-6">
                <hr></hr>
                <article id="artigo" div class="jumbotron">
                  Crédito pode ser um aliado ou um inimigo para o seu orçamento.
                  Você precisa entender quando vale a pena pegar empréstimo
                  consignado ou quando esse crédito pode fazer você apenas se
                  enrolar ainda mais.
                  <p>
                    O crédito consignado vale a pena quando: a parcela cabe no
                    seu bolso, não comprometendo o pagamento de outras contas
                    que você já tem; você tem uma dívida cara (no cheque
                    especial ou no rotativo do cartão de crédito, por exemplo)
                    em que os juros são muito maiores, é vantajoso usar o
                    consignado para quitá-las, reduzindo assim o valor total que
                    irá pagar de juros; você vai começar um negócio ou pretende
                    fazer uma pequena reforma em casa. Nessas situações, o
                    consignado pode ser uma ótima alternativa, pois permite
                    financiar em um prazo mais longo.
                  </p>
                  <p>
                    {" "}
                    Em contra partida, não se deve usar o consignado quando:
                    você contrata para pagar compras do dia-a-dia, se você
                    precisa recorrer a empréstimos para isso, o mais adequado é
                    rever seu orçamento, cortar gastos ou aumentar sua renda;
                    usar o dinheiro do empréstimo consignado para fazer uma
                    aplicação, ainda que mais baixos, os juros do crédito
                    consignado são muito superiores ao rendimento de qualquer
                    aplicação oferecida pelas instituições financeiras; alguém
                    te pedir dinheiro emprestado, se um familiar ou amigo pedir
                    para contratar o empréstimo em seu nome, não aceite,
                    lembre-se que a dívida estará no seu nome. Vamos falar um
                    pouco das vantagens e desvantagens do crédito consignado. As
                    vantagens incluem taxas de juros inferiores às das demais
                    linhas de crédito do mercado. O consignado pode ser útil em
                    uma situação emergencial, como alguma doença que precisa de
                    um tratamento mais caro. Há uma maior facilidade para
                    contratar, pouca burocracia e rapidez para a liberação do
                    dinheiro na conta, já que o banco tem a garantia de
                    recebimento. Uma boa dica é que todas as suas dívidas não
                    superem 20% do que você ganha. Outra vantagem são os prazos
                    longos, em alguns os bancos oferecem até 120 meses para
                    pagar. As desvantagens incluem o risco de perder o emprego
                    (se você trabalha em uma empresa privada), nesse caso você
                    terá de quitar o empréstimo de uma vez só ou trocar o
                    consignado por outro empréstimo, que custa mais caro. Além
                    disso, é comum o contrato de consignado prever o desconto de
                    até 30% do valor que você irá receber na rescisão. Confira
                    as regras atentamente com o banco antes de assinar o
                    contrato. Ás vezes a dívida em longo prazo pode ser uma
                    desvantagem, pois imprevistos acontecem o tempo todo. Além
                    disso, o desconto será feito diretamente de seu pagamento,
                    portanto, você não poderá adiar ou suspender o débito. Você
                    também poderá encontrar mais dificuldade para renegociar o
                    empréstimo, caso surja essa necessidade.
                  </p>
                </article>
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Article;
