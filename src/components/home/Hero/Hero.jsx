import React from "react";

//custom style
import { ComponentHero } from "./HeroStyle";

//components
import { Container } from "../../global/StyleGlobal";

class Hero extends React.Component {
  render() {
    return (
      <ComponentHero className="hero">
        <Container className="hero__container">
          <div className="hero__contents">
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
              <p> Explore</p>
            </div>
          </div>
        </Container>
      </ComponentHero>
    );
  }
}

export default Hero;
