import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, errors, handleSubmit } = useForm();

  const submitLogin = (data, e) => {
    e.preventDefault();

    const user = {
      email: data.email,
      password: data.password,
    };

    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((results) => console.log(results))
      .catch((loginErr) => console.error(`Log in Fetch sucked: ${loginErr}`));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitLogin)}>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Login;
