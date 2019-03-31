import React, { Component } from "react";
import "./App.scss";

import { Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage.js";
import Signup from "./components/auth/Signup.js";
import Login from "./components/auth/Login.js";
import Profile from "./components/Profile.js";
// import AuthService from "./components/auth/auth-service.js";
import Search from "./components/Search.js";
import EventsList from "./components/EventsList.js";
import EventDetail from "./components/EventDetail.js";
import Recap from "./components/Recap.js";
import Sent from "./components/Sent.js";

class App extends Component {
  // state = {
  //   user: null
  // };

  // service = new AuthService();

  // fetchUser = () => {
  //   if (this.state.user === null) {
  //     this.service
  //       .loggedin()
  //       .then(response => this.setState({ user: response }))
  //       .catch(err => this.setState({ user: false }));
  //   }
  // };

  // updateUser = data => {
  //   this.setState({ user: data });
  // };

  // componentDidMount() {
  //   this.fetchUser();
  // }

  render() {
    return (
      <Route
        render={props => (
          <div className="App" data-route={props.location.pathname}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/register" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/results" component={EventsList} />
              <Route exact path="/eventdetail" component={EventDetail} />
              <Route exact path="/confirm" component={Recap} />
              <Route exact path="/sent" component={Sent} />
            </Switch>
          </div>
        )}
      />
    );
  }
}

export default App;
