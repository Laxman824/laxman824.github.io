import React, { useState } from "react";
import "./FAQ.css";
import { Fade } from "react-awesome-reveal";
import { faqSection } from "../../portfolio";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="main" id="faq">
      <div className="faq-header">
        <h1 className="faq-heading">{faqSection.title}</h1>
        <p className="faq-subtitle">{faqSection.subtitle}</p>
      </div>
      <div className="faq-content">
        {faqSection.faqs.map((faq, index) => (
          <Fade direction="up" duration={1000} delay={index * 100} key={index}>
            <div className="faq-item">
              <div
                className={`faq-question ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>
                <span className="arrow">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              <div
                className={`faq-answer ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
