import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { SidebarData } from "./Sidebardata";
import { IconContext } from "react-icons";

import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AppsIcon from "@material-ui/icons/Apps";
import EmailIcon from "@material-ui/icons/Email";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <Router>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="menu-header">
            <p className="text" data-text="Estelo Abellanosa">
              Estelo Abellanosa
            </p>
            <p className="text-react">Web Developer</p>
          </div>
        </div>
      </IconContext.Provider>
    </Router>
  );
}

export default Navbar;
