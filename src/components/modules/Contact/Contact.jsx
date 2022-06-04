import React from "react";
import "./Contact.scss";
import { FaPhone } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      
      <div className="contact-content">
        <div>
          <a href="tel:+21626225978">
            <FaPhone />
          </a>
          <a href="tel:+21626225978">+216 26225978</a>
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
