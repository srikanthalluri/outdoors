/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./assests/logo-white.png";
import pic1 from "./assests/nat-1-large.jpg";
import pic2 from "./assests/nat-2-large.jpg";
import pic3 from "./assests/nat-3-large.jpg";
import world from "./assests/travel.svg";
import nature from "./assests/eco-friendly.svg";
//import successNoColor from "./assests/success-no-color.svg";
import success from "./assests/success.svg";
import heart from "./assests/heart.svg";

class App extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="header__logo-box">
            <img src={logo} alt="Logo" className="header__logo" />
          </div>
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Outdoors</span>
              <span className="heading-primary--sub">
                is where life happens
              </span>
            </h1>
            <a href="#" className="btn btn--white btn--animated">
              Discover our tours
            </a>
          </div>
        </header>
        <main>
          <section className="section-about">
            <div className="u-center-text u-margin-bottom-big">
              <h1 className="heading-secondary">
                Exciting tours for adventurous people
              </h1>
            </div>

            <div className="row">
              <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  You're going to fall in love with nature
                </h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <h3 className="heading-tertiary u-margin-bottom-small">
                  Live advetures like you never have before
                </h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="btn-text">
                  Learn more &rarr;
                </a>
              </div>
              <div className="col-1-of-2">
                <div className="composition">
                  <img
                    src={pic1}
                    alt="picture 1"
                    className="composition__photo composition__photo--p1"
                  ></img>
                  <img
                    src={pic2}
                    alt="picture 2"
                    className="composition__photo composition__photo--p2"
                  ></img>
                  <img
                    src={pic3}
                    alt="picture 3"
                    className="composition__photo composition__photo--p3"
                  ></img>
                </div>
              </div>
            </div>
          </section>
          <section className="section-features">
            <div className="row">
              <div className="col-1-of-4">
                <div className="feature-box">
                  <img
                    src={world}
                    alt="feature logo1"
                    className="feature-box__icon"
                  ></img>
                  {/* <i className="feature-box__icon icon-basic-world"></i> */}
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Explore the world
                  </h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>

              <div className="col-1-of-4">
                <div className="feature-box">
                  <img
                    src={nature}
                    alt="feature logo1"
                    className="feature-box__icon"
                  ></img>
                  {/* <i className="feature-box__icon icon-basic-world"></i> */}
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Meet nature
                  </h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>

              <div className="col-1-of-4">
                <div className="feature-box">
                  <img
                    src={success}
                    alt="feature logo1"
                    className="feature-box__icon"
                  ></img>
                  {/* <i className="feature-box__icon icon-basic-world"></i> */}
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Find your way
                  </h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>

              <div className="col-1-of-4">
                <div className="feature-box">
                  <img
                    src={heart}
                    alt="feature logo1"
                    className="feature-box__icon"
                  ></img>
                  {/* <i className="feature-box__icon icon-basic-world"></i> */}
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Live a healthier life
                  </h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section-tours">
            <div className="u-center-text u-margin-bottom-big">
              <h1 className="heading-secondary">most popular tours</h1>
            </div>

            <div className="row">
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--1">&nbsp;</div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--1">
                        The Sea Explorer
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>3 day tours</li>
                        <li>Up to 30 people</li>
                        <li>2 tour guides</li>
                        <li>Sleep in cozy hotels</li>
                        <li>Difficulty: easy</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-1">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">Only</p>
                        <p className="card__price-value">$297</p>
                      </div>
                      <a href="#" className="btn btn--white">
                        Book now!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--2">&nbsp;</div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--2">
                        The Forest Hicker
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>7 day tours</li>
                        <li>Up to 40 people</li>
                        <li>6 tour guides</li>
                        <li>Sleep in provided tents</li>
                        <li>Difficulty: medium</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-2">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">Only</p>
                        <p className="card__price-value">$497</p>
                      </div>
                      <a href="#" className="btn btn--white">
                        Book now!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--3">&nbsp;</div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--3">
                        The Snow Adventure
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>5 day tours</li>
                        <li>Up to 15 people</li>
                        <li>3 tour guides</li>
                        <li>Sleep in cozy hotels</li>
                        <li>Difficulty: hard</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-3">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">Only</p>
                        <p className="card__price-value">$897</p>
                      </div>
                      <a href="#" className="btn btn--white">
                        Book now!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="u-center-text u-margin-top-huge">
              <a href="#" className="btn btn--green">
                Discover all tours
              </a>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
