import React from "react";
import "./About.css";
import IMG_0900 from "../Images/IMG_0900.jpeg";
import dailyplanner from "../Images/DailyPlanner.png";
import notetaker from "../Images/notetaker.png";
import pwgenerator from "../Images/pwgenerator.png";
import wavelength from "../Images/wavelength.png";
import weatherdashboard from "../Images/weatherdashboard.png";
import whatsinthebox from "../Images/whatsinthebox.png";

const About = () => {
  return (
    <>
      {/* <!-- Jumbotron row and col --> */}
      <div className="container pt-5 mt-5 pl-3 ml-3">
        <div className="row">
          <div className="col-md-9">
            <div className="jumbotron">
              <h2 className="display-4">
                Hello! My name is Marquez Brown and I love building things for
                the web.
              </h2>
              {/* <hr className="my-4"> */}

              {/* <!-- img row --> */}
              <div className="row">
                <div className="col-md-12">
                  <img
                    src={IMG_0900}
                    alt="random img"
                    className="thumbnail"
                    id="profpic"
                  ></img>
                  <div className="row">
                    <div className="col-md-9">
                      <p>
                        I'm a software engineer based in Atlanta, GA specializing
                        in building and designing exeptional, high-quality
                        websites and applications
                      </p>
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
            <h1 className="display-4">Projects</h1>
            {/* <hr class="my-4"> */}
            {/* <!-- img row --> */}
            <div className="row">
              <div className="col-md-12">
                <a href="https://evening-headland-02577.herokuapp.com">
                  <img
                    src={wavelength}
                    alt="DailyPlanner"
                    className="thumbnail mr-3 mb-4"
                  ></img>
                </a>
                <a href="https://pkriengsiri.github.io/whats-in-the-box/">
                  <img
                    src={whatsinthebox}
                    alt="Refa"
                    className="thumbnail mr-3 mb-4"
                  ></img>
                </a>
                <a href="https://marquez-brown.github.io/RandomPasswordGen/">
                  <img
                    src={pwgenerator}
                    alt="random img"
                    className="thumbnail mr-3 mb-4"
                  ></img>
                </a>
                <a href="https://marquez-brown.github.io/Weather-Dashboard/">
                  <img
                    src={weatherdashboard}
                    alt="random img"
                    className="thumbnail mr-3 mb-4"
                  ></img>
                </a>
                <a href="https://github.com/Marquez-Brown/Note-Taker-App">
                  <img
                    src={notetaker}
                    alt="random img"
                    className="thumbnail mr-3 mb-4"
                  ></img>
                </a>
                <a href="https://marquez-brown.github.io/DailyPlanner/">
                  <img
                    src={dailyplanner}
                    alt="random img"
                    className="thumbnail mr-3 mb-4"
                  ></img>
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
