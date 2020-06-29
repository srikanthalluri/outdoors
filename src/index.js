import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./assests/logo-white.png";
import pic1 from "./assests/nat-1-large.jpg";
import pic2 from "./assests/nat-2-large.jpg";
import pic3 from "./assests/nat-3-large.jpg";

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
        </main>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
