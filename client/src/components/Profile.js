import React, { Component } from "react";
import Navbar from "./Navbar.js";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { listOfBookedEvents: [] };
  }

  getAllEvents = () => {
    axios
      .get(`${process.env.REACT_APP_APIURL || ""}/api/profile`, {
        withCredentials: true
      })

      .then(response => {
        console.log(response);

        for (var i = 0; i < response.data.bookedEvents.length; i++) {
          const bookedEvent = response.data.bookedEvents[i].event_id[0];
          bookedEvent.date = new Date(bookedEvent.date);
          bookedEvent.date = bookedEvent.date.toLocaleDateString();
        }

        this.setState({ listOfBookedEvents: response.data.bookedEvents });
      });
  };

  componentDidMount() {
    console.log("ComponentDidMount");
    this.getAllEvents();
  }

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

            {this.state.listOfBookedEvents.map(event => {
              return (
                <div className="reminder-card">
                  <h2>Your next events</h2>
                  <ul>
                    <li>
                      Host name: <strong>{event.event_id[0].name}</strong>
                    </li>
                    <li className="city">{event.event_id[0].place}</li>
                    <li className="date">{event.event_id[0].date}</li>
                    <li className="meal">{event.event_id[0].meal}</li>
                    <li className="guests">{event.event_id[0].seats}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
