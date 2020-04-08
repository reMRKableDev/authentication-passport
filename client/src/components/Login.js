import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default () => {
  const { submitLoginForm, redirectProfile, message } = useContext(AuthContext);
  const { register, errors, handleSubmit } = useForm();

  const redirectToProfile = () => {
    return <Redirect to="/profile" />;
  };

  return redirectProfile ? (
    redirectToProfile()
  ) : (
    <section>
      {message && <span>{message}</span>}
      <h2>Log In To Your Profile!</h2>
      <p>Enter your account details to gain access to your profile!</p>
      <form onSubmit={handleSubmit(submitLoginForm)}>
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
          {errors.password && "Password needs to be atleast 6 characters long!"}
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </section>
  );
};
