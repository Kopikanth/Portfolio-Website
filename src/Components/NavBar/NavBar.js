import "./NavBar.css";
import React from 'react';
import logo from "../../assets/logo.png";
import { Link } from 'react-scroll';
import contactImg from "../../assets/contact.png";

const NavBar = () => {
  return (
    <nav id="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link activeClass="active" spy={true} className="desktopMenuListItem" to="intro" duration={500} smooth={true} offset={-100}>Home</Link>
        <Link activeClass="active" spy={true} className="desktopMenuListItem" to="skills" duration={500} smooth={true} offset={-100}>About</Link>
        <Link activeClass="active" spy={true} className="desktopMenuListItem" to="works" duration={500} smooth={true} offset={-100}>Portfolio</Link>
        <Link activeClass="active" spy={true} className="desktopMenuListItem" to="clientsInfo" duration={500} smooth={true} offset={-100}>Clients</Link>
      </div>
      <Link to="contactTitle" className="desktopMenuBtn" smooth='true' duration={500} offset={-100}>
        <img src={contactImg} alt="contact image" className="desktopMenuImg" />
          Contact me
      </Link>
    </nav>
  )
}

export default NavBar
