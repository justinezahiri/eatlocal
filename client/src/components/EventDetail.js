import React, { Component } from "react";
import Navbar from "./Navbar.js";
import axios from "axios";
import { Link } from "react-router-dom";
import EventMap from "./EventMap.js";

class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: null
    };
  }

  handleClick = event => {
    event.preventDefault();

    this.props.updateEventResa(this.state);
    this.props.history.push("/confirm");
  };

  componentDidMount() {
    this.getSingleEvent();
  }

  getSingleEvent = () => {
    axios
      .get(
        `${process.env.REACT_APP_APIURL || ""}/api/events/${this.props.eventid}`
      )

      .then(responseFromApi => {
        const theEvent = responseFromApi.data;
        theEvent.date = new Date(theEvent.date);
        theEvent.date = theEvent.date.toLocaleDateString();
        this.setState({ event: theEvent });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Navbar logout={this.props.logout} />

        {this.state.event && (
          <div className="theevent">
            <div className="event-meal-img">
              <img
                className="meal-image-detail"
                src={this.state.event.image}
                alt="meal"
              />
              <div className="arcshape" />
            </div>
            <div className="image-cropper">
              <img src={this.state.event.avatar} alt="host" />
            </div>
            <div className="content">
              <div className="host-detail">
                <h2 className="between3font">{this.state.event.name}</h2>
                <p>{this.state.event.address}</p>
                <p>{this.state.event.specialities}</p>
              </div>
              {/* <div className="map">
                <img src={"/images/mapplaceholder.svg"} alt="map" />
              </div> */}

              <EventMap address={this.state.event.address} />

              <div className="specialities-card">
                <img className="menulogo" src={"/images/menu.svg"} alt="menu" />
                <h3 className="specialities between3font">Specialities</h3>
                <p className="date">{this.state.event.date}</p>
                <img
                  className="askicon"
                  src={"/images/messageicon.svg"}
                  alt="ask"
                />
                <div className="event-menu">
                  <h4>TO START</h4>
                  <h3 className="menuitem between3font">
                    {this.state.event.menu[0]}
                  </h3>
                  <h4>MAIN COURSE</h4>
                  <h3 className="menuitem between3font">
                    {this.state.event.menu[1]}
                  </h3>
                  <h4>TO FINISH</h4>
                  <h3 className="menuitem between3font">
                    {this.state.event.menu[2]}
                  </h3>
                </div>
              </div>

              <button className="btn" onClick={this.handleClick}>
                Ask to join
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default EventDetail;
