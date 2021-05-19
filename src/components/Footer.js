import React, { Component } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__container">
          <div className="footer__left">
            <h2>Estelo Abellanosa</h2>
            <p>
              Web / Mobile Developer
            </p>
          </div>
          <div className="footer__right">
            <div className="about-social-animation">
            <a href="https://www.facebook.com/estelo.abellanosa" target="_blank"><FaFacebook /></a>
            </div>
            <div className="about-social-animation">
              <a href="https://twitter.com/EsteloManitoba" target="_blank"><FaTwitter /></a>
            </div>
            <div className="about-social-animation">
              <a href="https://www.linkedin.com/in/estelo-abellanosa-83a335186/" target="_blank"><FaLinkedin /></a>
            </div>
            <div className="about-social-animation">
              <a href="https://github.com/estelo2jz" target="_blank"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
