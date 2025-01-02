import React from "react";
import "./Contact.scss";
import { AiFillHome } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { socialIcons } from "../../Data/Data";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="contactContainer" id="contact">
      <motion.h2
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: [50, 0], opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.h2>
      <motion.div
        className="contactSection"
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: [50, 0], opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3>Contact me</h3>
        <span className="contactSectionSpan">
          If you are interested, please contact me by e-mail or telephone.
        </span>
        <div className="contactsSocials">
          <div className="contacts">
            <div>
              <span>
                <AiFillHome />
                <span>Wrocław</span>
              </span>
            </div>
            <div>
              <span>
                <FaEnvelope />
                <span>marcinruman123@gmail.com</span>
              </span>
            </div>
            <div>
              <span>
                <BsFillTelephoneFill />
                <span>+48 605 240 910</span>
              </span>
            </div>
          </div>
          <div className="socials">
            {socialIcons.map((icon, index) => {
              return (
                <a
                  key={index}
                  href={
                    index === 1
                      ? "https://pl.linkedin.com/in/marcinmarekruman"
                      : "https://github.com/MarcinMarekRuman"
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
