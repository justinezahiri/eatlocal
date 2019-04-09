import React, { Component } from "react";
import Navbar from "./Navbar.js";

class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar logout={this.props.logout} />
        <div className="page-content">
          <div className="content">
            {this.props.user && (
              <div className="profile-card">
                <h2>Your details</h2>
                <h3>Username</h3>
                <p>{this.props.user.username}</p>
                <h3>Email</h3>
                <p>{this.props.user.email}</p>
                <h3>Phone</h3>
                <p className="last-info">{this.props.user.phone}</p>
              </div>
            )}

            <div className="reminder-card">
              <h2>Your next events</h2>
              <ul>
                <li>
                  Host name: <strong>Marwan Sam</strong>
                </li>
                <li className="city">Beyrouth</li>
                <li className="date">23.04.19</li>
                <li className="meal">Lunch</li>
                <li className="guests">3 guests</li>
              </ul>
              <ul>
                <li>
                  Host name: <strong>Fatene Tannous</strong>
                </li>
                <li className="city">Beyrouth</li>
                <li className="date">23.04.19</li>
                <li className="meal">Dinner</li>
                <li className="guests">3 guests</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
