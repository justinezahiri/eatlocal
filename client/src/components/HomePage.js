import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <h1>Eatlocal</h1>
        <p>
          You are what you eat
          <br />
          You are who you meet
        </p>

        <Link
          className="btn signup"
          to="/register"
          style={{ textDecoration: "none" }}
        >
          Sign up
        </Link>
        <Link className="btn" to="/login" style={{ textDecoration: "none" }}>
          Log in
        </Link>
      </div>
    );
  }
}

export default HomePage;
