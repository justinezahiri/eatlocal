import React, { Component } from "react";
import Navbar from "./Navbar.js";
import axios from "axios";

class Confirm extends Component {
  render() {
    return (
      <div>
        <Navbar logout={this.props.logout} />

        <div className="page-content">
          <div className="content">
            <div className="recap-card">
              <ul>
                <li>
                  Host name: <strong>Marwan Sam</strong>
                </li>
                <li className="city">Beyrouth</li>
                <li className="date">23.04.19</li>
                <li className="meal">Lunch</li>
                <li className="guests">3 guests</li>
              </ul>
            </div>
            <button className="btn" type="submit">
              Confirm reservation
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirm;
