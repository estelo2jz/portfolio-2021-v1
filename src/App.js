import React from 'react';
import Nav from './components/Nav';
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Mobile from "./components/Mobile";
import PortfolioCard from "./components/PortfolioCard";
import Contact from "./components/Contact";
import ContactForm from './components/ConformForm';
import Footer from "./components/Footer";

import '../src/styles/main.scss';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Nav />
      <Home />
      <About />
      {/* <Services /> */}
      <Portfolio />
      <Mobile />
      <Contact />
      {/* <ContactForm /> */}
      <Footer />
    </div>
  );
}

export default App;
