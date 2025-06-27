import React, { Component } from "react";
import Blog from "../../assests/lottie/hired2.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import { contactPageData } from "../../portfolio";

export default class BlogsImg extends Component {
  render() {
    // const theme = this.props.theme;
    return <DisplayLottie animationData={contactPageData} />;
  }
}
