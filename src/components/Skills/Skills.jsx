import React, { useState } from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import { skillsIcons } from "../../Data/Data";
import Portfolio from "../../assets/photo1.jpg";

const Skills = () => {
  const [toggle, setToggle] = useState(false);

  return (
      <div className="skillsContainer" id="skills">
          <motion.div
              initial={{y: 0, opacity: 0}}
              whileInView={{y: [-50, 0], opacity: 1}}
              transition={{duration: 1.5}}
              className="skillsButtons"
          >
              <h2>Skills And Experience</h2>

              <div className="skillsPhotoDiv">
                  <img src={Portfolio} alt="portfolioPNG" className="skillsPhoto"/>
              </div>

              <div className="skillsToogle">
                  <button
                      onClick={() => {
                          setToggle(false);
                      }}
                  >
                      Skills
                  </button>
                  <button
                      onClick={() => {
                          setToggle(true);
                      }}
                  >
                      Experience
                  </button>
              </div>
          </motion.div>


          <motion.div
              className={toggle ? "displayNone" : "skills"}
              initial={{y: 0, opacity: 0}}
              whileInView={{y: [50, 0], opacity: 1}}
              transition={{duration: 1.5}}
          >
              {skillsIcons.map((icon, index) => {
                  return <div key={index}>{icon}</div>;
              })}
              <span className="skillText">
          I started learning programming seriously when I started college.
          Previously, I only learned from online courses, e.g. Udemy. I know
          HTML, CSS, JS, React and a bit of frameworks such as bootstrap and sass/scss. I
          know languages such as TypeScript, NodeJS at more than a basic level.
                  I also learned SQL and NoSql databases.
          Additionally, I will expand my knowledge with additional programming
          languages on my own.
        </span>
          </motion.div>
          <motion.div
              className={toggle ? "experience" : "displayNone"}
              initial={{y: 0, opacity: 0}}
              whileInView={{y: [50, 0], opacity: 1}}
              transition={{duration: 0.5}}
          >
              <div className="skillsExp">
                  <span>2017- 2022</span>
                  <span>Work as waiter and delivery person </span>
              </div>
              <div className="skillsExp">
                  <span>2022-Now</span>
                  <span>
            Working as Senior Maintenence Technician in LG Energy Solution
          </span>
              </div>
          </motion.div>


      </div>
  );
};

export default Skills;
