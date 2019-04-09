import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenu: false
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <nav className="navbar" role="navigation">
        <Link to="/">
          <img className="logo" src="/images/eatlocalwhite.svg" alt="logo" />
        </Link>

        <button className="dropbtn" onClick={this.showDropdownMenu}>
          <img src={"/images/dropdownicon.svg"} alt="dropdown-icon" />
        </button>

        {this.state.displayMenu ? (
          <ul className="menu">
            <li>
              <Link to="/register" className="navbar-link">
                Signup
              </Link>
            </li>
            <li>
              <Link to="/login" className="navbar-link">
                Login
              </Link>
            </li>
            <li>
              <Link to="/search" className="navbar-link">
                Find a Host
              </Link>
            </li>
            <li>
              <button className="navbar-btn" onClick={this.props.logout}>
                Logout
              </button>
            </li>
          </ul>
        ) : null}
      </nav>
    );
  }
}

export default Navbar;
