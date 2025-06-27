import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import a from "../../assests/images/coursera.jpg";
import d from "../../assests/images/walmart_cert.png";
import e from "../../assests/images/goldman_cert.png";
import b from "../../assests/images/Morgan_cert.png";
import meta from "../../assests/images/meta.png";
import google from "../../assests/images/Google.png";
import ibm from "../../assests/images/ibm3.png";
import verified from "../../assests/images/Verified.png";
import { Fade } from "react-reveal";
// import PropTypes from 'prop-types';

function Education(props) {
  const theme = props.theme;
  return (
    <div className="education-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
                <span
                  className="cap-emoji"
                  role="img"
                  aria-label="graduation cap"
                >
                  🎓
                </span>
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                Qualification and Certifications
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                I have done my B.Tech and M.Tech from IIT Delhi with CS Degree.
                I actively participate in hackathons and other tech-related
                activities. Below are some of my major certifications.
              </p>
            </div>
          </div>
        </Fade>

        <Educations theme={props.theme} />
        <h3 className="heading-sub-text-new" style={{ fontSize: 40 }}>
          <h4>
            <span>Accredited as a Certified Professional</span>
          </h4>
        </h3>
        <div class="containerCer">
          <div class="box">
            <span class="ribbon1">
              <span>Approx 12 months at 10 hours a week to complete</span>
            </span>
            <img src={ibm} alt="IBM" />
            <div class="text">
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText, fontSize: 25 }}
              >
                <br />
                <br />
                IBM Certified Professional Back-End Developer.
              </p>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                Certificte No :{" "}
                <span style={{ color: "white", fontWeight: "bold" }}>
                  BUDCPWS7WFKM
                </span>
              </p>
              <img src={verified} style={{ height: 150 }} />
            </div>
            <span class="ribbon3">
              <span>$499 USD</span>
            </span>
          </div>
          <div class="box">
            <span class="ribbon1">
              <span>Approx 8 months at 6 hours a week to complete</span>
            </span>
            <img src={meta} alt="Meta" style={{ height: 100 }} />
            <br />
            <br />
            <div class="text">
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText, fontSize: 25 }}
              >
                Meta Certified Professional Back-End Developer.
              </p>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                Certificte No :{" "}
                <span style={{ color: "white", fontWeight: "bold" }}>
                  QDRP9HJQMFS6
                </span>
              </p>
              <img src={verified} style={{ height: 150 }} />
            </div>
            <span class="ribbon3">
              <span>$449 USD</span>
            </span>
          </div>
        </div>
        <Certifications theme={props.theme} />
        <center>
          <h3 className="heading-sub-text">
            Verified Professional Certificates
            <br />
            <br />
          </h3>
        </center>
        <center>
          <li className="organizations-inline">
            <Fade bottom duration={2000} distance="40px">
              <a
                href="https://github.com/Laxman824/AWS-Cloud-technical-essentials"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="organizations-imgnew" src={a} alt="aaaaaa" />
              </a>
            </Fade>
          </li>

          <li className="organizations-inline">
            <Fade bottom duration={2000} distance="40px">
              <a
                href="https://github.com/Laxman824/Virtual-Internships/tree/main/walmart"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="organizations-imgnew" src={d} alt="aaaaaa" />
              </a>
            </Fade>
          </li>

          <li className="organizations-inline">
            <Fade bottom duration={2000} distance="40px">
              <a
                href="https://github.com/Laxman824/Virtual-Internships/tree/main/JPMorgan%20Chase"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="organizations-imgnew" src={b} alt="aaaaaa" />
              </a>
            </Fade>
          </li>

          <li className="organizations-inline">
            <Fade bottom duration={2000} distance="40px">
              <a
                href="https://github.com/Laxman824/Virtual-Internships/tree/main/GoldmanSachs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="organizations-imgnew" src={e} alt="aaaaaa" />
              </a>
            </Fade>
          </li>
        </center>
      </div>
      <Footer theme={props.theme} />
    </div>
  );
}

export default Education;
