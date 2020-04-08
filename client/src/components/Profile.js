import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default ({ token, user }) => {
  const { logoutUser, authenticateUser, isAuthenticated } = useContext(
    AuthContext
  );

  useEffect(() => {
    fetch("/profile", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((results) => {
        authenticateUser(results.isTokenVerified);
      })
      .catch((profileErr) => console.error(`Profile error: ${profileErr}`));
  }, []);

  return isAuthenticated ? (
    <div>
      <h2>
        Welcome {user.firstname} {user.lastname}
      </h2>
      <p>Incase you forgot, your email is {user.email}</p>
      <p>This your protected profile page</p>
      <Link to="/" onClick={logoutUser}>
        Log Out
      </Link>
    </div>
  ) : (
    <p>Authenticating user!</p>
  );
};
