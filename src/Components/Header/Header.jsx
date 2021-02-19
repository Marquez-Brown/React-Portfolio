import React from 'react';

const Header = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light" className="mb-5">
            <a className="navbar-brand" href="./index.html"><p className="text" id="name">Marquez Brown</p></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="https://docs.google.com/document/d/1eRrjjDQScExwS2WzK1caM5bmAgRLVrSd1w5-YpaJBys/edit?usp=sharing" id="resume">Resume</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fa-linkedin" href="https://www.linkedin.com/in/marquezbrown/" id="linked">Marquez Brown
                  </a>
                </li>
                
                 <li className="nav-item active">
                  <a className="nav-link" href="./index.html">About</a>
                </li> 
              </ul>
            </div>
          </nav>
        </div>
    );
};

export default Header;