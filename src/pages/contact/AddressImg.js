import React, { Component } from "react";
import Office from "../../assests/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default class ExperienceImg extends Component {
  render() {
    // const theme = this.props.theme;
    return <DisplayLottie animationData={Office} />;
  }
}
