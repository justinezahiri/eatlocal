import React, { Component } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu.js";

class Navbar1 extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/">
          <img className="logo" src="/images/eatlocalwhite.svg" alt="logo" />
        </Link>
        <button className="menu-btn">
          <img src={"/images/dropdownicon.svg"} alt="dropdown-icon" />
        </button>
      </nav>
    );
  }
}

export default Navbar1;
