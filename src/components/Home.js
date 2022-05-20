import React, { Component } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa'; 
import Logo1 from '../logo/logo3.png';
import Picme2 from "../images/newme.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className="hero__section" id="home">
        <div className="hero__wrapper">
          <div className="column__left">
            <div className="hero__header">
              <div>
                <p>Web Developer</p>
              </div>
              <div className="hero__logo">
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/estelo-abellanosa-83a335186/" target="_blank"><FaLinkedin /></a>
                  </li>
                  {/* <li>
                    <a href="https://github.com/estelo2jz" target="_blank"><FaGithub /></a>   
                  </li> */}
                </ul>
              </div>
            </div>
            <p>
              I'm a self-taught Web developer with 2+ years of experience.
              I started studying we development at a coding bootcamp called Bottega which gave me the basic and foundation of my skills.
              Took courses at Udemy after my bootcamp completed to expand my experience of front-end development.
              From there I started building and implementing web and mobile application to learn more about the React framework for building UI's.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
