import React, { Component } from "react";
import "./Article.css";
import { Link, Router } from "react-router-dom";
class Article extends Component {
  render() {
    return (
      <div className="container-posts">
        <div className="sidebar"></div>
        <div className="postzao">
          <div class="post-preview">
            <h3 class="display-5">Titulo</h3>
            <p>
              Escrito por:<a>Thalles</a>
            </p>
            <hr />
            Dia: 07/10/2019
            <hr />
            <div class="container" id="artigo">
              <div class="row">
                <div class="col-md-12">
                  <div class="offset-md-3 col-md-9">
                    <img srcSet="/money-2724241_960_720.jpg" alt="money" />
                  </div>
                </div>
                <div class="col-md-12 col-sm-6">
                  <article>
                    Quem nunca passou um aperto financeiro, precisou pagar uma
                    conta que estava atrasada ou um dinheiro extra para realizar
                    aquela viagem dos sonhos. Pois é, com o empréstimo
                    consignado você consegue fazer todas essas coisas sem se
                    endividar. Isto porque o empréstimo consignado proporciona
                    para você:
                    <b>1. JUROS MAIS BAIXOS DO QUE O EMPRÉSTIMO PESSOAL</b>
                    <p>
                      Isso acontece porque a dívida é descontada do seu
                      pagamento, logo o banco tem maior segurança que receberá o
                      valor de volta, e por isso, consegue baixar mais os juros.
                    </p>
                    <b>2. LIBERAÇÃO DO CRÉDITO MESMO COM O NOME NEGATIVADO</b>
                    <p>
                      Ficou com o nome negativado no mercado por causa do
                      desequilíbrio financeiro? Isso não é problema, muitos
                      bancos liberam o crédito para você resolver sua vida!
                    </p>
                    <b> 3. TAXA DE JUROS É PRÉ FIXADA</b>
                    <p>
                      {" "}
                      Isso significa que você já sabe previamente a taxa dos
                      juros que irá pagar, e o quanto a mais você gasta com
                      isso.
                    </p>
                    <b>
                      {" "}
                      4. VOCÊ PODE PEGAR UM CONSIGNADO PARA QUITAR UMA DÍVIDA{" "}
                    </b>
                    <p>
                      Como os juros para pessoa física é mais em conta, você
                      pode aproveitar o consignado para pagar aquela conta
                      pendente que você enrolava para quitar.
                    </p>
                    <b>5. CRÉDITO PARA VOCÊ USAR COMO QUISER</b>
                    <p>
                      {" "}
                      Como o crédito consignado, é o contratante que define o
                      que fazer com o benefício, ao contrário de um
                      financiamento de veículo ou imóvel, você pode pegar o
                      dinheiro para fazer aquela viagem dos sonhos
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar1"></div>
      </div>
    );
  }
}
export default Article;
