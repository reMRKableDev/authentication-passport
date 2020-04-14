import React from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import { render } from "@testing-library/react";
import {
  validateTruthiness,
  validateMultipleTextValues,
  validateEquality,
} from "../../../../utils/testing/validators";
import { changeInputValue } from "../../../../helpers/testingLib";
import Registration from "../Registration";

describe("Unit Tests for form elements and value validity ", () => {
  test("should render form with all elements", () => {
    const { queryByTestId, queryAllByTestId } = render(
      <AuthContext.Provider value={{}}>
        <Registration />
      </AuthContext.Provider>
    );

    validateTruthiness(queryAllByTestId("test-label"));
    validateTruthiness(queryByTestId("test-formSection"));
    validateTruthiness(queryByTestId("test-formTitle"));
    validateTruthiness(queryByTestId("test-formDescription"));
    validateTruthiness(queryByTestId("test-form"));
    validateTruthiness(queryByTestId("test-firstname"));
    validateTruthiness(queryByTestId("test-lastname"));
    validateTruthiness(queryByTestId("test-email"));
    validateTruthiness(queryByTestId("test-password"));
    validateTruthiness(queryByTestId("test-verifyPassword"));
  });

  test("should render correct text values for labels", () => {
    const { queryByText } = render(
      <AuthContext.Provider value={{}}>
        <Registration />
      </AuthContext.Provider>
    );

    const expectedValuesList = [
      "Register New Account!",
      "Please fill in your information to create your account",
      "First Name",
      "Last Name",
      "Email",
      "Password",
      "Verify Password",
      "Register",
    ];

    validateMultipleTextValues(expectedValuesList, queryByText);
  });

  test("should display correct text values for placeholders", () => {
    const { getByPlaceholderText } = render(
      <AuthContext.Provider value={{}}>
        <Registration />
      </AuthContext.Provider>
    );

    const expectedPlaceholdersList = [
      "Enter your first name",
      "Enter your last name",
      "Enter your email",
      "Enter your password",
      "Verify your password",
    ];

    validateMultipleTextValues(expectedPlaceholdersList, getByPlaceholderText);
  });
});

describe("Unit Tests for altering form input values", () => {
  const inputValues = {
    firstname: "Malcolm",
    lastname: "Kente",
    email: "malcolm.kente@remrkabledev.com",
    password: "dummyP@$$w0rd",
  };

  test("should correctly change First Name value", () => {
    const { getByTestId } = render(
      <AuthContext.Provider value={{}}>
        <Registration />
      </AuthContext.Provider>
    );

    const firstNameTestId = getByTestId("test-firstname");

    changeInputValue(inputValues.firstname, "test-firstname", getByTestId).then(
      () => {
        validateTruthiness(firstNameTestId.value);
        validateEquality(firstNameTestId.value, inputValues.firstname);
      }
    );
  });

  test("should correctly change Last Name value", () => {
    const { getByTestId } = render(
      <AuthContext.Provider value={{}}>
        <Registration />
      </AuthContext.Provider>
    );

    const lastNameTestId = getByTestId("test-lastname");

    changeInputValue(inputValues.lastname, "test-lastname", getByTestId).then(
      () => {
        validateTruthiness(lastNameTestId.value);
        validateEquality(lastNameTestId.value, inputValues.lastname);
      }
    );
  });

  test("should correctly change Email value", () => {
    const { getByTestId } = render(
      <AuthContext.Provider value={{}}>
        <Registration />
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
        <Registration />
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

  test("should correctly change verify Password value", () => {
    const { getByTestId } = render(
      <AuthContext.Provider value={{}}>
        <Registration />
      </AuthContext.Provider>
    );

    const verifyPasswordTestId = getByTestId("test-verifyPassword");

    changeInputValue(
      inputValues.password,
      "test-verifyPassword",
      getByTestId
    ).then(() => {
      validateTruthiness(verifyPasswordTestId.value);
      validateEquality(verifyPasswordTestId.value, inputValues.password);
    });
  });
});
