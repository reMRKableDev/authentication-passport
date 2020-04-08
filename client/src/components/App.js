import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Registration from "./Registration";
import Login from "./Login";
import Profile from "./Profile";
import Navbar from "./Navbar";
import AuthContextProvider from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <section className="App">
      <AuthContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Registration} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/profile" component={Profile} />
          </Switch>
        </Router>
      </AuthContextProvider>
    </section>
  );
}

export default App;
