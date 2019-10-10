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
                  O que é empréstimo consignado? Quais são as pessoas que podem
                  ter acesso?
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
                  O Empréstimo Consignado é a modalidade de crédito pessoal em
                  que o valor das parcelas é descontado automaticamente do
                  contracheque do tomador ou do benefício do INSS, todo mês.
                  Trata-se do empréstimo pessoal mais barato do Brasil com as
                  taxas mais baratas do mercado (taxas de juros de no máximo
                  2,08% ao mês), não precisa de consulta ao SPC e Serasa, é um
                  crédito fácil e sem burocracia, sendo possível contratar
                  online apenas com o RG, CPF e comprovantes de residência e
                  pagamento. Além disso, as parcelas são fixas do início ao fim
                  do contrato e os prazos são longos, pagamento de até 96 meses.
                  Como as parcelas são descontadas diretamente do salário ou da
                  aposentadoria, para contratar um consignado, você deve ser: 1.
                  Funcionário público; 2. Aposentado; 3. Pensionistas do INSS;
                  4. Funcionário de empresas privadas conveniadas a instituições
                  financeiras; 5. Pessoas empregadas que tenham saldo em conta
                  FGTS. Dessa forma, como uma parte da renda fica comprometida
                  antes mesmo do dinheiro chegar na conta do consumidor, deve
                  ser muito bem planejado antes de querer fazer um empréstimo
                  consignado. Se não for bem pensado, isso pode dificultar o seu
                  planejamento e aumentar os gastos com o pagamento de juros,
                  podendo até mesmo levar a um maior endividamento. Primeiro
                  você precisa ter a certeza de que a quantia que será
                  automaticamente descontada do seu salário ou benefício não irá
                  fazer falta nos seus gastos mensais (conta de luz, energia,
                  aluguel, transporte, alimentação, entre outros).
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
