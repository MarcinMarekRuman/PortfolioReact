import React from "react";
import "./Main.scss";
import { motion } from "framer-motion";
import Portfolio from "../../assets/portfolio.PNG";

const Main = () => {
  return (
    <motion.div
      className="container home"
      id="home"
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
      }}
    >
      <div className="photoContainer">
        <div className="image">
          <img className="portfolioPhoto" src={Portfolio} alt="" />
        </div>
        <div className="welcome">
          <h4>
            Hi i'm <span className="name">Marcin Ruman</span>
          </h4>
          <span className="adjustment">
            Aspiring Backend Developer
          </span>
        </div>
      </div>
      <div className="textContainer">
        <span className="profileAboutMe">
          <h1>Loving learning code and taking new challenges</h1>
        </span>
        <motion.a
          href="#contact"
          className="button"
          animate={{ y: [0, -15] }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            delay: 0.5,
          }}
        >
          <span> Ways to contact with me </span>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Main;
