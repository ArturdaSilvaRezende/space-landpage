import React from "react";

//custom style
import { ComponentHero } from "./HeroStyle";

//react-router-dom
import { NavLink } from "react-router-dom";

class Hero extends React.Component {
  render() {
    return (
      <ComponentHero className="hero">
        <div className="hero__contents">
          <div className="hero__text">
            <hgroup>
              <h2> So, you want to travel to</h2>
              <h1> Space</h1>
            </hgroup>

            <p className="hero__description">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>

          <div className="hero__explore">
            <p>
              <NavLink to="Destination">Explore</NavLink>
            </p>
          </div>
        </div>
      </ComponentHero>
    );
  }
}

export default Hero;
