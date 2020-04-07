import React from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthContext";

export default () => {
  const { register, errors, handleSubmit } = useForm();

  return (
    <AuthContext.Consumer>
      {(authContext) => {
        const { submitLoginForm } = authContext;

        return (
          <section>
            <form onSubmit={handleSubmit(submitLoginForm)}>
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
                <button type="submit">Register</button>
              </div>
            </form>
          </section>
        );
      }}
    </AuthContext.Consumer>
  );
};

/*   const submitLoginForm = (data, e) => {
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
      .then((results) => console.log(results))
      .catch((fetchErr) => console.error(`Fetch error: ${fetchErr}`));
  };
 */
