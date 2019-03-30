import React, { Component } from "react";
import Navbar from "./Navbar.js";

class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="page-content">
          <div className="content">
            <div className="profile-card">
              <h2>Your details</h2>
              <h3>Username</h3>
              <h3>Email</h3>
              <h3>Phone</h3>
            </div>

            <div className="profile-card">
              <h2>Your next events</h2>
              <ul>
                <li>By: Marwan Sam</li>
                <li>Beyrouth</li>
                <li>Lunch</li>
                <li>3 guests</li>
              </ul>
              <ul>
                <li>By: Fatene Tannous</li>
                <li>Beyrouth</li>
                <li>Dinner</li>
                <li>3 guests</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
