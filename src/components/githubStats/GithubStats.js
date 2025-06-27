import React from "react";
import "./GithubStats.css";
import { Fade } from "react-reveal";
import { socialMediaLinks } from "../../portfolio";

export default function GithubStats() {
  const username = socialMediaLinks.github.split("/").pop();

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="github-stats-container">
        <h1 className="github-stats-header">GitHub Statistics</h1>
        <div className="github-stats-cards">
          {/* GitHub Stats Card */}
          <div className="github-stat-card">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&count_private=true&theme=tokyonight&hide_border=true&bg_color=0D1117`}
              alt="GitHub Stats"
            />
          </div>

          {/* GitHub Streak Stats */}
          <div className="github-stat-card">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=0D1117`}
              alt="GitHub Streak Stats"
            />
          </div>

          {/* Most Used Languages */}
          <div className="github-stat-card">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0D1117`}
              alt="Most Used Languages"
            />
          </div>

          {/* GitHub Activity Graph */}
          <div className="github-stat-card full-width">
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=tokyo-night&hide_border=true&bg_color=0D1117`}
              alt="GitHub Activity Graph"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
