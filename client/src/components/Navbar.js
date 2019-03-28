import React, { Component } from "react";
import { Link } from "react-router-dom";
import dropdownIcon from "../images/dropdownIcon.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar" role="navigation">
        <ul>
          <li>
            <Link to="/">
              <img className="logo" src="./images/logoEatlocal.svg" alt="logo" />
            </Link>
          </li>
          <li>
            <img src={dropdownIcon} alt="dropdown-icon" />

            <ul class="dropdown">
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
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
