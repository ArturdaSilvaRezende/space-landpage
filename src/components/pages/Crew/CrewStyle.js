import styled from "styled-components";

import BgMobile from "./img/background-crew-mobile.jpg";
import BgTablet from "./img/background-crew-tablet.jpg";
import BgDesktop from "./img/background-crew-desktop.jpg";

export const ComponentCrew = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${BgDesktop});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  inset: 0;
  height: 900px;

  .crew__container {
    .crew__title {
      color: var(--white);
      font-family: Barlow;
      font-style: normal;
      font-weight: normal;
      text-transform: uppercase;
      margin: 200px 0 0 85px;

      span {
        mix-blend-mode: normal;
        opacity: 0.25;
      }
    }

    .crew__contents {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;

      .crew__employee {
        order: 2;

        img {
          margin: 0 auto;
          display: block;
          width: 568.07px;
          height: 670px;
        }
      }

      .crew__contents-container {
        order: 1;

        .crew__dots {
          display: flex;
          justify-content: center;
          position: absolute;
          bottom: 100px;
          left: 85px;

          .active__crew {
            background-color: var(--white);
            opacity: 1;
          }

          span + span {
            margin-left: 20px;
          }

          span {
            display: block;
            background-color: var(--white);
            width: 15px;
            height: 15px;
            border-radius: 50%;
            mix-blend-mode: normal;
            opacity: 0.17;
            cursor: pointer;
          }
        }

        .crew__description {
          margin: -40px 0 0 85px;

          hgroup {
            h3 {
              font-family: Bellefair;
              font-style: normal;
              font-weight: normal;
              text-align: left;
              text-transform: uppercase;
              mix-blend-mode: normal;
              opacity: 0.5;
              color: var(--white);
              font-size: 32px;
              line-height: 37px;
            }
            h2 {
              font-family: Bellefair;
              font-style: normal;
              font-weight: normal;
              text-align: left;
              text-transform: uppercase;
              color: var(--white);
              font-size: 56px;
              line-height: 64px;
              margin: 10px 0 20px 0;
            }
          }

          p {
            font-family: Barlow;
            font-style: normal;
            font-weight: normal;
            text-align: left;
            color: var(--light-gray);
            font-size: 18px;
            line-height: 32px;
            width: 65%;
          }
        }
      }
    }
  }

  @media screen and (min-width: 800px) and (max-width: 992px) {
    height: 105vh !important;

    .crew__container {
      position: relative;
      top: 50px;
      .crew__title {
        margin: 160px 0 0 40px !important;
      }
      .crew__contents {
        margin-top: 40px;

        .crew__employee {
          img {
            position: static !important;
            transform: none !important;
          }

          .crew__employee-line {
            display: block !important;
            width: 100%;
            height: 1px;
            background-color: #383b4b;
            margin: 0 auto;
          }
        }

        .crew__contents-container {
          .crew__description {
            p {
              width: 90% !important;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 481px) and (max-width: 992px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${BgTablet});
    height: 100vh;

    .crew__container {
      .crew__title {
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 3.375px;
        margin: 130px 0 0 40px;
      }

      .crew__contents {
        display: flex;
        flex-direction: column;

        .crew__employee {
          order: 2;
          margin-top: 20px;

          img {
            width: 456.37px;
            height: 500px;
            position: fixed;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
          }

          .crew__employee-line {
            display: none;
          }
        }

        .crew__contents-container {
          order: 1;
          display: flex;
          flex-direction: column;
          width: 458px;
          margin: 0 auto;

          .crew__dots {
            order: 2;
            position: static;

            span + span {
              margin-left: 20px;
            }
            span {
              width: 10px;
              height: 10px;
            }
          }

          .crew__description {
            order: 1;
            margin: 70px 0 40px 0;

            hgroup {
              h3 {
                font-size: 24px;
                line-height: 28px;
                text-align: center;
              }
              h2 {
                font-size: 40px;
                line-height: 46px;
                margin-top: 10px;
                text-align: center;
              }
            }

            p {
              font-size: 16px;
              line-height: 28px;
              margin: 20px auto 0 auto;
              text-align: center;
              width: 80%;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 390px) and (max-width: 480px) {
    height: 100vh !important;
    .crew__container {
      position: relative;
      top: 90px !important;
    }
  }

  @media screen and (max-width: 480px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${BgMobile});
    height: 812px;

    .crew__container {
      position: relative;
      top: 80px;

      .crew__title {
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.7px;
        text-align: center;
        position: relative;
        top: 40px;
        margin: 0;
      }

      .crew__contents {
        position: relative;
        top: 115px;
        display: block;

        .crew__employee {
          img {
            width: 177.12px;
            height: 222px;
          }
          .crew__employee-line {
            display: block;
            width: 327px;
            height: 1px;
            background-color: #383b4b;
            margin: 0 auto;
          }
        }

        .crew__contents-container {
          .crew__dots {
            margin-top: 25px;
            position: static;

            span + span {
              margin-left: 20px;
            }
            span {
              width: 10px;
              height: 10px;
            }
          }

          .crew__description {
            margin: 35px 0 0 0;

            hgroup {
              h3 {
                font-size: 16px;
                line-height: 18px;
                text-align: center;
              }
              h2 {
                font-size: 24px;
                line-height: 28px;
                margin-top: 10px;
                text-align: center;
              }
            }

            p {
              font-size: 15px;
              line-height: 25px;
              width: 70%;
              margin: 20px auto 0 auto;
              text-align: center;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 320px) {
    .crew__container {
      .crew__employee {
        .crew__employee-line {
          width: 90% !important;
        }
      }
    }
  }
`;
