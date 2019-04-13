import React, { Component } from "react";
import Navbar from "./Navbar.js";

import axios from "axios";

class Confirm extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = event => {
    axios
      .post(
        `${process.env.REACT_APP_APIURL || ""}/api/book`,
        {
          event_id: this.props.eventresa.event._id,
          seats: this.props.eventresa.event.seats
        },
        { withCredentials: true }
      )
      .then(responseFromApi => {
        this.props.history.push("/sent");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { name, place, date, meal, seats } = this.props.eventresa.event;

    return (
      <div>
        <Navbar logout={this.props.logout} />

        <div className="page-content">
          <div className="content">
            {this.props.eventresa && (
              <div className="recap-card">
                <ul>
                  <li>
                    Host name: <strong>{name}</strong>
                  </li>
                  <li className="place">{place}</li>
                  <li className="date">{date}</li>
                  <li className="meal">{meal}</li>
                  <li className="guests">{seats}</li>
                </ul>
              </div>
            )}
            <button className="btn" onClick={this.handleClick}>
              Confirm reservation
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirm;
