import React, { Component } from "react";
import Navbar from "./Navbar.js";
import axios from "axios";

class EventsList extends Component {
  render() {
    return (
      <div>
        <a name="top">
          <Navbar />
        </a>
        <div className="content">
          <div className="search-reminder">
            <h3>Your research</h3>
            <ul>
              <li className="search-city">Beyrouth</li>
              <li className="search-date">23.03.19</li>
              <li className="search-meal">Lunch</li>
              <li className="search-guests">3 guests</li>
            </ul>
          </div>

          <div className="events-list">
            <div className="card">
              <div className="image-cropper">
                <img src={"/images/hostplaceholder.png"} alt="host" />
              </div>
              <img
                className="meal-image"
                src="https://imageresizer.static9.net.au/E3mzajh1nmw-FEX6ifOOldX1v4Q=/600x338/smart/http%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2F2017%2F05%2F02%2F16%2F51%2FBeef-kofta-wrap-with-tahini-sauce-by-Matters-of-the-Belly_2.jpg"
                alt="meal"
              />
              <div className="event-card">
                <h2>Fatene Tanous</h2>
                <p>Specialities:Lorem ipsum dolor sit amet</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  scelerisque arcu ullamcorper, auctor ante ac, sodales velit.
                  Quisque posuere ac ex vitae facilisis. Etiam sit amet luctus
                  mi, ut convallis ante.{" "}
                </p>
              </div>
            </div>
            <div className="card">
              <div className="image-cropper">
                <img src={"/images/hostplaceholder.png"} alt="host" />
              </div>
              <img
                className="meal-image"
                src="https://imageresizer.static9.net.au/E3mzajh1nmw-FEX6ifOOldX1v4Q=/600x338/smart/http%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2F2017%2F05%2F02%2F16%2F51%2FBeef-kofta-wrap-with-tahini-sauce-by-Matters-of-the-Belly_2.jpg"
                alt="meal"
              />
              <div className="event-card">
                <h2>Fatene Tanous</h2>
                <p>Specialities:Lorem ipsum dolor sit amet</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  scelerisque arcu ullamcorper, auctor ante ac, sodales velit.
                  Quisque posuere ac ex vitae facilisis. Etiam sit amet luctus
                  mi, ut convallis ante.{" "}
                </p>
              </div>
            </div>
            <button className="btn">
              <a href="#top">Back to top</a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EventsList;
