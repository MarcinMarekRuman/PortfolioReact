import React from "react";
import "./About.scss";
import Portfolio from "../../assets/photo2.jpg";
import { AiFillHome } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { motion } from "framer-motion";
import CV from "../../assets/CV.pdf";

const About = () => {
  return (
    <div className="container" id="about">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        about me
      </motion.h1>
      <div className="aboutContainer">
        <div className="strips">
          <motion.div
            className="strip"
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [-250, 0], opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="stripSpan">
              <BsFillPersonFill />
              <span> Marcin Ruman</span>
            </div>
          </motion.div>
          <motion.div
            className="strip"
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [-250, 0], opacity: 1 }}
            transition={{ duration: 1.0 }}
          >
            <div className="stripSpan">
              <AiFillHome /> <span> Wrocław</span>
            </div>
          </motion.div>
          <motion.div
            className="strip"
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [-250, 0], opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="stripSpan">
              <FaEnvelope /> <span> marcinruman123@gmail.com</span>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="picture"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ y: [-250, 0], opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img className="secondPhoto" src={Portfolio} alt="Portfolio" />
        </motion.div>
        <motion.div
          className="aboutText"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="aboutMe">
            Hello, my name is Marcin. I am 23 years old and I am looking for a job as
            Programmer, I currently have no commercial experience
            I am a self-taught person who likes to learn new things and work in
            group. In industries other than IT, I learned teamwork and
            conscientiousness in performed activities. Working as a Programmer is my dream,
            which is why I am ready to constantly expand my knowledge and work hard to become better and better.
          </span>
          <div className="aboutInfo">
            <a href={CV} download rel="noopener noreferrer" target="_blank">
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
