/**
 * @function postRoute      Executes HTTP Method POST asynchronously.
 * @param {String} path     The intended api/url endpoint.
 * @param {Object} userObj  The object sent in the request body.
 */
const postRoute = async (path, userObj) => {
  const response = await fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObj),
  });

  const data = await response.json();

  return data;
};

/**
 * @function getRoute     Executes HTTP Method GET asynchronously.
 * @param {String} path   The intended api/url endpoint.
 * @param {String} token  JWT token passed in the request header
 */
const getRoute = async (path, token) => {
  const response = await fetch(path, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  const data = await response.json();

  return data;
};

export { postRoute, getRoute };
