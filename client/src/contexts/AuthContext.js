import React, { createContext, Component } from "react";

export const AuthContext = createContext();

export default class AuthContextProvider extends Component {
  state = {
    isRegistered: false,
    isLoggedIn: false,
    user: {},
    token: "",
  };

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
      .then(() => this.setState({ isRegistered: true }))
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
      .then((results) =>
        this.setState({ user: results.secureUser, token: results.token })
      )
      .catch((fetchErr) => console.error(`Fetch error: ${fetchErr}`));
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          submitRegistrationForm: this.submitRegistrationForm,
          submitLoginForm: this.submitLoginForm,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
