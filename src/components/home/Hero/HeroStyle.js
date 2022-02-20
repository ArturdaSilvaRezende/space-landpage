import styled from "styled-components";

import HeroMobile from "../img/background-home-mobile.jpg";
import HeroTablet from "../img/background-home-tablet.jpg";
import HeroDesktop from "../img/background-home-desktop.jpg";

export const ComponentHero = styled.section`
  background: url(${HeroDesktop});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  inset: 0;
  height: 900px;
  width: 100%;

  .hero__contents {
    position: relative;
    top: 380px;
    display: flex;
    flex-basis: 100%;

    h1,
    h2,
    p {
      font-style: normal;
      font-weight: normal;
      text-align: center;
    }

    .hero__text {
      hgroup {
        width: 40%;
        position: relative;
        left: 50px;

        h2 {
          font-family: Barlow;
          font-size: 28px;
          line-height: 34px;
          color: var(--light-gray);
          letter-spacing: 4.725px;
          text-transform: uppercase;
          position: relative;
          left: 53px;
        }

        h1 {
          font-family: Bellefair;
          font-size: 150px;
          line-height: 172px;
          color: var(--white);
          text-transform: uppercase;
          position: relative;
          left: 85px;
          top: 30px;
        }
      }

      .hero__description {
        font-family: Barlow;
        font-size: 22px;
        line-height: 35px;
        color: var(--light-gray);
        width: 40%;
        text-align: justify;
        position: relative;
        left: 130px;
        top: 50px;
      }
    }

    .hero__explore {
      background-color: var(--white);
      border-radius: 50%;
      width: 272px;
      height: 220px;
      position: relative;
      top: 105px;
      left: -140px;
      transition: ease-in 1s;
      z-index: 999;

      &::after {
        content: "";
        position: absolute;
        top: -40px;
        left: -50px;
        width: 300px;
        height: 300px;
        background: rgba(255, 255, 255, 0.15);
        border-radius: 50%;
        opacity: 0;
        transition: opacity 500ms linear, transform 750ms ease-in-out;
        z-index: -1;
      }

      &:hover {
        &::after {
          opacity: 1;
          transform: scale(1.2);
        }
      }

      p {
        font-family: Bellefair;
        font-size: 27px;
        line-height: 220px;
        letter-spacing: 2px;
        text-transform: uppercase;

        a {
          color: #0b0d17;
        }
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    background: url(${HeroTablet});
    background-size: 100% 100%;
    height: 100vh;

    .hero__contents {
      flex-direction: column;
      top: 300px;

      .hero__text {
        hgroup {
          width: auto;
          left: 0;
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
          width: 80%;
          position: static;
          text-align: center;
        }
      }

      .hero__explore {
        width: 242px;
        height: 242px;
        margin: 0 auto;

        left: 0;

        &::after {
          top: -30px;
          left: -30px;
        }

        p {
          font-size: 32px;
          line-height: 245px;
          letter-spacing: 2px;
        }
      }
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    background: url(${HeroTablet});
    position: absolute;
    inset: 0;
    height: 1024px;

    .hero__contents {
      flex-direction: column;
      top: 250px;
      .hero__text {
        hgroup {
          width: 100%;
          left: 0;

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
          width: 80%;
          position: static;
          text-align: center;
        }
      }

      .hero__explore {
        width: 242px;
        height: 242px;
        margin: 0 auto;
        top: 100px;
        left: 0;

        &::after {
          top: -30px;
          left: -30px;
        }

        p {
          font-size: 32px;
          line-height: 245px;
          letter-spacing: 2px;
        }
      }
    }
  }

  @media screen and (min-width: 376px) and (max-width: 600px) {
    .hero__contents {
      top: 180px !important;
    }
  }

  @media screen and (max-width: 480px) {
    background: url(${HeroMobile});
    background-size: 100% 100%;
    height: 100vh;

    .hero__contents {
      flex-direction: column;
      top: 170px;

      .hero__text {
        hgroup {
          position: relative;
          top: -50px;
          left: 0;
          width: 100%;

          h2 {
            width: 100%;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 2.7px;
            position: static;
          }

          h1 {
            width: 100%;
            margin: 15px auto 20px auto;
            font-size: 80px;
            line-height: 100px;
            position: static;
          }
        }

        .hero__description {
          width: 80%;
          margin: 0 auto;
          font-size: 15px;
          line-height: 25px;
          position: relative;
          top: -60px;
          left: 0;
          text-align: center;
        }
      }

      .hero__explore {
        width: 150px;
        height: 150px;
        margin: 0 auto;
        top: 15px;
        left: 0;

        &::after {
          top: -10px;
          left: -12px;
          width: 170px;
          height: 170px;
        }

        p {
          font-size: 20px;
          line-height: 160px;
          letter-spacing: 1.25px;
        }
      }
    }
  }

  @media screen and (max-width: 320px) {
    background-size: contain;

    .hero__contents {
      top: 120px;

      .hero__text {
        hgroup {
          left: 0;
          width: 100%;

          h2 {
            font-size: 14px;
            position: relative;
            top: 40px;
            left: 0;
          }
          h1 {
            font-size: 60px;
            position: relative;
            top: 20px;
            left: 0;
          }
        }

        .hero__description {
          width: 78%;
          font-size: 14px;
        }
      }

      .hero__explore {
        width: 100px;
        height: 100px;
        top: -10px;

        &::after {
          top: -5px;
          left: -5px;
          width: 110px;
          height: 110px;
        }

        p {
          font-size: 16px;
          line-height: 100px;
        }
      }
    }
  }
`;
