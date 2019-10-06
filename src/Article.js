import React, { Component } from "react";

import { Link, Router } from "react-router-dom";
class Article extends Component {
  render() {
    return (
      <div className="container-posts">
        <div className="sidebar"></div>
        <div className="postzao">
          <div class="post-preview">
            <p>
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book
            </p>
          </div>
        </div>

        <div className="sidebar1"></div>
      </div>
    );
  }
}
export default Article;
