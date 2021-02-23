import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from '../Button/Button';
import './Header.css';



const Header = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Home <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
            <a className="nav-links" href="https://www.linkedin.com/in/marquezbrown/" >Linkedin
                  </a>
            </li>
            <li className="nav-item">
            <a className="nav-links" href="https://docs.google.com/document/d/1eRrjjDQScExwS2WzK1caM5bmAgRLVrSd1w5-YpaJBys/edit?usp=sharing">Resume</a>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
};

export default Header;