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
          <div className="mobile__logo">
            <img src={RNLogo} alt="react-native-logo" />
          </div>
          <div className="mobile__exp">
            <p>
              My experience in building and implementing react native projects to improve my skills by learning on how to build better UI.
            </p>
          </div>
        </div>
        <div className="mobile__project">
          {/* {MobileItems.map((item, index, props) => {
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
              </a>
            )
          })} */}
          <div className="mobile__project__item">
            <iframe src="https://giphy.com/embed/bM0w2QJtD1zZFsvI3G" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          </div>
          <div className="mobile__project__item">
            <iframe src="https://giphy.com/embed/7wETJL5vkqhdFYc3ZV" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          </div>
          <div className="mobile__project__item">
            <iframe src="https://giphy.com/embed/lGan8O2WUuU2lI94G2" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          </div>
          <div className="mobile__project__item">
            <iframe src="https://giphy.com/embed/4k0o2WmW9qOi407HXb" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          </div>
          <div className="mobile__project__item">
            <iframe src="https://giphy.com/embed/0RqcoTLSWbR7fb3V2B" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          </div>
          <div className="mobile__project__item">
            <iframe src="https://giphy.com/embed/u8fzHeUTULOjymU5zA" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          </div>
          <div className="mobile__project__item">
            <iframe src="https://giphy.com/embed/IHcNX1XOEMOGA1lPWQ" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          </div>
          <div className="mobile__project__item">
            <iframe src="https://giphy.com/embed/UNHtksKIA47KIt7NQZ" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    )
  }
}