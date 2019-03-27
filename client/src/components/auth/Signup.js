import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar.js";

class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="page-content">
          <h1>signup</h1>
          <div className="content">
            <form>
              <input type="name" name="name" placeholder="Name" />
              <input type="number" name="phone" placeholder="Phone" />
              <input type="email" name="email" placeholder="Email" />
              <input type="password" name="password" placeholder="Password" />
            </form>

            <button className="btn" type="submit" name="create">
              Create the account
            </button>
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
