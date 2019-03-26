import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <Link to="/">EatLocal</Link>
        <div>Signup</div>
        <div>Login</div>
        <div>Logout</div>
        <div>Find a Host</div>
      </div>
    );
  }
}

export default Navbar;
