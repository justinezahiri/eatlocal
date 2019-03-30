import React, { Component } from "react";
import Navbar from "./Navbar.js";

class Recap extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="page-content">
          <div className="content">
            <div className="card">your resa recap</div>
          </div>
        </div>
        <p>vérifier les infos et confimer la résa</p>
      </div>
    );
  }
}

export default Recap;
