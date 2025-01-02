import React from "react";
import "./Portfolio.scss";
import project1 from "../../assets/OnlineShop.PNG";
import project2 from "../../assets/todolist.PNG";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div className="portfolioContainer" id="portfolio">
      <motion.h2
        className="portfolioHeading"
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: [50, 0], opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        My others project
      </motion.h2>
      <div className="projects">
        <motion.div
          className="project"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-50, 0], opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.a
            href="https://github.com/MarcinMarekRuman/Online-Shop"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, transition: { duration: 1.5 } }}
          >
            <img src={project1} alt="project" />
          </motion.a>
          <span>
            While learning new languages and frameworks,
            the concept of creating an online store,
            or rather a fully functional backend with a friendly frontend,
            was created, but it is less important than the backend.
            This application is based on Node.js using the Express framework and the NoSql MongoDB database. The frontend was created in React and communication is based on REST API.
          </span>
        </motion.div>
        <motion.div
          className="project"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [50, 0], opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.a
            href="https://github.com/MarcinMarekRuman/ToDoList"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
          >
            <img src={project2} alt="project" />
          </motion.a>
          <span>
            My first application created in HTML, CSS and JavaScript. It is a
            modifiable todo list written mostly in JavaScript
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
