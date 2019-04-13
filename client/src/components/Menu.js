import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  state = {
    opened: false
  };

  open = event => {
    this.setState({ opened: true });
  };

  close = event => {
    this.setState({ opened: false });
  };

  render() {
    return (
      <div className="menu-nav">
        <button className="openbtn" onClick={this.open}>
          <img src={"/images/dropdownicon.svg"} alt="dropdown-icon" />
        </button>
        <div className={`menu ${this.state.opened ? "open" : ""}`}>
          <div>
            <Link to="/register" className="menu-link">
              Signup
            </Link>

            <Link to="/login" className="menu-link">
              Login
            </Link>

            <Link to="/profile" className="menu-link">
              Your profile
            </Link>

            <Link to="/search" className="menu-link">
              Find a Host
            </Link>

            <button className="menu-btn" onClick={this.props.logout}>
              Logout
            </button>

            <button className="closebtn" onClick={this.close}>
              <img
                className="crossicon"
                src={"/images/cross.svg"}
                alt="close"
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
