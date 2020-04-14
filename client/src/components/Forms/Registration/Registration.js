import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import {
  StyledFormSection,
  StyledForm,
  StyledDiv,
  StyledInput,
  StyledLabel,
  StyledError,
  StyledButton,
} from "../Styled";

/**
 *
 * Form component for registration
 *
 * @function
 * @implements {AuthContext}
 * @returns {React.Component}
 *
 */
export default () => {
  const { redirectLogin, submitRegistrationForm, isAuthenticated } = useContext(
    AuthContext
  );
  const { register, errors, watch, handleSubmit } = useForm();

  const redirectToLogin = () => <Redirect to="/login" />;

  return redirectLogin || isAuthenticated ? (
    redirectToLogin()
  ) : (
    <StyledFormSection data-testid="test-formSection">
      <h2 data-testid="test-formTitle">Register New Account!</h2>
      <p data-testid="test-formDescription">
        Please fill in your information to create your account
      </p>
      <StyledForm
        onSubmit={handleSubmit(submitRegistrationForm)}
        data-testid="test-form"
      >
        <StyledDiv>
          <StyledLabel htmlFor="firstname" data-testid="test-label">
            First Name
          </StyledLabel>
          <StyledInput
            type="text"
            name="firstname"
            placeholder="Enter your first name"
            ref={register({ required: true })}
            data-testid="test-firstname"
          />
          {errors.firstname && (
            <StyledError>First Name is required!</StyledError>
          )}
        </StyledDiv>

        <StyledDiv>
          <StyledLabel htmlFor="lastname" data-testid="test-label">
            Last Name
          </StyledLabel>
          <StyledInput
            type="text"
            name="lastname"
            placeholder="Enter your last name"
            ref={register({ required: true })}
            data-testid="test-lastname"
          />
          {errors.lastname && <StyledError>Last Name is required!</StyledError>}
        </StyledDiv>

        <StyledDiv>
          <StyledLabel htmlFor="email" data-testid="test-label">
            Email
          </StyledLabel>
          <StyledInput
            type="email"
            name="email"
            placeholder="Enter your email"
            ref={register({
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            })}
            data-testid="test-email"
          />
          {errors.email && errors.email.type === "required" && (
            <StyledError>Email is required!</StyledError>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <StyledError>Email format is wrong!</StyledError>
          )}
        </StyledDiv>

        <StyledDiv>
          <StyledLabel htmlFor="password" data-testid="test-label">
            Password
          </StyledLabel>
          <StyledInput
            type="password"
            name="password"
            placeholder="Enter your password"
            ref={register({ required: true, minLength: 6 })}
            data-testid="test-password"
          />
          {errors.password && (
            <StyledError>
              Password needs to be at least 6 characters long!
            </StyledError>
          )}
        </StyledDiv>

        <StyledDiv>
          <StyledLabel htmlFor="verifyPassword" data-testid="test-label">
            Verify Password
          </StyledLabel>
          <StyledInput
            type="password"
            name="verifyPassword"
            placeholder="Verify your password"
            ref={register({
              required: true,
              validate: (value) => value === watch("password"),
            })}
            data-testid="test-verifyPassword"
          />
          {errors.verifyPassword && (
            <StyledError>Passwords don't match!</StyledError>
          )}
        </StyledDiv>

        <StyledDiv>
          <StyledButton type="submit" data-testid="test-submit">
            Register
          </StyledButton>
        </StyledDiv>
      </StyledForm>
    </StyledFormSection>
  );
};
