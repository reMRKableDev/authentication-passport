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
 * Form component for logging in
 *
 * @function
 * @implements {AuthContext}
 * @returns {React.Component}
 *
 */
export default () => {
  const { submitLoginForm, redirectProfile, message } = useContext(AuthContext);
  const { register, errors, handleSubmit } = useForm();

  const redirectToProfile = () => {
    return <Redirect to="/profile" />;
  };

  return redirectProfile ? (
    redirectToProfile()
  ) : (
    <StyledFormSection data-testid="test-formSection">
      {message && <span>{message}</span>}
      <h2 data-testid="test-formTitle">Log In To Your Profile!</h2>
      <p data-testid="test-formDescription">
        Enter your account details to gain access to your profile!
      </p>
      <StyledForm
        onSubmit={handleSubmit(submitLoginForm)}
        data-testid="test-form"
      >
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
          <StyledButton type="submit" data-testid="test-submit">
            Login
          </StyledButton>
        </StyledDiv>
      </StyledForm>
    </StyledFormSection>
  );
};
