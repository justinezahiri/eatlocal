import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar.js";
import AuthService from "./auth-service.js";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    phone: ""
  };

  service = new AuthService();

  handleSubmit = event => {
    event.preventDefault();

    this.service
      .signup(
        this.state.username,
        this.state.password,
        this.state.email,
        this.state.phone
      )

      .then(response => {
        console.log("thenn");
        this.setState({
          username: "",
          password: "",
          email: "",
          phone: ""
        });
        this.props.updateUser(response.data);

        console.log("coucou");
        this.props.history.push("/search");
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="page-content">
          <h1>Signup</h1>
          <div className="content">
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>
                  <input
                    type="name"
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
                <label>
                  <input
                    type="number"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    placeholder="Phone"
                  />
                </label>
                <label>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="Email"
                  />
                </label>
              </div>
              <button
                className="btn"
                onClick={this.handleSubmit}
                type="submit"
                name="create"
              >
                Create your account
              </button>
            </form>
            <p>
              <small>
                If you already have an account, you can login from{" "}
                <Link to="/login">here</Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
