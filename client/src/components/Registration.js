import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import AuthContextProvider, { AuthContext } from "../contexts/AuthContext";

export default () => {
  const { register, errors, watch, handleSubmit } = useForm();

  return (
    <AuthContext.Consumer>
      {(authContext) => {
        const { isRegistered, submitRegistrationForm } = authContext;

        return isRegistered ? (
          <Redirect to="/login" />
        ) : (
          <section>
            <form onSubmit={handleSubmit(submitRegistrationForm)}>
              <div>
                <label htmlFor="firstname">First Name</label> <br />
                <input
                  type="text"
                  name="firstname"
                  placehoder="Enter your first name"
                  ref={register({ required: true })}
                />
                <br />
                {errors.firstname && "First Name is required!"}
              </div>
              <div>
                <label htmlFor="lastname">Last Name</label> <br />
                <input
                  type="text"
                  name="lastname"
                  placehoder="Enter your last name"
                  ref={register({ required: true })}
                />
                <br />
                {errors.lastname && "Last Name is required!"}
              </div>
              <div>
                <label htmlFor="email">Email</label> <br />
                <input
                  type="email"
                  name="email"
                  placehoder="Enter your email"
                  ref={register({
                    required: true,
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  })}
                />
                <br />
                {errors.email && "Email format is wrong!"}
              </div>
              <div>
                <label htmlFor="password">Password</label> <br />
                <input
                  type="password"
                  name="password"
                  placehoder="Enter your password"
                  ref={register({ required: true, minLength: 6 })}
                />
                <br />
                {errors.password &&
                  "Password needs to be atleast 6 characters long!"}
              </div>
              <div>
                <label htmlFor="verifyPassword">Verify Password</label> <br />
                <input
                  type="password"
                  name="verifyPassword"
                  placehoder="Verify your password"
                  ref={register({
                    required: true,
                    validate: (value) => value === watch("password"),
                  })}
                />
                <br />
                {errors.verifyPassword && "Passwords don't match!"}
              </div>
              <div>
                <button type="submit">Register</button>
              </div>
            </form>
          </section>
        );
      }}
    </AuthContext.Consumer>
  );
};
