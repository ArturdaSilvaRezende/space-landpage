import styled from "styled-components";

export const ComponentHero = styled.section`
  position: absolute;
  inset: 0;
  background: #0b0d17;
  height: 900px;
  width: 100%;

  .hero__contents {
    position: relative;

    h1,
    h2,
    p {
      font-style: normal;
      font-weight: normal;
      text-align: center;
    }

    img {
      position: relative;
      width: 100%;
      display: block;
    }

    .hero__img-table,
    .hero__img-mobile {
      display: none;
    }

    .hero__img-desktop {
      height: 900px;
    }

    figcaption {
      position: absolute;
      left: 50%;
      top: 70%;
      transform: translate(-50%, -70%);
      display: flex;
      width: 100%;

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

      .hero__explore {
        background-color: var(--white);
        border-radius: 50%;
        width: 272px;
        height: 220px;
        position: relative;
        top: 105px;
        left: -140px;

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
  }

  @media screen and (min-width: 769px) and (max-width: 1279px) {
    height: 100vh;

    .hero__contents {
      display: block;
      top: 300px;

      .hero__img-table {
        position: relative;
        width: 100%;
        display: block;
      }

      .hero__img-mobile,
      .hero__img-desktop {
        display: none;
      }

      figcaption {
        position: absolute;
        left: 50%;
        top: 10%;
        transform: translate(-50%, -10%);
        flex-direction: column;

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

        .hero__explore {
          width: 242px;
          height: 242px;
          margin: 0 auto;
          top: 350px;
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
    position: absolute;
    inset: 0;
    height: 1024px;

    .hero__contents {
      .hero__img-table {
        position: relative;
        width: 100%;
        display: block;
      }

      .hero__img-mobile,
      .hero__img-desktop {
        display: none;
      }

      figcaption {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        flex-direction: column;

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

            a {
              background: var(--black) !important;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 376px) and (max-width: 600px) {
    height: 100vh !important;

    img {
      height: 100vh !important;
    }
  }

  @media screen and (max-width: 480px) {
    height: 100vh;

    .hero__contents {
      flex-direction: column;
      width: 100%;
      position: relative;
      top: 0;

      .hero__img-table,
      .hero__img-desktop {
        display: none;
      }

      .hero__img-mobile {
        height: 100vh;
        display: block;
      }

      figcaption {
        flex-direction: column;
        position: absolute;
        left: 50%;
        top: 27%;
        transform: translateX(-50%);

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

        .hero__explore {
          width: 150px;
          height: 150px;
          margin: 0 auto;
          top: 15px;
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

  @media screen and (max-width: 320px) {
    .hero__contents {
      figcaption {
        position: absolute;
        left: 50%;
        top: 90%;
        transform: translate(-50%, -90%);
        width: 100%;

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
          width: 75%;
          font-size: 14px;
        }

        .hero__explore {
          width: 100px;
          height: 100px;
          top: -10px;

          p {
            font-size: 16px;
            line-height: 100px;
          }
        }
      }
    }
  }
`;
