import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Registration from "../Forms/Registration/Registration";
import Login from "../Forms/Login";
import Profile from "../ProtectedComponents/Profile";
import Navbar from "../Navigation/Navbar";
import AuthContextProvider from "../../contexts/AuthContext";
import PrivateRoute from "../ProtectedRoutes/PrivateRoute";

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
