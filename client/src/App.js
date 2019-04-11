import React, { Component } from "react";
import "./App.scss";

import { Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage.js";
import Signup from "./components/auth/Signup.js";
import Login from "./components/auth/Login.js";
import Profile from "./components/Profile.js";
import AuthService from "./components/auth/auth-service.js";

import Search from "./components/Search.js";
import EventsList from "./components/EventsList.js";
import EventDetail from "./components/EventDetail.js";
import Confirm from "./components/Confirm.js";
import Sent from "./components/Sent.js";

class App extends Component {
  state = {
    user: null,
    searchparams: null
  };

  service = new AuthService();

  fetchUser = () => {
    if (this.state.user === null) {
      this.service
        .loggedin()
        .then(response => this.setState({ user: response }))
        .catch(err => this.setState({ user: false }));
    }
  };

  updateUser = data => {
    this.setState({ user: data });
  };

  updateSearchparams = data => {
    this.setState({ searchparams: data });
  };

  logout = event => {
    this.service.logout().then(response => {
      this.updateUser(false);
      // this.props.history.push("/");
    });
  };

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    return (
      <Route
        render={props => (
          <div className="App" data-route={props.location.pathname}>
            <div id="top" />

            <Switch>
              <Route exact path="/" component={HomePage} />

              <Route
                exact
                path="/register"
                render={props => (
                  <Signup
                    updateUser={this.updateUser}
                    history={props.history}
                  />
                )}
              />

              <Route
                exact
                path="/login"
                render={props => (
                  <Login
                    logout={this.logout}
                    updateUser={this.updateUser}
                    history={props.history}
                  />
                )}
              />

              <Route
                exact
                path="/profile"
                render={props => (
                  <Profile
                    logout={this.logout}
                    user={this.state.user}
                    updateUser={this.updateUser}
                  />
                )}
              />

              <Route
                exact
                path="/search"
                render={props => (
                  <Search
                    logout={this.logout}
                    updateSearchparams={this.updateSearchparams}
                    history={props.history}
                  />
                )}
              />

              <Route
                exact
                path="/results"
                render={props => (
                  <EventsList
                    logout={this.logout}
                    searchparams={this.state.searchparams}
                    history={props.history}
                  />
                )}
              />
              {/* <Route exact path="/results" component={EventsList} /> */}
              <Route exact path="/eventdetail/:id" component={EventDetail} />
              <Route exact path="/confirm" component={Confirm} />
              <Route exact path="/sent" component={Sent} />
            </Switch>
          </div>
        )}
      />
    );
  }
}

export default App;
