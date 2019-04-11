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
      <div>
        <button class="openbtn" onClick={this.open}>
          Menu
        </button>
        <div className={`menu ${this.state.opened ? "open" : ""}`}>
          <div>
            <Link to="/register" className="menu-link">
              Signup
            </Link>

            <Link to="/login" className="menu-link">
              Login
            </Link>

            <Link to="/search" className="menu-link">
              Find a Host
            </Link>
            {/* <button className="menu-btn" onClick={this.props.logout}>
              <img src={"/images/cross.svg"} alt="close" />
            </button> */}
            <button className="menu-btn" onClick={this.props.logout}>
              Logout
            </button>

            <button className="closebtn" onClick={this.close}>
              fermer
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
