import React, { Component } from "react";
import Navbar from "./Navbar.js";

class Search extends Component {
  state = {
    place: "",
    date: "",
    meal: "",
    seats: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.updateSearchparams(this.state);
    this.props.history.push("/results");
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <Navbar logout={this.props.logout} />
        <div className="page-content">
          <div className="content">
            <p className="between3font">
              For food lovers and <br />
              curious travelers
            </p>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="place"
                value={this.state.place}
                onChange={this.handleChange}
                placeholder="Where to?"
                required
              />
              <input
                type="date"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
                placeholder="Select your dates"
                required
              />
              <input
                type="text"
                name="meal"
                value={this.state.meal}
                onChange={this.handleChange}
                placeholder="Lunch or Dinner?"
                required
              />
              {/* <select
                value={this.state.meal}
                onChange={this.handleChange}
                className="form-control"
                name="meal"
              >
                <option value="select">Lunch or Dinner?</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
              </select> */}
              <input
                type="number"
                name="seats"
                value={this.state.seats}
                onChange={this.handleChange}
                placeholder="Number of guests"
                required
              />
              <button className="btn"> Find a host </button>{" "}
            </form>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Search;
