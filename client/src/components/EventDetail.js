import React, { Component } from "react";
import Navbar from "./Navbar.js";
import axios from "axios";
import { Link } from "react-router-dom";

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
      .get(`http://localhost:5000/api/events/${this.props.eventid}`)

      .then(responseFromApi => {
        const theEvent = responseFromApi.data;
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
            </div>
            <div className="image-cropper">
              <img src={this.state.event.avatar} alt="host" />
            </div>
            <div className="content">
              <div className="host-detail">
                <h2>{this.state.event.name}</h2>
                <p>{this.state.event.specialities}</p>
              </div>
              <div className="map">
                <img src={"/images/mapplaceholder.svg"} alt="map" />
              </div>
              <div className="specialities-card">
                <img className="menulogo" src={"/images/menu.svg"} alt="menu" />
                <h3 className="specialities">Specialities</h3>
                <p className="date">{this.state.event.date}</p>
                <img
                  className="askicon"
                  src={"/images/messageicon.svg"}
                  alt="ask"
                />
                <div className="event-menu">
                  <h4>TO START</h4>
                  <h3 className="menuitem">{this.state.event.menu[0]}</h3>
                  <h4>MAIN COURSE</h4>
                  <h3 className="menuitem">{this.state.event.menu[1]}</h3>
                  <h4>TO FINISH</h4>
                  <h3 className="menuitem">{this.state.event.menu[2]}</h3>
                </div>
              </div>

              <div className="button-card">
                <div className="join-form">
                  {/* <div className="add-guests">
                    <img src={"/images/travelersicon.svg"} alt="travelers" />
                    <button>
                      <img src={"/images/addicon.svg"} alt="add" />
                    </button>
                    <h4>3</h4>
                    <button>
                      <img src={"/images/removeicon.svg"} alt="add" />
                    </button>
                  </div>
                  <hr /> */}
                  <button className="join-btn" onClick={this.handleClick}>
                    Ask to join
                    {/* <Link
                      className="btn"
                      to="/confirm"
                      style={{ textDecoration: "none" }}
                    >
                      Ask to join
                    </Link> */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default EventDetail;
