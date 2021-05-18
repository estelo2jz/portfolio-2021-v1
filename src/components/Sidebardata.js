import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: "Home",
    href: "#home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",

  },
  {
    title: "About",
    href: "#about",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",

  },
  {
    title: "Services",
    href: "/servies",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",

  },
  {
    title: "Portfolio",
    href: "/portfolio",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",

  },
  {
    title: "Contact",
    href: "/contact",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",

  },
];