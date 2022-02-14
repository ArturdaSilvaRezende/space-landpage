import React from "react";

//custom style
import { ComponentHeader } from "./HeaderStyle";

//images
import Logo from "../img/logo.svg";
import ShowMenu from "../img/icon-hamburger.svg";
import HideMenu from "../img/icon-close.svg";

//react-router-dom
import { NavLink } from "react-router-dom";

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
        <NavLink
          to="/"
          exact="true"
          className={({ isActive }) =>
            isActive ? "header__logo" : "header__logo"
          }
        >
          <img src={Logo} alt="space-tourism-logo" />
        </NavLink>

        <button
          type="button"
          className="Header__btn-show"
          onClick={() => this.handleShowMenu()}
        >
          <img src={ShowMenu} alt="button-show-menu" />
        </button>

        <div className="header__line"></div>
        <nav className="header__menu" ref={this.MenuControl}>
          <ul>
            <li>
              <NavLink to="/" exact="true">
                <span>00</span> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Destination"
                className={({ isActive }) => (isActive ? "active" : null)}
              >
                <span>01</span> Destination
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Crew"
                className={({ isActive }) => (isActive ? "active" : null)}
              >
                <span>03</span> Crew
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Technology"
                className={({ isActive }) => (isActive ? "active" : null)}
              >
                <span>04</span> Technology
              </NavLink>
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
      </ComponentHeader>
    );
  }
}

export default Header;
