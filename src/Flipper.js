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
      headsCount: 0,
      tailsCount: 0,
    };
    this.flip = this.flip.bind(this);
  }

  flip(e) {
    this.setState((st) => {
      return {
        currentFace: this.props.faces[Math.floor(Math.random() * 2)],
        isFlipping: true,
        //How to update a state. st is the current state object
        headsCount:
          st.currentFace === heads ? st.headsCount + 1 : st.headsCount,
        tailsCount:
          st.currentFace === tails ? st.tailsCount + 1 : st.tailsCount,
      };
    });
    setTimeout(
      () =>
        this.setState({
          isFlipping: false,
        }),
      1000
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
