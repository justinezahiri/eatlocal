import React, { Component } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu.js";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/">
          <img className="logo" src="/images/eatlocalwhite.svg" alt="logo" />
        </Link>

        <Menu logout={this.props.logout} />
      </nav>
    );
  }
}

export default Navbar;
