import React, { Component } from "react";
import heads from "./heads.png";
import tails from "./tails.png";
import "./Coin.css";
class Coin extends Component {
  static defaultProps = {
    source: tails,
  };
  render() {
    return <img className="Coin" src={this.props.source} />;
  }
}
export default Coin;
