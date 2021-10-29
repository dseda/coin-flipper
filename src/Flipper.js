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
    };
    this.flip = this.flip.bind(this);
  }

  flip(e) {
    this.setState({
      currentFace: this.props.faces[Math.floor(Math.random() * 2)],
    });
  }
  render() {
    return (
      <div className="Flipper">
        <Coin source={this.state.currentFace} />
        <button onClick={this.flip}> Flip me!</button>
      </div>
    );
  }
}
export default Flipper;
