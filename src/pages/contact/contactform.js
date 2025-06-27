import React, { Component } from "react";
import emailjs from "emailjs-com";
import "./contactform.css";
import toast, { Toaster } from "react-hot-toast";

export default class ContactForm extends Component {
  render() {
    var flag = 0;
    function sendEmail(e) {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_84joz9v",
          "template_vmt95lh",
          e.target,
          "IEGfeMtwgbnEJludb"
        )
        .then(
          (result) => {
            toast.success("Email Send Sucessfully!");
          },
          (error) => {
            toast.error("Error!, Try After Some Time");
          }
        );
      e.target.reset();
    }
    return (
      <>
        <Toaster />
        <div class="contact-section">
          <br />
          <br />
          <b>I'd love to hear from you</b>
          <br />
          <br />
          <form class="contact-form" onSubmit={sendEmail}>
            <br />
            <input
              type="text"
              name="name"
              class="contact-form-text"
              placeholder="Name"
              required
            />
            <br />
            <input
              type="email"
              name="email"
              class="contact-form-text"
              placeholder="Email"
              required
            />
            <br />

            <input
              type="text"
              name="subject"
              class="contact-form-text"
              placeholder="Subject"
              required
            />
            <br />

            <textarea
              class="contact-form-text"
              name="message"
              placeholder="Message"
              required
            ></textarea>
            <br />

            <input type="submit" class="contact-form-btn" value="Send" />
            <br />
            <br />
            <br />
            <br />
          </form>
        </div>
      </>
    );
  }
}
