import React, { Component } from "react";
import Navbar from "./Navbar.js";
import axios from "axios";

class EventDetail extends Component {
  render() {
    return (
      <div>
        <Navbar logout={this.props.logout} />

        <div>
          <img
            className="meal-image-detail"
            src="https://imageresizer.static9.net.au/E3mzajh1nmw-FEX6ifOOldX1v4Q=/600x338/smart/http%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2F2017%2F05%2F02%2F16%2F51%2FBeef-kofta-wrap-with-tahini-sauce-by-Matters-of-the-Belly_2.jpg"
            alt="meal"
          />
          <div className="image-cropper">
            <img src={"/images/hostPlaceholder.png"} alt="host" />
          </div>
        </div>
        <div className="content">
          <div className="host-detail">
            <h2>Marwan Sam</h2>
            <p>
              Specialities:Lorem ipsum dolor sit amet lorem ipsum dolor sit amet
              lorem ipsum dolor sit amet
            </p>
          </div>

          <div className="map">
            <img src={"/images/mapplaceholder.svg"} alt="map" />
          </div>

          <div className="specialities-card">
            <img className="menulogo" src={"/images/menu.svg"} alt="menu" />
            <h3 className="specialities">Specialities</h3>
            <p className="date">Saturday 9 march</p>
            <img
              className="askicon"
              src={"/images/messageicon.svg"}
              alt="ask"
            />
            <div className="event-menu">
              <h4>TO START</h4>
              <h3 className="menuitem">Fattouch Salad and Mezze</h3>
              <p className="menudetail">
                Specialities:Lorem ipsum dolor sit amet lorem ipsum dolor sit
                amet
              </p>
              <h4>MAIN COURSE</h4>
              <h3 className="menuitem">Chich Barak with rice</h3>
              <p className="menudetail">
                Specialities:Lorem ipsum dolor sit amet lorem ipsum dolor sit
                amet
              </p>
              <h4>TO FINISH</h4>
              <h3 className="menuitem">Knefe</h3>
              <p className="menudetail">
                Specialities:Lorem ipsum dolor sit amet lorem ipsum dolor sit
                amet
              </p>
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
    );
  }
}

export default EventDetail;
