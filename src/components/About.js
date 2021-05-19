import React, { Component } from 'react';
import Picme from "../images/me.jpg";

import HTML from '../logo/skills/html5.svg'
import CSS from '../logo/skills/css3.svg';
import SCSS from '../logo/skills/sass.svg';
import JavaScript from '../logo/skills/javascript.svg';
import Python from '../logo/skills/python.svg';
import ReactSkill from '../logo/skills/react.svg';
import NodeJS from '../logo/skills/nodejs.svg';
import MySQL from '../logo/skills/mysql.svg';
import MongoDB from '../logo/skills/mongo.png';
import FirebaseLogo from '../logo/skills/firebase.png';

// import VueLogo from '../logo/skills/vue.png';
// import DjangoLogo from '../logo/skills/django2.png';
// import PythonLogo from '../logo/skills/python.png';
// import HTMLLogo from '../logo/skills/html.png';
// import ReactLogo from '../logo/skills/react.png';

export default class About extends Component {
  render() {
    return (
      <div className="main__section" id="about">
        <div className="main__container">
          <div className="main__header">
            <p>Hello, I'm Estelo!</p>
          </div>
          <div className="main__content">
            <div className="main__text">
              <h2>I'm a Web / Mobile Developer currently living in Beach Park Illinois.</h2>
              <div className="main__info">
                <p>
                  Skills I'm currently learning and improving by building and redesigning personal projects.
                  <br />
                  Right now I am focusing on React Native for mobile development.
                </p>
                <p>
                  Most of my projects are built on React framework.
                  I also have experience with Svelte, Ember, Vue, and Django frameworks.
                </p>
              </div>
              <div className="main__skills-container">
                  <div className="main__skills-item">
                    <div className="main__skills-img">
                      <img src={MongoDB} alt="skill-img" />
                    </div>
                    <div className="main__skills-title">
                      <p>MongoDB</p>
                    </div>
                  </div>
                  <div className="main__skills-item">
                    <div className="main__skills-img">
                      <img src={FirebaseLogo} alt="skill-img" />
                    </div>
                    <div className="main__skills-title">
                      <p>Firebase</p>
                    </div>
                  </div>
                  <div className="main__skills-item">
                    <div className="main__skills-img">
                      <img src={HTML} alt="skill-img" />
                    </div>
                    <div className="main__skills-title">
                      <p>HTML</p>
                    </div>
                  </div>
                  <div className="main__skills-item">
                    <div className="main__skills-img">
                      <img src={CSS} alt="skill-img" />
                    </div>
                    <div className="main__skills-title">
                      <p>CSS</p>
                    </div>
                  </div>
                  <div className="main__skills-item">
                    <div className="main__skills-img">
                      <img src={SCSS} alt="skill-img" />
                    </div>
                    <div className="main__skills-title">
                      <p>SCSS</p>
                    </div>
                  </div>
                  <div className="main__skills-item">
                    <div className="main__skills-img">
                      <img src={JavaScript} alt="skill-img" />
                    </div>
                    <div className="main__skills-title">
                      <p>JavaScript</p>
                    </div>
                  </div>
                  <div className="main__skills-item">
                    <div className="main__skills-img">
                      <img src={ReactSkill} alt="skill-img" />
                    </div>
                    <div className="main__skills-title">
                      <p>React</p>
                    </div>
                  </div>
                  <div className="main__skills-item">
                    <div className="main__skills-img">
                      <img src={Python} alt="skill-img" />
                    </div>
                    <div className="main__skills-title">
                      <p>Python</p>
                    </div>
                  </div>
                  <div className="main__skills-item">
                    <div className="main__skills-img">
                      <img src={NodeJS} alt="skill-img" />
                    </div>
                    <div className="main__skills-title">
                      <p>NodeJS</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
