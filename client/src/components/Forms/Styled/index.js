import styled from "styled-components";

/**@component Styled components for form components */

export const StyledFormSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledForm = styled.form`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-bottom: 50px;
  padding: 25px;
  box-shadow: 0.2em 0.2em 0 0 tomato, inset 0.2em 0.2em 0 0 #333;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled.input`
  padding: 1em;
  margin: 1em 0;
  font-size: 0.8em;
  color: #333;
  border: none;
  border-bottom: 1px solid #333;
  outline: none;
  text-align: center;
  opacity: 0.6;
  width: 80%;
  &:hover {
    opacity: 1;
  }
`;

export const StyledLabel = styled.label`
  font-size: 0.8em;
  color: #333;
  margin: 0.2em 0.1em;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1em;
  text-decoration: underline;
`;

export const StyledError = styled.span`
  color: red;
  margin: 0.5em 0.1em;
  font-size: 0.7em;
`;

export const StyledButton = styled.button`
  background-color: tomato;
  font-size: 1em;
  text-transform: uppercase;
  color: #fff;
  padding: 0.25em 1em;
  border: 2px solid tomato;
  margin-top: 10px;
  outline: none;
  cursor: pointer;
  opacity: 0.8;
  width: 50%;
  &:hover {
    opacity: 1;
  }
`;
