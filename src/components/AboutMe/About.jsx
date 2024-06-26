import React from "react";
import "./About.scss";
import Portfolio from "../../assets/photo2.jpg";
import { AiFillHome } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { motion } from "framer-motion";
import CV from "../../assets/CV_Marcin_Ruman_IT.pdf";

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
          <img className="secoundPhoto" src={Portfolio} alt="Portfolio" />
        </motion.div>
        <motion.div
          className="aboutText"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="aboutMe">
            I'm Marcin. I'm 22 years old and looking for a job or internship on
            Front-End or Back-End developer. At the moment, I have no commercial
            experience. I'am self-taught who like lern new things and working in
            a group. In industries other than IT, I learned teamwork and
            conscientiousness in the activities performed.
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
