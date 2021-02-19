import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
          <div className="container text-center">
            <small>&copy Copyright</small>
            <div className="row">
              <div className="col-md-12">
                <p>Social Media</p>
                 <i className="fab fa-linkedin">
                   <a href="https://www.linkedin.com/in/marquezbrown/"> Marquez Brown
                  </a>
                </i>          
            </div>
            </div>
          </div>
        </footer>
        </div>
    );
};

export default Footer;