import React, { createContext, Component } from "react";
import { postRoute } from "../helpers/apiFetcher";
import { initialState } from "./InitialState";

export const AuthContext = createContext();
export default class AuthContextProvider extends Component {
  state = initialState;

  submitRegistrationForm = (data, e) => {
    e.preventDefault();

    const newUser = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
    };

    postRoute("/register", newUser)
      .then((results) =>
        this.setState({ redirectLogin: true, message: results.message })
      )
      .catch((postError) =>
        console.error(`Error when running POST to api: ${postError}`)
      );
  };

  submitLoginForm = (data, e) => {
    e.preventDefault();

    const user = {
      email: data.email,
      password: data.password,
    };

    postRoute("/login", user)
      .then((results) => {
        this.setState({
          user: results.secureUser,
          token: results.token,
          redirectProfile: true,
        });
      })
      .catch((postError) =>
        console.error(`Error when running POST to api: ${postError}`)
      );
  };

  authenticateUser = (isTokenVerified) => {
    this.setState({
      ...this.state,
      isAuthenticated: isTokenVerified,
      message: "You've successfully logged into your profile!",
    });
  };

  logoutUser = () => {
    this.setState(initialState);
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          submitRegistrationForm: this.submitRegistrationForm,
          submitLoginForm: this.submitLoginForm,
          authenticateUser: this.authenticateUser,
          logoutUser: this.logoutUser,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
