import React, { Component } from "react";
import Navbar from "./Navbar.js";

class Sent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, date, meal, seats } = this.props.eventresa.event;

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
                {meal} at {name}
                <br />
                {date}
                <br />
                for {seats} guests
              </p>
            </div>

            <div className="email">
              <p>
                You will be notified by message and email to:
                <br />
                {this.props.user.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sent;
