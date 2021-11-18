import React, { Component } from "react";
import "./Flipper.css";
import Coin from "./Coin";
import heads from "./heads.png";
import tails from "./tails.png";
class Flipper extends Component {
  static defaultProps = {
    faces: ["tails", "heads"],
  };
  constructor(props) {
    super(props);
    this.state = {
      currentFace: "tails",
      isFlipping: false,
      headsCount: 0,
      tailsCount: 0,
    };
    this.flip = this.flip.bind(this);
  }

  flip(e) {
    const face = this.props.faces[Math.floor(Math.random() * 2)];
    this.setState((st) => {
      return {
        isFlipping: true,
      };
    });
    setTimeout(
      () =>
        this.setState((st) => {
          return {
            currentFace: face,
            //How to update a state. st is the current state object
            headsCount: face === "heads" ? st.headsCount + 1 : st.headsCount,
            tailsCount: face === "tails" ? st.tailsCount + 1 : st.tailsCount,
            isFlipping: false,
          };
        }),
      1000
    );
  }
  render() {
    return (
      <div className="Flipper">
        <Coin
          flipping={this.state.isFlipping}
          source={this.state.currentFace === "tails" ? tails : heads}
        />

        <button
          onClick={this.flip}
          disabled={this.state.isFlipping}
          className={this.state.isFlipping ? "flipping" : ""}
        >
          {this.state.isFlipping ? "Flipping..." : "Flip me!"}
        </button>
        <p>Total flips: {this.state.headsCount + this.state.tailsCount}</p>

        <p>
          {this.state.headsCount} heads - {this.state.tailsCount} tails
        </p>
      </div>
    );
  }
}
export default Flipper;
