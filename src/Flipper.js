import React, { Component } from "react";
import "./Flipper.css";
import Coin from "./Coin";
import heads from "./heads.png";
import tails from "./tails.png";
class Flipper extends Component {
  static defaultProps = {
    faces: [tails, heads],
  };
  constructor(props) {
    super(props);
    this.state = {
      currentFace: this.flip(),
    };
  }

  flip() {
    return this.props.faces[Math.floor(Math.random() * 2)];
  }
  render() {
    return (
      <div>
        <Coin source={this.state.currentFace} />
      </div>
    );
  }
}
export default Flipper;
