import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubStats from "./GithubStats";
import TopButton from "../../components/topButton/TopButton";
import "./GithubPage.css";

function GithubPage(props) {
  return (
    <div className="github-page-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="github-page-body">
        <GithubStats theme={props.theme} setTheme={props.setTheme} />
      </div>
      <Footer theme={props.theme} />
      <TopButton theme={props.theme} />
    </div>
  );
}

export default GithubPage;
