import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar" role="navigation">
        <ul>
          <li>
            <Link to="/">
              <img
                className="logo"
                src="/images/eatlocalwhite.svg"
                alt="logo"
              />
            </Link>
          </li>
          <li>
            <img src={"/images/dropdownicon.svg"} alt="dropdown-icon" />

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
              <li>
                <Link to="/search" className="navbar-link">
                  Find a Host
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
