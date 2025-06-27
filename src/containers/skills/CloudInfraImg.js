import React, { Component } from "react";
import Cloud from "../../assests/lottie/laptop working.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default class CloudInfraImg extends Component {
  render() {
    // const theme = this.props.theme;
    return <DisplayLottie animationData={Cloud} />;
  }
}
