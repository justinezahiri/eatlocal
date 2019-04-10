import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  componentDidMount() {
    const menuEl = document.querySelector(".menu");
    const openbtnEl = document.querySelector(".openbtn");
    const closebtnEl = document.querySelector(".closebtn");

    openbtnEl.addEventListener("click", function(ev) {
      menuEl.classList.add("open");
    });

    closebtnEl.addEventListener("click", function(ev) {
      menuEl.classList.remove("open");
    });
  }
  render() {
    return (
      <div>
        <button class="openbtn">Menu</button>
        <div className="menu">
          <Link to="/register" className="navbar-link">
            Signup
          </Link>

          <Link to="/login" className="navbar-link">
            Login
          </Link>

          <Link to="/search" className="navbar-link">
            Find a Host
          </Link>
          <button className="menu-btn" onClick={this.props.logout}>
            Logout
          </button>
          <button class="closebtn">fermer</button>
        </div>
      </div>
    );
  }
}

export default Menu;
