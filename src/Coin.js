import React, { Component } from "react";
import "./Coin.css";

class Coin extends Component {
  render() {
    return (
      <div>
        <img
          className={`Coin ${this.props.flipping ? "flipping" : ""}`}
          src={this.props.source}
        />
      </div>
    );
  }
}
export default Coin;
