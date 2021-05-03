import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="inner-contact">
      <h1>Contact Me</h1>
      <div className="form-row">
        <div className="main-form">
          <input type="text" placeholder="Full Name" />
          <div className="input-bottom-border"></div>
          <input type="email" placeholder="Enter Your Email" />
          <div className="input-bottom-border"></div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Type Your Message"
          ></textarea>
          <div className="textarea-bottom-border"></div>
          <button class="btn-1 contact-button">
            <span>Send</span>
          </button>
        </div>

        <div className="contact-info">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.6151223424845!2d90.41885251539048!3d23.867796990197487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d0155ca571%3A0xb39cab9bc6a753a6!2sArmy%20Housing%20Society%20Rd%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1620020830625!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            style={{ border: "0" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
