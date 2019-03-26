import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/EatlocalLogo.png";

class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <div className="container">
          <img src={logo} alt="logo" />
          <p>
            You are what you eat
            <br />
            You are who you meet
          </p>
          <div className="content">
            <Link
              className="btn signup"
              to="/register"
              style={{ textDecoration: "none" }}
            >
              Sign up
            </Link>
            <Link
              className="btn"
              to="/login"
              style={{ textDecoration: "none" }}
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
