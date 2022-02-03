import styled from "styled-components";

export const ComponentHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  .header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .header__logo {
      position: relative;
      top: 60px;
    }

    .Header__btn-show,
    .Header__btn-hide {
      background-color: transparent;
      border: none;
      cursor: pointer;
      display: none;
    }

    .header__menu {
      display: flex;
      align-items: center;
      width: 65%;
      height: 96px;
      position: absolute;
      right: -35px;
      top: 40px;
      padding: 0 60px 0 70px;

      ul {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        padding: 0 20px;

        li {
          a {
            font-family: Barlow;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 2.7px;
            color: #ffffff;
            text-transform: uppercase;

            span {
              font-weight: bolder;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1279px) {
    .header__container {
      .header__logo {
        left: 30px;
      }
      .header__menu {
        right: 0;
        padding: 0 0 0 30px;
      }
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    .header__container {
      .header__logo {
        position: relative;
        top: 25px;
        left: 40px;
      }

      .header__menu {
        background-color: #141822;
        right: 0;
        top: 0;
        padding: 0;
        width: 70%;

        ul {
          li + li {
            margin-left: 10px;
          }
          li {
            a {
              font-size: 14px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    .header__container {
      justify-content: space-between;

      .header__logo {
        left: 30px;
        top: 20px;
      }

      .Header__btn-show {
        display: block;
        position: relative;
        right: 30px;
        top: 20px;
      }

      .header__menu {
        position: absolute;
        right: 0;
        bottom: 0;
        top: 0;
        width: 50%;
        height: 100vh;
        z-index: 999;
        background-color: var(--black);
        display: none;

        .Header__btn-hide {
          display: block;
          position: absolute;
          top: 20px;
          right: 30px;
        }

        ul {
          position: relative;
          top: 80px;
          flex-direction: column;
          padding: 0;
          left: -50px;
          width: 140px;

          li + li {
            margin-top: 25px;
          }
        }
      }
    }
  }
`;
