import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="container text-center mt-5 pt-5 mb-5">
        <h1>A Warm Welcome</h1>
        <p className="fs-2 lh-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus ipsum
          veritatis iste itaque alias recusandae magnam accusantium explicabo!
          Quod officia tenetur a incidunt amet blanditiis necessitatibus labore
          quis ut quos?
        </p>
        <button type="button" class="btn btn-primary mt-3">
          Call to action
        </button>
      </div>
    );
  }
}
