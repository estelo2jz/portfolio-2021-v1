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
              <div className="hero__position-section">
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
              I'm a self-taught Web developer with 2+ years of experience and a bit of graphic design mostly on <a className="vect" target="_blank" href="https://www.vectornator.io">Vectornator</a>, where i created my little NFT project called Blazed Kid, you can check it out on my project. I do have a little experience in <a className="android" target="_blank" href="https://developer.android.com">Android Studio</a> for mobile development.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
