import React, { Component } from "react";
import Navbar from "./Navbar.js";
import axios from "axios";

class EventsList extends Component {
  constructor(props) {
    super(props);
    this.state = { ListOfEvents: [] };
  }

  getSelectedEvents = () => {
    axios
      .get(
        `http://localhost:5000/api/search?place=
        ${this.props.searchparams.place}
        &${this.props.searchparams.date}
        &${this.props.searchparams.meal}
        &${this.props.searchparams.seats}`
      )
      .then(responseFromApi => {
        this.setState({
          ListOfEvents: responseFromApi.data
        }).catch(err => {
          console.log(err);
        });
      });
  };

  componentDidMount() {
    this.getSelectedEvents();
  }

  render() {
    return (
      <div>
        <Navbar logout={this.props.logout} />
        <div className="content">
          <div className="search-reminder">
            <h3>Your research</h3>
            {this.props.searchparams && (
              <ul>
                <li className="search-city">{this.props.searchparams.place}</li>
                <li className="search-date">{this.props.searchparams.date}</li>
                <li className="search-meal">{this.props.searchparams.meal}</li>
                <li className="search-guests">
                  {this.props.searchparams.seats}
                </li>
              </ul>
            )}
          </div>

          <div className="events-list">
            <div className="card">
              {/*
              {this.state.ListOfEvents.map(event => {
                return (
                  <div key={event_id}>
                    <img src={event.image} alt="meal" />
                  </div>
                );
              })} */}
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
