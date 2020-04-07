import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";

export default () => {
  const [regState, setRegState] = useState({
    isRegistered: false,
    user: {},
  });
  const { register, errors, watch, handleSubmit } = useForm();

  const submitForm = (data, e) => {
    e.preventDefault();

    // Create a new user from FORM input
    const newUser = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
    };

    // Send the new user to the Backend
    fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((results) =>
        setRegState({ isRegistered: true, user: results.user })
      )
      .catch((fetchErr) => console.error(`Register fetch sucked: ${fetchErr}`));
  };

  return regState.isRegistered ? (
    <Redirect to="/login" />
  ) : (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <label htmlFor="firstname">First Name</label>
          <br />
          <input
            type="text"
            name="firstname"
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
            ref={register({ required: true })}
          />
          <br />
          {errors.lastname && "Last Name is required!"}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            ref={register({
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
          />
          <br />
          {errors.email && "Email format is wrong!"}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            ref={register({ required: true, minLength: 3 })}
          />
          <br />
          {errors.password &&
            "Password needs to be at least 3 characters long!"}
        </div>
        <div>
          <label htmlFor="verifyPassword">Confirm Password</label>
          <br />
          <input
            type="password"
            name="verifyPassword"
            ref={register({
              required: true,
              validate: (value) => value === watch("password"),
            })}
          />
          <br />
          {errors.verifyPassword && "Passwords don't match!"}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
