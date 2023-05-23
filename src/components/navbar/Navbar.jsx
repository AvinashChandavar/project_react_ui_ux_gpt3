import React, { useState } from 'react';
import './Navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">What is GPT? </a>
    </p>
    <p>
      <a href="#possibility">Open AI </a>
    </p>
    <p>
      <a href="#features">Case Studies </a>
    </p>
    <p>
      <a href="#blog">Library </a>
    </p>
  </>
);

const Button = () => (
  <>
    <p>Sign in</p>
    <button type="button">Sign up </button>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuHandler = () => {
    setToggleMenu((prevToggleMenu) => !prevToggleMenu);
  };

  return (
    <div className="gpt3__navbar">
      {/* Desktop version */}
      <div className="gpt3__navbar-links">
        {/* logo */}
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>

        {/* links */}
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>

      {/* Button */}
      <div className="gpt3__navbar-sign">
        <Button />
      </div>

      {/* Moblie version */}
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={toggleMenuHandler}
            // onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={toggleMenuHandler}
            // onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <Button />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
