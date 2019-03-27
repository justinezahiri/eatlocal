import React, { Component } from "react";
import Navbar from "./Navbar.js";

class Search extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="page-content">
          <div className="content">
            <p>
              For food lovers and
              <br />
              curious travelers
            </p>
            <form>
              <input type="text" name="city" placeholder="Where to?" />
              <input type="date" name="date" placeholder="Select your dates" />
              <input
                type="number"
                name="number-of-guests"
                placeholder="Number of guests"
              />
            </form>
            <button className="btn" type="search" name="search">
              Find a host
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
