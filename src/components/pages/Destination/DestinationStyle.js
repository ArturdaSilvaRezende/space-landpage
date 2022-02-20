import styled from "styled-components";

import BgDesktop from "./img/background-destination-desktop.jpg";
import BgTablet from "./img/background-destination-tablet.jpg";
import BgMobile from "./img/background-destination-mobile.jpg";

export const ComponentDestination = styled.section`
  background: url(${BgDesktop});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 900px;
  position: absolute;
  inset: 0;
  width: 100%;

  .destination__container {
    .destination__title {
      color: var(--white);
      font-family: Barlow;
      font-style: normal;
      font-weight: normal;
      font-size: 28px;
      line-height: 34px;
      letter-spacing: 4.725px;
      text-transform: uppercase;
      text-align: left;
      margin: 210px 0 120px -30px;

      span {
        mix-blend-mode: normal;
        opacity: 0.25;
      }
    }

    .destination__contents {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      position: absolute;
      top: 80%;
      left: 50%;
      transform: translate(-50%, -80%);
      width: 100%;

      img {
        display: block;
        width: 445px;
        height: 445px;
      }

      .destination__description {
        width: 445px;
        height: 472px;

        .destination__menu {
          display: flex;
          justify-content: space-between;
          width: 285.5px;

          li + li {
            margin-left: 30px;
          }

          .activeDest {
            position: relative;
            display: block;

            &::before {
              content: "";
              position: absolute;
              width: 100%;
              height: 2px;
              bottom: 0;
              left: 0;
              top: 25.2px;
              background-color: var(--white);
            }
          }

          li {
            font-family: Barlow;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 2.7px;
            text-transform: uppercase;
            color: var(--light-gray);
            cursor: pointer;
            position: relative;

            &:hover {
              &::before {
                content: "";
                position: absolute;
                width: 100%;
                height: 2px;
                bottom: 0;
                left: 0;
                top: 25.2px;
                background-color: var(--white);
                mix-blend-mode: normal;
                opacity: 0.5;
              }
            }
          }
        }

        .description__about {
          h2 {
            font-family: Bellefair;
            font-style: normal;
            font-weight: normal;
            text-align: left;
            color: var(--white);
            font-size: 83px;
            line-height: 115px;
            text-transform: uppercase;
            margin: 40px 0 15px -10px;
          }

          p {
            font-family: Barlow;
            font-style: normal;
            font-weight: normal;
            text-align: left;
            font-size: 18px;
            line-height: 32px;
            width: 80%;
            color: var(--light-gray);
          }
        }

        .description__distance,
        .description__travel {
          span {
            font-family: Barlow;
            font-style: normal;
            font-weight: normal;
            text-align: center;
            text-transform: uppercase;
            color: var(--light-gray);
            display: block;
          }

          p {
            font-family: Bellefair;
            font-style: normal;
            font-weight: normal;
            text-align: center;
            text-transform: uppercase;
            color: var(--white);
          }
        }

        .description__line {
          background: #383b4b;
          height: 1px;
          width: 444px;
          margin: 70px auto 30px auto;
        }

        .destination__information {
          display: flex;

          span {
            font-size: 14px;
            line-height: 17px;
            letter-spacing: 2.3625px;
            text-align: left;
          }
          p {
            margin-top: 15px;
            font-size: 28px;
            line-height: 32px;
            text-align: left;
          }

          .description__distance {
            margin-right: 70px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 800px) and (max-width: 1024px) {
    height: 100vh !important;
    position: fixed !important;

    .destination__title {
      margin: 180px 0 0 50px !important;
    }

    .destination__contents {
      top: 120px !important;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    background: url(${BgTablet});
    background-size: cover;
    height: 1025px;

    .destination__container {
      position: relative;

      .destination__title {
        margin: 120px 0 0 50px;
        text-align: left;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 3.375px;
      }

      .destination__contents {
        position: absolute;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        flex-direction: column;

        img {
          width: 300px;
          height: 300px;
          margin: 0 auto 25px auto;
        }

        .destination__description {
          .destination__menu {
            width: 285.5px;
            margin: 50px auto 0 auto;

            li {
              font-size: 16px;
              line-height: 19px;
              letter-spacing: 2.7px;
            }
          }

          .description__about {
            margin: 20px auto 30px auto;

            h2 {
              font-size: 80px;
              line-height: 92px;
              text-align: center;
            }
            p {
              width: 450px;
              font-size: 16px;
              line-height: 28px;
              margin: 0 auto;
              text-align: center;
            }
          }

          .description__line {
            width: 100%;
            height: 1px;
            background: #383b4b;
            margin: 40px auto 20px auto;
          }

          .destination__information {
            display: flex;
            justify-content: center;
            padding-top: 20px;

            span {
              font-size: 14px;
              line-height: 17px;
              letter-spacing: 2.3625px;
              display: block;
            }

            p {
              font-size: 28px;
              line-height: 32px;
              margin-top: 15px;
            }

            .description__distance {
              margin-right: 80px;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 376px) and (max-width: 480px) {
    height: 926px !important;

    .destination__container {
      position: relative;
      top: 30px;
    }
  }

  @media screen and (max-width: 480px) {
    background: url(${BgMobile});
    background-size: 100% 100%;
    height: 870px;

    .destination__container {
      position: relative;

      .destination__title {
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.7px;
        margin: 90px auto 40px 30px;
      }

      .destination__contents {
        position: absolute;
        top: 60px;
        left: 40%;
        transform: translateX(-40%);
        flex-direction: column;
        width: 100%;

        img {
          width: 170px;
          height: 170px;
          margin: 0 auto 25px auto;
        }

        .destination__description {
          width: 100%;
          height: auto;

          .destination__menu {
            width: 75%;
            margin: 0 auto 0 30px;

            li {
              font-size: 14px;
              line-height: 17px;
              letter-spacing: 2.3625px;
            }
          }

          .description__about {
            margin: 20px auto 30px auto;
            width: 100%;

            h2 {
              font-size: 56px;
              line-height: 64px;
              text-align: center;
            }
            p {
              width: 322px;
              font-size: 15px;
              line-height: 25px;
              margin: 0 auto;
              text-align: center;
            }
          }

          .description__line {
            width: 80%;
            height: 1px;
            background: #383b4b;
            margin: 20px auto;
          }

          .destination__information {
            flex-direction: column;
            width: 100%;

            span,
            p {
              text-align: center;
            }

            .description__distance {
              margin: 20px 0 20px 0;

              span {
                font-size: 14px;
                line-height: 17px;
                letter-spacing: 2.3625px;
              }

              p {
                font-size: 28px;
                line-height: 32px;
                margin: 15px 0;
              }
            }

            .description__travel {
              span {
                font-size: 14px;
                line-height: 17px;
                letter-spacing: 2.3625px;
              }

              p {
                font-size: 28px;
                line-height: 32px;
                margin: 15px 0;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 320px) {
    .destination__container {
      .destination__description {
        .description__about {
          p {
            width: 80% !important;
          }
        }

        .description__line {
          width: 300px !important;
        }
      }
    }
  }
`;
