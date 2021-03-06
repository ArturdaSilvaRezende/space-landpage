import styled from "styled-components";

export const ComponentHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .header__logo {
    position: relative;
    top: 65px;
    left: 40px;
  }

  .Header__btn-show,
  .Header__btn-hide {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: none;
  }

  .header__line {
    position: absolute;
    width: 36%;
    height: 0.46px;
    left: 160px;
    top: 75px;
    background-color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.25;
    z-index: 10;
  }

  .header__menu {
    display: flex;
    align-items: center;
    width: 725.13px;
    height: 69px;
    position: absolute;
    right: 0;
    top: 40px;
    padding: 0 70px 0 0;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);

    ul {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      padding: 0 20px;

      li {
        position: relative;
        a {
          font-family: Barlow;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 2.7px;
          color: #ffffff;
          text-transform: uppercase;

          &:hover {
            &::before {
              content: "";
              position: absolute;
              width: 100%;
              height: 2px;
              bottom: 0;
              left: 0;
              top: 40.2px;
              background-color: var(--white);
              mix-blend-mode: normal;
              opacity: 0.5;
            }
          }
          span {
            font-weight: bolder;
          }
        }
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1280px) {
    .header__logo {
      left: 30px;
      top: 50px;
    }

    .header__line {
      width: 25%;
      left: 15%;
    }

    .header__menu {
      right: 0;
      padding: 0 0 0 20px;
      width: 63%;
      backdrop-filter: none;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    .header__logo {
      position: relative;
      top: 10px;
      left: 40px;
    }
    .header__line {
      display: none;
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

  @media screen and (max-width: 480px) {
    justify-content: space-between;

    .header__logo {
      left: 30px;
      top: 20px;

      img {
        width: 40px;
        height: 40px;
      }
    }

    .Header__btn-show {
      display: block;
      position: relative;
      right: 30px;
      top: 20px;
    }

    .header__line {
      display: none;
    }

    .header__menu {
      position: fixed;
      right: 0;
      bottom: 0;
      top: 0;
      width: 270px;
      height: 100vh;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(1rem);

      z-index: 999;
      display: none;
      padding: 0;

      .Header__btn-hide {
        display: block;
        position: absolute;
        top: 20px;
        right: 30px;

        img {
          width: 19.09px;
          height: 19.09px;
        }
      }

      ul {
        position: relative;
        top: 80px;
        flex-direction: column;
        padding: 0;
        left: 20px;
        width: 80%;

        li + li {
          margin-top: 35px;
        }

        li {
          a {
            &:hover {
              &::before {
                top: 30px;
              }
            }
          }
        }
      }
    }
  }
`;
