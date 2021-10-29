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
      flipCount: 0,
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
        flipCount: st.flipCount + 1,
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
        <p>Total flips: {this.state.flipCount}</p>
        <p>Total heads: {this.state.headsCount}</p>
        <p>Total tails: {this.state.tailsCount}</p>
        <button
          onClick={this.flip}
          disabled={this.state.isFlipping}
          className={this.state.isFlipping ? "flipping" : ""}
        >
          {this.state.isFlipping ? "Flipping..." : "Flip me!"}
        </button>
      </div>
    );
  }
}
export default Flipper;
