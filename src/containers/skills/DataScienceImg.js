import React, { Component } from "react";
import Data from "../../assests/lottie/data";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default class DataScienceImg extends Component {
  render() {
    // const theme = this.props.theme;
    return <DisplayLottie animationData={Data} />;
  }
}
