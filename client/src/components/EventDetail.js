import React, { Component } from "react";
import Navbar from "./Navbar.js";

class EventDetail extends Component {
  render() {
    return (
      <div>
        <Navbar />

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
          <div>
            <h2>Marwan Sam</h2>
            <p>Specialities:Lorem ipsum dolor sit amet</p>
          </div>

          <div>
            <img src={"/images/mapPlaceholder.png"} alt="map" />
          </div>

          <div className="specialities-card">
            <img src={"/images/menu.svg"} alt="menu" />
            <h3>Specialities</h3>
            <p>Saturday 9 march</p>
            <img src={"/images/messageicon.svg"} alt="ask" />
          </div>
          <div className="button-card">
            <p>number of guests</p>
            <hr />
            <button className="btn">Ask to join</button>
          </div>
        </div>
      </div>
    );
  }
}

export default EventDetail;
