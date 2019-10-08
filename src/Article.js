import React, { Component } from "react";

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
            <div class="row">
              <div class="col-md-12 col-sm-12">
                <article>
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book It is a long
                  established fact that a reader will be distracted by the
                  readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </article>
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
