import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Registration from "./Registration";
import Login from "./Login";
import Profile from "./Profile";
import Navbar from "./Navbar";
import AuthContextProvider from "../contexts/AuthContext";

function App() {
  return (
    <section className="App">
      <Router>
        <Navbar />
        <Switch>
          <AuthContextProvider>
            <Route exact path="/" component={Registration} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
          </AuthContextProvider>
        </Switch>
      </Router>
    </section>
  );
}

export default App;
