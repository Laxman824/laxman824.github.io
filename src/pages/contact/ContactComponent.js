import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import BlogsImg from "./BlogsImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import { style } from "glamor";
import ContactImg from "./ContactImg";
import ContactForm from "./contactform";
import AddressImg from "./AddressImg";
import { FaGithub } from "react-icons/fa";
import ProfileCard from "../../components/profileCard/ProfileCard";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
const GoogleMapStyle = {
  border: "green",
  borderRadius: 20,
  border: 30,
};
function Contact(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="20px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <ProfileCard
                imagePath={ContactData["profile_image_path"]}
                theme={theme}
              />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia />
              <br />
              <br />
              <div className="button-container">
                <a
                  {...styles}
                  className="general-btn"
                  href={greeting.resumeLink}
                >
                  See my Resume
                </a>
                <a {...styles} className="github-btn" href="/#/github">
                  <FaGithub className="github-icon" />
                  GitHub Contributions
                </a>
              </div>
              <br />
              <br />
              <br />
              <a
                {...styles}
                className="button-contact"
                href={"https://www.linkedin.com/in/k-laxman-44913a156/"}
              >
                Book cosultation
              </a>
            </div>
          </div>
        </Fade>
        <Fade bottom duration={1000} distance="40px">
          <div className="blog-heading-div">
            <div className="blog-heading-text-div">
              <h1 className="blog-heading-text" style={{ color: theme.text }}>
                {blogSection["title"]}
              </h1>
              <p
                className="blog-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {blogSection["subtitle"]}
              </p>
              {/* <div className="blogsite-btn-div">
                <a {...styles} className="button-medium" href={blogSection.link}>
                  My Medium Profile
                </a>
              </div> */}
            </div>
            <div className="blog-heading-img-div">
              <BlogsImg theme={theme} />
            </div>
          </div>
        </Fade>
        {/* <Fade bottom duration={1000} distance="40px">
          <div className="map-div">
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.821277965394!2d77.18813597651844!3d28.545091188044225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df6aeec8f6b%3A0xd6886dc6b70b6eb!2sDepartment%20of%20Computer%20Science%20and%20Engineering!5e0!3m2!1sen!2sin!4v1711713545475!5m2!1sen!2sin" 
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              style={GoogleMapStyle}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Fade> */}
        <Fade bottom duration={1000} distance="40px">
          <div className="address-heading-div">
            <div className="address-heading-text-div">
              <div class="contact-section-map">
                <b>Where I'm Currently Located</b>
              </div>
              <br />
              <br />
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.821277965394!2d77.18813597651844!3d28.545091188044225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df6aeec8f6b%3A0xd6886dc6b70b6eb!2sDepartment%20of%20Computer%20Science%20and%20Engineering!5e0!3m2!1sen!2sin!4v1711713545475!5m2!1sen!2sin"
                  width="1000"
                  height="450"
                  style={GoogleMapStyle}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <br />
          </div>
          {/* <div className="address-heading-div">
 <div className="address-heading-text-div"><ContactForm /></div>
 <div className="contact-heading-img-div-address" style={{ marginLeft: 100 }}><AddressImg theme={theme} /></div>
</div> */}
        </Fade>{" "}
      </div>

      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Contact;
