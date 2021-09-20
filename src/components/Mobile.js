import React, { Component } from 'react';
import { MobileItems } from "./MobileItems";
import {Link} from 'react-router-dom';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

import RNLogo from '../images/react-native.jpg';
import '../styles/mobile.scss';


export default class Portfolio extends Component {
  render() {
    return (
      <div className="mobile" id="mobile">
        <div className="mobile__header">
          <div>
            <img src={RNLogo} alt="react-native-logo" />
          </div>
        </div>
        <div className="mobile__project">
          {MobileItems.map((item, index, props) => {
            return (
              <a href={item.url} target="_blank" className="mobile__items__container">
                <div key={index} className="mobile__url__container">
                  <p className={item.cName}>
                    {item.title}
                  </p>
                </div>
                <div className="mobile__image__container">
                  <div className="mobile__image__self">
                    <img src={item.mobileImage} style={{width: '300px'}} alt="mobile-items" />         
                  </div>
                </div>
                {/* <div className="mobile__desc__container">
                  <div className="mobile__desc__items">
                    <p className="mobile__desc__items__line">{item.description[0]}</p>
                  </div>
                </div> */}
              </a>
            )
          })}
        </div>
      </div>
    )
  }
}