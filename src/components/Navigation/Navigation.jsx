import React from "react";
import "./Navigation.scss";
import { navLinks } from "../../Data/Data";
import { socialIcons } from "../../Data/Data";

const Navigation = () => {
  return (
    <div className="header">
      <div className="barContainer">
        <ul className="navLinks">
          {navLinks.map((navLink, index) => {
            return (
              <li key={index} onClick={() => {}}>
                <a href={`#${navLink}`}>{navLink}</a>
              </li>
            );
          })}
        </ul>
        <div className="socialIcons">
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
    </div>
  );
};

export default Navigation;
