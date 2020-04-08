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
