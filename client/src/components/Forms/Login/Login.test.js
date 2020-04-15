import React from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { render } from "@testing-library/react";
import {
  validateTruthiness,
  validateMultipleTextValues,
  validateEquality,
} from "../../../utils/testing/validators";
import { changeInputValue } from "../../../helpers/testingLib";
import Login from "./Login";

describe("Unit Tests for form elements and value validity ", () => {
  test("should render form with all elements", () => {
    const { queryByTestId, queryAllByTestId } = render(
      <AuthContext.Provider value={{}}>
        <Login />
      </AuthContext.Provider>
    );

    validateTruthiness(queryAllByTestId("test-label"));
    validateTruthiness(queryByTestId("test-formSection"));
    validateTruthiness(queryByTestId("test-formTitle"));
    validateTruthiness(queryByTestId("test-formDescription"));
    validateTruthiness(queryByTestId("test-form"));
    validateTruthiness(queryByTestId("test-email"));
    validateTruthiness(queryByTestId("test-password"));
  });

  test("should render correct text values for labels", () => {
    const { queryByText } = render(
      <AuthContext.Provider value={{}}>
        <Login />
      </AuthContext.Provider>
    );

    const expectedValuesList = [
      "Log In To Your Profile!",
      "Enter your account details to gain access to your profile!",
      "Email",
      "Password",
      "Login",
    ];

    validateMultipleTextValues(expectedValuesList, queryByText);
  });

  test("should display correct text values for placeholders", () => {
    const { getByPlaceholderText } = render(
      <AuthContext.Provider value={{}}>
        <Login />
      </AuthContext.Provider>
    );

    const expectedPlaceholdersList = [
      "Enter your email",
      "Enter your password",
    ];

    validateMultipleTextValues(expectedPlaceholdersList, getByPlaceholderText);
  });
});

describe("Unit Tests for altering form input values", () => {
  const inputValues = {
    email: "malcolm.kente@remrkabledev.com",
    password: "dummyP@$$w0rd",
  };

  test("should correctly change Email value", () => {
    const { getByTestId } = render(
      <AuthContext.Provider value={{}}>
        <Login />
      </AuthContext.Provider>
    );

    const emailTestId = getByTestId("test-email");

    changeInputValue(inputValues.email, "test-email", getByTestId).then(() => {
      validateTruthiness(emailTestId.value);
      validateEquality(emailTestId.value, inputValues.email);
    });
  });

  test("should correctly change Password value", () => {
    const { getByTestId } = render(
      <AuthContext.Provider value={{}}>
        <Login />
      </AuthContext.Provider>
    );

    const passwordTestId = getByTestId("test-password");

    changeInputValue(inputValues.password, "test-password", getByTestId).then(
      () => {
        validateTruthiness(passwordTestId.value);
        validateEquality(passwordTestId.value, inputValues.password);
      }
    );
  });
});
