# React Client using Context API

The client consists of:

- `Login & Registration` forms created using [react-form-hooks](https://react-hook-form.com/).
  - Upon submission, each form fetches data from respective route in the backend.
- `Navbar` for ease of moving between components.
- A custom `PrivateRoute` that can keep components protected.
- A protected `Profile` that is only accessible to users who have logged in.
- `AuthContext` that handles application state and functions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and can be run with all the recommended instructions.
