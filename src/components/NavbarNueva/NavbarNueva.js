import React, { useState } from 'react';
import './NavbarNueva.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <div class="navbar">
        <div class="nav-header">
          <div class="nav-logo">
            <a href="#">RTI</a>
          </div>
        </div>

        <div type="checkbox" id="nav-check">
          <div class="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div class="nav-links">
            <a href="#">Home</a>
            <a href="#">About</a>

            <div class="dropdown">
              <a class="dropBtn" href="#">
                Services
                <i class="fas fa-angle-down"></i>
              </a>
              <div class="drop-content">
                <a href="#">Web Design</a>
                <a href="#">Marketing</a>
                <a href="#">WordPress</a>

                <div class="dropdown2">
                  <a class="dropBtn2" href="#">
                    More
                    <i class="fas fa-angle-right"></i>
                  </a>
                  <div class="drop-content2">
                    <a href="#">HTML</a>
                    <a href="#">CSS</a>
                    <a href="#">JavaScript</a>
                    <a href="#">jQuery</a>
                  </div>
                </div>
              </div>
            </div>

            <a href="#">Blogs</a>
            <a href="#">Contact</a>
            <button class="loginBtn">Login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
