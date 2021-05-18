import React, { Component } from 'react';
import Macbook from '../images/keys2.jpeg';
import Logo from "../logo/logo3.png";
import Devlogo from "../logo/dev.png";
import HNDlogo from "../logo/hnd.png";
import Basiclogo from "../logo/logoshinebasic.png";

import { AiTwotoneMail } from 'react-icons/ai';

export default class Services extends Component {
  render() {
    return (
      <div className="services__two" id="services">
        <div className="services__header">
          <h1>Services</h1>
        </div>
        <div className="services__two-inner-container">
          <div className="services__two-content">
            <div className="services__two-image-container">
              <img src={Devlogo} alt="logo" />
            </div>
            <div className="services__two-desc">
              <h2>Web Development</h2>
              <p>
              I'm a tech enthusiast passionate in codes. I design, build web applications. 
              Innovative Front-End Web Developer with 2 years of experience in building and implementing websites.
              </p>
            </div>
          </div>
          <div className="services__two-content">
            <div className="services__two-image-container">
              <img src={HNDlogo} alt="logo" />
            </div>
            <div className="services__two-desc">
               <h2>Hosting / Domain</h2>
                <p>
                  These are the Hosting and Domain services that I use for my applications Namecheap, EasyWP, Heroku, Netlify.
                </p>
                <a href=""></a>
            </div>
          </div>
          <div className="services__two-content">
            <div className="services__two-image-container">
              <img src={Basiclogo} alt="logo" />
            </div>
            <div className="services__two-desc">
              <h2>Logo Design</h2>
              <p>
                I create logos using logomakr.com and other online services.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="services__container">
          <h1>Services</h1>
          <div className="services__grid">
            <div className="services__left">
              <div className="services__content">
                <img src={Devlogo} alt="logo" />
                <div className="services__desc">
                  <h2>Web Development</h2>
                  <p>
                  I'm a tech enthusiast passionate in codes. I design, build web applications. 
                  Innovative Front-End Web Developer with 2 years of experience in building and implementing websites.
                  </p>
                </div>
              </div>
              <div className="services__content">
                <img src={HNDlogo} alt="logo" />
                <div className="services__desc">
                  <h2>Hosting / Domain</h2>
                  <p>
                    These are the Hosting and Domain services that I use for my applications Namecheap, EasyWP, Heroku, Netlify.
                  </p>
                  <a href=""></a>
                </div>
              </div>
              <div className="services__content">
                <img src={Basiclogo} alt="logo"  />
                <div className="services__desc">
                  <h2>Logo Design</h2>
                  <p>
                    Random logo's that I design.
                  </p>
                </div>
              </div>
            </div>
            <div className="services__right">
              <img src={Macbook} alt="logo" className="macbook" />
            </div>
          </div>
        </div> */}
        {/* <div className="yellow__bar">
          <image>
            <AiTwotoneMail />
          </image>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=email@domain.com" target="_blank">
            <p>Email</p>
          </a>
          <span>estelo2jz@gmail.com</span>
        </div> */}
      </div>
    )
  }
}
