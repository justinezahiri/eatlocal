import React, { Component } from "react";
import Navbar from "./Navbar.js";
import axios from "axios";

class Sent extends Component {
  render() {
    return (
      <div className="sent">
        <div>
          <Navbar logout={this.props.logout} />
        </div>

        <div className="content">
          <div className="card">
            <div className="title">
              <img src={"/images/button-check.svg"} alt="check" />

              <h1>Sent to host</h1>
              <p>Waiting for approval</p>
            </div>

            <div className="result">
              <p>
                Lunch at Marwan Sam
                <br />
                Saturday 9 March
                <br />
                from 1:00 pm to 2:30 pm
                <br />
                for 6 guests
              </p>
            </div>

            <div className="email">
              <p>
                You will be notified by message and email to:
                <br />
                marco.dubois@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sent;
