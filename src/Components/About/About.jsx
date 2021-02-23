import React from 'react';
import "./About.css"

const About = () => {
    return (
        <>
            {/* <!-- Jumbotron row and col --> */}
              <div className="container pt-5 mt-5 pl-3 ml-3">
            <div className="row">
                <div className="col-md-9">
                    <div className="jumbotron">
                        <h2 className="display-4">Hello! My name is Marquez Brown and I love building things for the web.</h2>
                        {/* <hr className="my-4"> */}
                            
                        {/* <!-- img row --> */}
                        <div className="row">
                        <div className="col-md-12">
                         <img src="images/IMG_0900.jpeg" alt="random img" className="thumbnail" id="profpic"/>
                         <div className="row">
                        <div className="col-md-9">
                         <p> I'm a sofware engineer based in Atlanta, GA specializing in building and designing exeptional, high-quality websites and applications</p>
                        </div>
                        </div>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
                      
                     {/* second Jumbotron */}
                      <div className="row">
                        <div className="col-sm-10">
                            <div className="jumbotron">
                                <h1 className="display-4">
                                  Portfolio</h1>
                                {/* <hr class="my-4"> */}
                                {/* <!-- img row --> */}
                                <div className="row">
                                <div className="col-md-12">
                                  <a href="https://evening-headland-02577.herokuapp.com">
                                  <img src="images/wavelength.png" alt="DailyPlanner" className="thumbnail mr-3 mb-4"/>
                                </a>
                                <a href="https://pkriengsiri.github.io/whats-in-the-box/">
                                  <img src="images/whatsinthebox.png" alt="Refa" className="thumbnail mr-3 mb-4"/>
                                </a>
                                <a href="https://marquez-brown.github.io/RandomPasswordGen/">
                                  <img src="images/pwgenerator.png" alt="random img" className="thumbnail mr-3 mb-4"/>
                                </a>
                                <a href="https://marquez-brown.github.io/Weather-Dashboard/">
                                  <img src="images/weatherdashboard.png" alt="random img" className="thumbnail mr-3 mb-4"/>
                                </a>
                                <a href="https://github.com/Marquez-Brown/Note-Taker-App">
                                  <img src="images/notetaker.png" alt="random img" className="thumbnail mr-3 mb-4"/>
                                </a>
                                <a href="https://marquez-brown.github.io/DailyPlanner/">
                                  <img src="images/DailyPlanner.png" alt="random img" className="thumbnail mr-3 mb-4"/>
                                </a>
                                </div>
                              </div>
                              </div>
                                </div>
                              </div>
        </>
    );
};

export default About;