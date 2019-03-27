import React, { Component } from "react";
import { Link } from "react-router-dom";
import pin from "../images/Eatlocal pin.png";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <Link to="/">
          <img src={pin} alt="pin" />
        </Link>
        <Link to="/register" className="navbar-link">
          Signup
        </Link>
        <Link to="/login" className="navbar-link">
          Login
        </Link>
      </div>
    );
  }
}

export default Navbar;
