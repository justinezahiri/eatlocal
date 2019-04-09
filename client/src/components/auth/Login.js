import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar.js";
import AuthService from "./auth-service.js";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  service = new AuthService();

  handleSubmit = event => {
    event.preventDefault();

    this.service
      .login(this.state.username, this.state.password)
      .then(response => {
        this.props.updateUser(response);
        this.props.history.push("/search");
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Navbar logout={this.props.logout} />
        <div className="page-content">
          <h1>Login</h1>
          <div className="content">
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>
                  <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    placeholder="Name"
                  />
                </label>
                <label>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder="Password"
                  />
                </label>
              </div>

              <button
                className="btn"
                onClick={this.handleSubmit}
                type="submit"
                name="login"
              >
                Login
              </button>
            </form>
            <p>
              <small>
                If you don't have an account yet, you can create your account{" "}
                <Link to="/register">here</Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
