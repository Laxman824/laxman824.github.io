import React, { Component } from "react";
import Project from "../../assests/lottie/project.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default class ProjectsImg extends Component {
  render() {
    // const theme = this.props.theme;
    return <DisplayLottie animationData={Project} />;
  }
}
