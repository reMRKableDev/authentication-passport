import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

export default () => {
  const { redirectLogin, submitRegistrationForm, isAuthenticated } = useContext(
    AuthContext
  );
  const { register, errors, watch, handleSubmit } = useForm();

  const redirectToLogin = () => <Redirect to="/login" />;

  return redirectLogin || isAuthenticated ? (
    redirectToLogin()
  ) : (
    <section data-testid="test-formSection">
      <h2 data-testid="test-formTitle">Register New Account!</h2>
      <p data-testid="test-formDescription">
        Please fill in your information to create your account
      </p>
      <form
        onSubmit={handleSubmit(submitRegistrationForm)}
        data-testid="test-form"
      >
        <div>
          <label htmlFor="firstname" data-testid="test-label">
            First Name
          </label>
          <br />
          <input
            type="text"
            name="firstname"
            placeholder="Enter your first name"
            ref={register({ required: true })}
            data-testid="test-firstname"
          />
          <br />
          {errors.firstname && <span>First Name is required!</span>}
        </div>
        <div>
          <label htmlFor="lastname" data-testid="test-label">
            Last Name
          </label>
          <br />
          <input
            type="text"
            name="lastname"
            placeholder="Enter your last name"
            ref={register({ required: true })}
            data-testid="test-lastname"
          />
          <br />
          {errors.lastname && <span>Last Name is required!</span>}
        </div>
        <div>
          <label htmlFor="email" data-testid="test-label">
            Email
          </label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            ref={register({
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            })}
            data-testid="test-email"
          />
          <br />
          {errors.email && errors.email.type === "required" && (
            <span>Email is required!</span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span>Email format is wrong!</span>
          )}
        </div>
        <div>
          <label htmlFor="password" data-testid="test-label">
            Password
          </label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            ref={register({ required: true, minLength: 6 })}
            data-testid="test-password"
          />
          <br />
          {errors.password &&
            "Password needs to be at least 6 characters long!"}
        </div>
        <div>
          <label htmlFor="verifyPassword" data-testid="test-label">
            Verify Password
          </label>
          <br />
          <input
            type="password"
            name="verifyPassword"
            placeholder="Verify your password"
            ref={register({
              required: true,
              validate: (value) => value === watch("password"),
            })}
            data-testid="test-verifyPassword"
          />
          <br />
          {errors.verifyPassword && "Passwords don't match!"}
        </div>
        <div>
          <button type="submit" data-testid="test-submit">
            Register
          </button>
        </div>
      </form>
    </section>
  );
};
