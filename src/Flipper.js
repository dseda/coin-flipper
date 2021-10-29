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
      currentFace: tails,
      isFlipping: false,
    };
    this.flip = this.flip.bind(this);
  }

  flip(e) {
    this.setState({
      currentFace: this.props.faces[Math.floor(Math.random() * 2)],
      isFlipping: true,
    });
    setTimeout(
      () =>
        this.setState({
          isFlipping: false,
        }),
      700
    );
  }
  render() {
    return (
      <div className="Flipper">
        <Coin
          flipping={this.state.isFlipping}
          source={this.state.currentFace}
        />
        <button
          onClick={this.flip}
          className={this.state.isFlipping ? "flipping" : ""}
        >
          {this.state.isFlipping ? "Flipping..." : "Flip me!"}
        </button>
      </div>
    );
  }
}
export default Flipper;
