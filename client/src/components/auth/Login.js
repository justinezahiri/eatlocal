import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar.js";
import AuthService from "./auth-service.js";

class Login extends Component {
  state = {
    username: "",
    password: "",
    error: false
  };

  service = new AuthService();

  handleSubmit = event => {
    event.preventDefault();

    this.service
      .login(this.state.username, this.state.password)
      .then(response => {
        this.props.updateUser(response);
        this.props.history.push("/search");
      })
      .catch(error => {
        this.setState({ error: error.response.data.message });
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const error = this.state.error;

    return (
      <div>
        <Navbar logout={this.props.logout} />
        <div className="page-content">
          <h1 className="between3font">Login</h1>
          <div className="content">
            <form onSubmit={this.handleSubmit}>
              {error && <p className="error">{this.state.error}</p>}

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
