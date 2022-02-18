import React from "react";

//custom style
import { ComponentHero } from "./HeroStyle";

//images
import HeroMobile from "../img/background-home-mobile.jpg";
import HeroTable from "../img/background-home-tablet.jpg";
import HeroDesktop from "../img/background-home-desktop.jpg";

//react-router-dom
import { NavLink } from "react-router-dom";

class Hero extends React.Component {
  render() {
    return (
      <ComponentHero className="hero">
        <figure className="hero__contents">
          <img
            src={HeroDesktop}
            alt="hero-desktop"
            className="hero__img-desktop"
          />
          <img src={HeroTable} alt="hero-table" className="hero__img-table" />
          <img
            src={HeroMobile}
            alt="hero-mobile"
            className="hero__img-mobile"
          />
          <figcaption>
            <div>
              <hgroup>
                <h2> So, you want to travel to</h2>
                <h1> Space</h1>
              </hgroup>

              <p className="hero__description">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>

            <div className="hero__explore">
              <p>
                <NavLink to="Destination">Explore</NavLink>
              </p>
            </div>
          </figcaption>
        </figure>
      </ComponentHero>
    );
  }
}

export default Hero;
