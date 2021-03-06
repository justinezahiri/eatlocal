import React, { Component } from "react";
import Navbar from "./Navbar.js";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

class EventsList extends Component {
  constructor(props) {
    super(props);
    this.state = { listOfEvents: [] };
  }

  getSelectedEvents = () => {
    axios
      .get(
        `${process.env.REACT_APP_APIURL || ""}/api/search?place=${
          this.props.searchparams.place
        }&date=${this.props.searchparams.date}&meal=${
          this.props.searchparams.meal
        }&seats=${this.props.searchparams.seats}`,
        { withCredentials: true }
      )
      .then(responseFromApi => {
        this.setState({
          listOfEvents: responseFromApi.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getSelectedEvents();
  }

  render() {
    // if (!this.state.listOfEvents.length) {
    //   return (
    //     <div>
    //       <Loader type="Oval" color="#fd9c6e" height="100" width="100" />{" "}
    //     </div>
    //   );
    // }

    return (
      <div>
        <Navbar logout={this.props.logout} />
        <div className="content">
          <div className="search-reminder">
            <h3 className="between3font">Your search</h3>
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
          {this.state.listOfEvents.length ? (
            <div className="events-list">
              {this.state.listOfEvents.map(event => {
                return (
                  <div className="card">
                    <div key={event._id}>
                      <Link to={`/eventdetail/${event._id}`}>
                        <div className="image-cropper">
                          <img src={event.avatar} alt="host" />
                        </div>
                        <img
                          className="meal-image"
                          src={event.image}
                          alt="meal"
                        />
                        <div className="event-card">
                          <h2 className="between3font">{event.name}</h2>
                          <p>{event.specialities}</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}

              <button className="btn">
                <a href="#top">Back to top</a>
              </button>
            </div>
          ) : (
            <div className="loader">
              <Loader type="Oval" color="#fd9c6e" height="100" width="100" />{" "}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default EventsList;
