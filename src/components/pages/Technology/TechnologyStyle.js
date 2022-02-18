import styled from "styled-components";

import BgMobile from "./img/background-technology-mobile.jpg";
import BgTable from "./img/background-technology-tablet.jpg";
import BgDesktop from "./img/background-technology-desktop.jpg";

export const ComponentTechnology = styled.section`
  background: url(${BgDesktop});
  background-size: cover;
  background-repeat: no-repeat;
  height: 900px;
  position: absolute;
  inset: 0;
  width: 100%;

  .technology__container {
    .technology__title {
      font-family: Barlow;
      font-style: normal;
      font-weight: normal;
      text-transform: uppercase;
      font-size: 28px;
      line-height: 34px;
      letter-spacing: 4.725px;
      color: var(--white);
      text-align: center;
      text-align: left;
      margin: 200px 0 40px 85px;

      span {
        mix-blend-mode: normal;
        opacity: 0.25;
      }
    }

    .technology__contents {
      margin-top: 30px;
      display: flex;
      align-items: center;

      .technology__image {
        order: 2;
        .tecknology__img-mobile {
          display: none;
          width: 100%;
        }
        .tecknology__img-desktop {
          display: block;
          width: 515px;
          height: 527px;
          position: relative;
          right: -74px;
        }
      }

      .technology__description {
        order: 1;
        display: flex;

        .technology__navigation {
          display: flex;
          flex-direction: column;

          .technology__active {
            background-color: var(--white);
            opacity: 1;
            color: #0b0d17;

            &:hover {
              color: #0b0d17;
            }
          }

          li + li {
            margin-top: 20px;
          }

          li {
            font-family: Bellefair;
            font-style: normal;
            font-weight: normal;
            text-align: center;
            font-size: 32px;
            color: var(--white);
            mix-blend-mode: normal;
            opacity: 0.25;
            border: 1px solid var(--white);
            border-radius: 50%;
            width: 80px;
            height: 80px;
            line-height: 80px;
            letter-spacing: 2px;
            cursor: pointer;

            &:hover {
              border: 1px solid var(--white) !important;
              color: var(--white);
              opacity: 1;
            }
          }
        }
        .technology__text {
          position: relative;
          left: 90px;

          hgroup {
            h3 {
              font-family: Barlow;
              font-style: normal;
              font-weight: normal;
              text-align: center;
              color: var(--light-gray);
              font-size: 16px;
              line-height: 19px;
              letter-spacing: 2.7px;
              text-align: left;
            }
            h2 {
              font-family: Bellefair;
              font-style: normal;
              font-weight: normal;
              text-align: center;
              text-transform: uppercase;
              color: var(--white);
              font-size: 56px;
              line-height: 64px;
              text-align: left;
              margin: 10px 0 20px 0;
            }
          }

          p {
            font-family: Barlow;
            font-style: normal;
            font-weight: normal;
            text-align: center;
            color: var(--light-gray);
            font-size: 18px;
            line-height: 32px;
            text-align: left;
            width: 71%;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .technology__container {
      .technology__contents {
        .technology__image {
          .tecknology__img-desktop {
            right: -40px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 800px) and (max-width: 992px) {
    height: 100vh !important;
    .technology__container {
      position: relative;
      top: 130px;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    background: url(${BgTable});
    height: 1024px;

    .technology__container {
      .technology__title {
        margin: 120px 0 60px 45px;
        text-align: left;
      }
      .technology__contents {
        flex-direction: column;

        .technology__image {
          order: 1;
          .tecknology__img-mobile {
            display: block;
          }
          .tecknology__img-desktop {
            display: none;
          }
        }
        .technology__description {
          display: block;
          order: 2;
          .technology__navigation {
            margin: 50px auto;
            width: 210px;
            height: 60px;
            flex-direction: row;

            li + li {
              margin-left: 20px;
              margin-top: 0;
            }

            li {
              width: 58px;
              height: 58px;
              line-height: 58px;
              font-size: 24px;
              letter-spacing: 1.5px;
            }
          }
          .technology__text {
            position: static;

            hgroup {
              h3 {
                font-size: 16px;
                line-height: 19px;
                text-align: center;
              }

              h2 {
                font-size: 40px;
                line-height: 46px;
                margin: 10px 0 30px 0;
                text-align: center;
              }
            }

            p {
              font-size: 16px;
              line-height: 28px;
              width: 458px;
              margin: 0 auto;
              text-align: center;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 390px) and (max-width: 480px) {
    height: 944px !important;

    .technology__container {
      top: 100px !important;
    }
  }

  @media screen and (max-width: 480px) {
    background: url(${BgMobile});
    height: 854px;

    .technology__container {
      position: relative;
      top: 40px;

      .technology__title {
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.7px;
        margin-top: 90px;
      }

      .technology__contents {
        flex-direction: column;

        .technology__image {
          order: 1;
          .tecknology__img-mobile {
            display: block;
            height: 170px;
          }
          .tecknology__img-desktop {
            display: none;
          }
        }
        .technology__description {
          display: block;
          order: 2;
          .technology__navigation {
            width: 152px;
            height: 40px;
            margin: 40px auto;
            flex-direction: row;

            li + li {
              margin-left: 20px;
              margin-top: 0;
            }

            li {
              width: 40px;
              height: 40px;
              line-height: 40px;
            }
          }
          .technology__text {
            position: static;

            hgroup {
              h3 {
                font-size: 14px;
                line-height: 17px;
                letter-spacing: 2.3625px;
                text-align: center;
              }
              h2 {
                font-size: 24px;
                line-height: 28px;
                margin: 10px 0 30px 0;
                text-align: center;
              }
            }
            p {
              font-size: 15px;
              line-height: 25px;
              width: 327px;
              margin: 0 auto;
              text-align: center;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 320px) {
    .technology__container {
      .technology__contents {
        .technology__text {
          p {
            width: 90% !important;
          }
        }
      }
    }
  }
`;
