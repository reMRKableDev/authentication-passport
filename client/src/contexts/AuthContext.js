import React, { createContext, Component } from "react";

export const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  redirectProfile: false,
  redirectLogin: false,
  message: "",
  user: {},
  token: "",
};

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

    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((results) =>
        this.setState({ redirectLogin: true, message: results.message })
      )
      .catch((fetchErr) => console.error(`Fetch error: ${fetchErr}`));
  };

  submitLoginForm = (data, e) => {
    e.preventDefault();

    const user = {
      email: data.email,
      password: data.password,
    };

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((results) => {
        this.setState({
          user: results.secureUser,
          token: results.token,
          redirectProfile: true,
        });
      })
      .catch((fetchErr) => console.error(`Fetch error: ${fetchErr}`));
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
