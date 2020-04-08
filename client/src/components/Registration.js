import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default () => {
  const { redirectLogin, submitRegistrationForm, isAuthenticated } = useContext(
    AuthContext
  );
  const { register, errors, watch, handleSubmit } = useForm();

  const redirectToLogin = () => <Redirect to="/login" />;

  return redirectLogin || isAuthenticated ? (
    redirectToLogin()
  ) : (
    <section>
      <h2>Register New Account!</h2>
      <p>Please fill in your information to create your account</p>
      <form onSubmit={handleSubmit(submitRegistrationForm)}>
        <div>
          <label htmlFor="firstname">First Name</label> <br />
          <input
            type="text"
            name="firstname"
            placeholder="Enter your first name"
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
            placeholder="Enter your last name"
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
            placeholder="Enter your email"
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
            placeholder="Enter your password"
            ref={register({ required: true, minLength: 6 })}
          />
          <br />
          {errors.password && "Password needs to be at least 6 characters long!"}
        </div>
        <div>
          <label htmlFor="verifyPassword">Verify Password</label> <br />
          <input
            type="password"
            name="verifyPassword"
            placeholder="Verify your password"
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
};
