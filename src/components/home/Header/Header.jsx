import React from "react";

//custom style
import { ComponentHeader } from "./HeaderStyle";
import { Container } from "../../global/StyleGlobal";

//images
import Logo from "../img/logo.svg";
import ShowMenu from "../img/icon-hamburger.svg";
import HideMenu from "../img/icon-close.svg";

class Header extends React.Component {
  constructor(props) {
    super();
    this.state = {
      showMenu: false,
    };

    this.MenuControl = React.createRef();
  }

  componentDidMount() {
    window.onresize = () => {
      if (window.innerWidth > 480) {
        this.MenuControl.current.style.display = "flex";
        this.MenuControl.current.classList.remove("hideMenu");
      } else {
        this.MenuControl.current.style.display = "none";
      }
    };
  }

  handleShowMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
    if (this.state.showMenu === false) {
      this.MenuControl.current.classList.remove("hideMenu");
      this.MenuControl.current.style.display = "block";
      this.MenuControl.current.classList.add("showMenu");
      this.setState({ showMenu: true });
    }
  };

  handleHideMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
    if (this.state.showMenu === true) {
      this.MenuControl.current.classList.remove("showMenu");
      this.MenuControl.current.classList.add("hideMenu");

      setTimeout(() => {
        this.MenuControl.current.style.display = "none";
      }, 999);

      this.setState({ showMenu: false });
    }
  };

  render() {
    return (
      <ComponentHeader className="header">
        <Container className="header__container">
          <a href="index.html" className="header__logo">
            <img src={Logo} alt="space-tourism-logo" />
          </a>

          <button
            type="button"
            className="Header__btn-show"
            onClick={() => this.handleShowMenu()}
          >
            <img src={ShowMenu} alt="button-show-menu" />
          </button>

          <nav className="header__menu" ref={this.MenuControl}>
            <ul>
              <li>
                <a href=" #">
                  <span>00</span> Home
                </a>
              </li>
              <li>
                <a href=" #">
                  <span>01</span> Destination
                </a>
              </li>
              <li>
                <a href=" #">
                  <span>03</span> Crew
                </a>
              </li>
              <li>
                <a href=" #">
                  <span>04</span> Technology
                </a>
              </li>
            </ul>
            <button
              type="button"
              className="Header__btn-hide"
              onClick={() => this.handleHideMenu()}
            >
              <img src={HideMenu} alt="button-hide-menu" />
            </button>
          </nav>
        </Container>
      </ComponentHeader>
    );
  }
}

export default Header;
