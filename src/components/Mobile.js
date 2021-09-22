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
            <iframe src="https://giphy.com/embed/8ph80VfUkzlgrwrmfG" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          </div>
          <div className="mobile__project__item">
            <iframe src="https://giphy.com/embed/geEjlGJbvEWie0QWfU" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          </div>
          <div className="mobile__project__item">
            <iframe src="https://giphy.com/embed/uRyOXxLzQt87JvTGED" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          </div>
          <div className="mobile__project__item">
            <iframe src="https://giphy.com/embed/STDOQRg41pUSbzmAjK" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          </div>
          <div className="mobile__project__item">
            <iframe src="https://giphy.com/embed/jDAghfL5WNxjEULj3s" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          </div>
          <div className="mobile__project__item">
            <iframe src="https://giphy.com/embed/ZbxtnVxPRgYwh6khRO" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          </div>
          <div className="mobile__project__item">
            <iframe src="https://giphy.com/embed/1gKiWRXWLxKxIe2B9S" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          </div>
          <div className="mobile__project__item">
            <iframe src="https://giphy.com/embed/qzcZjXyFm4LCdEjd0Y" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    )
  }
}