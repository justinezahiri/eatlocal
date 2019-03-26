import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="SignupLogin">
        <h1>login</h1>
        <form>
          <input type="name" name="name" placeholder="Name" />
          <input type="password" name="password" placeholder="Password" />
        </form>
        <button className="btn" type="submit" name="login">
          Login
        </button>
        <p>
          <small>
            If you don't have an account yet, you can create your account{" "}
            <Link to="/register">here</Link>
          </small>
        </p>
      </div>
    );
  }
}

export default Login;
