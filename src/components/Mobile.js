import React, { Component } from 'react';
import { MobileItems } from "./MobileItems";
import {Link} from 'react-router-dom';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

import RNLogo from '../images/react-native3.png';
import '../styles/mobile.scss';


export default class Portfolio extends Component {
  render() {
    return (
      <div className="mobile" id="mobile">
        <div className="mobile__header">
          {/* <div className="mobile__logo">
            <img src={RNLogo} alt="react-native-logo" />
          </div> */}
          <div className="mobile__exp">
            <p>
              Android Studio
            </p>
          </div>
        </div>
        <div className="mobile__project">
          {MobileItems.map((item, index, props) => {
            return (
              <a className="mobile__items__container">
                <div key={index} className="mobile__url__container">
                  <p className={item.cName}>
                    {item.title}
                  </p>
                </div>
                <div className="mobile__image__container">
                  <div className="mobile__image__self">
                    {/* <img src={item.mobileImage} style={{width: '300px'}} alt="mobile-items" />          */}
                    <video autoplay="true" muted loop="true">
                      <source src={item.mobileImage} type="video/mp4" autoplay="true" muted loop="true" />
                    </video>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    )
  }
}