import React from "react";
import { initialState } from "../InitialState";

const dummyInitialState = {
  isAuthenticated: false,
  redirectProfile: false,
  redirectLogin: false,
  message: "",
  user: {},
  token: "",
};

test("object truthiness", () => {
  expect(initialState).toBeTruthy();
  expect(initialState).not.toBeNull();
  expect(initialState).not.toBeUndefined();
});

test("existing properties", () => {
  expect(initialState).toMatchObject(dummyInitialState);
});

test("non-existing properties", () => {
  expect(initialState).not.toHaveProperty("wildo");
  expect(initialState).not.toHaveProperty("test");
  expect(initialState).not.toHaveProperty("something");
});

test("boolean data type properties", () => {
  expect(typeof initialState.isAuthenticated).toEqual("boolean");
  expect(typeof initialState.redirectProfile).toEqual("boolean");
  expect(typeof initialState.redirectLogin).toEqual("boolean");
});

test("string data type properties", () => {
  expect(typeof initialState.token).toEqual("string");
  expect(typeof initialState.message).toEqual("string");
});

test("object data type properties", () => {
  expect(typeof initialState.user).toEqual("object");
});
