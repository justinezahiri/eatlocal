import React, { Component } from "react";
import Navbar from "./Navbar.js";
import axios from "axios";

class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getSingleEvent();
  }

  getSingleEvent = () => {
    axios
      .get(`/api/events/${this.props._id}`)

      .then(responseFromApi => {
        const theEvent = responseFromApi.data;
        this.setState(theEvent);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Navbar logout={this.props.logout} />

        {/*TODO: condtionnal rendering when event is known */}
        {this.state.event && (
          <div className="theevent">
            <div className="event-meal-img">
              <img
                className="meal-image-detail"
                src={this.state.image}
                alt="meal"
              />
            </div>
            <div className="image-cropper">
              <img src={this.state.avatar} alt="host" />
            </div>
            <div className="content">
              <div className="host-detail">
                <h2>{this.state.name}</h2>
                <p>{this.state.specialities}</p>
              </div>
              <div className="map">
                <img src={"/images/mapplaceholder.svg"} alt="map" />
              </div>
              <div className="specialities-card">
                <img className="menulogo" src={"/images/menu.svg"} alt="menu" />
                <h3 className="specialities">Specialities</h3>
                <p className="date">{this.state.date}</p>
                <img
                  className="askicon"
                  src={"/images/messageicon.svg"}
                  alt="ask"
                />
                <div className="event-menu">
                  <h4>TO START</h4>
                  <h3 className="menuitem">{this.state.menu[0]}</h3>
                  <h4>MAIN COURSE</h4>
                  <h3 className="menuitem">{this.state.menu[1]}</h3>
                  <h4>TO FINISH</h4>
                  <h3 className="menuitem">{this.state.menu[2]}</h3>
                </div>
              </div>

              <div className="button-card">
                <div className="join-form">
                  <div className="add-guests">
                    <img src={"/images/travelersicon.svg"} alt="travelers" />
                    <button>
                      <img src={"/images/addicon.svg"} alt="add" />
                    </button>
                    <h4>3</h4>
                    <button>
                      <img src={"/images/removeicon.svg"} alt="add" />
                    </button>
                  </div>
                  <hr />
                  <div className="join-btn">
                    <button className="btn">Ask to join</button>
                  </div>
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
