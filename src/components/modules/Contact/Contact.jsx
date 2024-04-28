import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-content">
        <div>
          <a href="tel:+330695016276">
            <FaPhone />
          </a>
          <a href="tel:+330695016276">+33 06 95 01 62 76</a>
        </div>
        <div>
          <a href="mailto:almabrouk.zied@gmail.com">
            <HiMail />
          </a>
          <a href="mailto:almabrouk.zied@gmail.com">almabrouk.zied@gmail.com</a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/zied-mabrouk-6401bb201/">
            <AiFillLinkedin />
          </a>
          <a href="https://www.linkedin.com/in/zied-mabrouk-6401bb201/">
            Zied Mabrouk
          </a>
        </div>
      </div>
      <div className="contact-image"></div>
    </div>
  );
};

export default Contact;
