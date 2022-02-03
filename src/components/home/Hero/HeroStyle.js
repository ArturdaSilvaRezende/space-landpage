import styled from "styled-components";

import HeroDesktop from "../img/background-home-desktop.jpg";
import HeroTablet from "../img/background-home-tablet.jpg";
import HeroMobile from "../img/background-home-mobile.jpg";

export const ComponentHero = styled.section`
  background: url(${HeroDesktop});
  background-size: 100% 100% !important;
  width: 100%;
  height: 900px;
  position: absolute;
  inset: 0;

  .hero__container {
    position: relative;
    top: 40%;

    .hero__contents {
      display: flex;

      h1,
      h2,
      p {
        font-style: normal;
        font-weight: normal;
        text-align: center;
      }

      hgroup {
        width: 40%;

        h2 {
          font-family: Barlow;
          font-size: 28px;
          line-height: 34px;
          color: var(--light-gray);
          letter-spacing: 4.725px;
          text-transform: uppercase;
          position: relative;
          left: 50px;
        }

        h1 {
          font-family: Bellefair;
          font-size: 150px;
          line-height: 172px;
          color: var(--white);
          text-transform: uppercase;
          position: relative;
          left: 70px;
          top: 30px;
        }
      }

      .hero__description {
        font-family: Barlow;
        font-size: 22px;
        line-height: 35px;
        color: var(--light-gray);
        width: 45%;
        text-align: justify;
        position: relative;
        left: 50px;
        top: 50px;
      }

      .hero__explore {
        background-color: var(--white);
        border-radius: 50%;
        width: 272px;
        height: 220px;
        position: relative;
        top: 105px;
        left: -100px;

        p {
          font-family: Bellefair;
          font-size: 27px;
          line-height: 220px;
          letter-spacing: 2px;
          color: #0b0d17;
          text-transform: uppercase;
        }
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1279px) {
    height: 100vh;
    background: url(${HeroTablet});

    .hero__container {
      top: 300px;

      .hero__contents {
        display: block;

        hgroup {
          width: auto;

          h2 {
            font-size: 20px;
            letter-spacing: 3.375px;
            position: static;
          }
          h1 {
            font-size: 150px;
            line-height: 150px;
            margin-top: 25px;
            position: static;
          }
        }

        .hero__description {
          font-size: 16px;
          line-height: 28px;
          margin: 32px auto;
          width: 43%;
          position: static;
          text-align: center;
        }

        .hero__explore {
          width: 242px;
          height: 242px;
          margin: 0 auto;
          top: 100px;
          left: 0;

          p {
            font-size: 32px;
            line-height: 245px;
            letter-spacing: 2px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    background: url(${HeroTablet});
    position: absolute;
    inset: 0;
    height: 1024px;

    .hero__container {
      top: 210px;

      .hero__contents {
        display: block;

        hgroup {
          width: auto;

          h2 {
            font-size: 20px;
            letter-spacing: 3.375px;
            position: static;
          }
          h1 {
            font-size: 150px;
            line-height: 150px;
            margin-top: 25px;
            position: static;
          }
        }

        .hero__description {
          font-size: 16px;
          line-height: 28px;
          margin: 32px auto;
          width: 43%;
          position: static;
          text-align: center;
        }

        .hero__explore {
          width: 242px;
          height: 242px;
          margin: 0 auto;
          top: 100px;
          left: 0;

          p {
            font-size: 32px;
            line-height: 245px;
            letter-spacing: 2px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    background: url(${HeroMobile});
    position: absolute;
    inset: 0;
    height: 667px;

    .hero__container {
      top: 130px;

      .hero__contents {
        flex-direction: column;
        width: 100%;
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translateX(-50%);

        hgroup {
          width: auto;

          h2 {
            width: 70%;
            margin: 0 auto;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 2.7px;
            position: static;
          }

          h1 {
            width: 70%;
            margin: 15px auto 20px auto;
            font-size: 80px;
            line-height: 100px;
            position: static;
          }
        }

        .hero__description {
          width: 70%;
          margin: 0 auto;
          font-size: 15px;
          line-height: 25px;
          position: static;
          text-align: center;
        }

        .hero__explore {
          width: 150px;
          height: 150px;
          margin: 0 auto;
          top: 85px;
          left: 0;

          p {
            font-size: 20px;
            line-height: 160px;
            letter-spacing: 1.25px;
          }
        }
      }
    }
  }
`;
