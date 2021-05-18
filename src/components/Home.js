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
                  <li>
                    <a href="https://github.com/estelo2jz" target="_blank"><FaGithub /></a>   
                  </li>
                </ul>
              </div>
            </div>
            <p>
              I'm a self-taught Web developer with 2+ years of experience. Where I am able to design and build web application. My other hobbies besides coding are computers and cars mostly JDMs. I spent most of time learning and honing my current skillset. I'm a tech enthusiast, passionate in codes. 
              I love to design and build responsive web applications. I am eager to learn new techonologies, and I'm currently looking for new opportunities with a <a href="https://github.com/estelo2jz">github</a> ready portfolio.
            </p>
          </div>
          {/* <div className="column__right">
            <img src={Picme2} alt="brain" className="hero__img"/>
          </div> */}
        </div>
      </div>
    )
  }
}
