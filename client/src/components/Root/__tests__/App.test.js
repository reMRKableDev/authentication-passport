import React from "react";
import App from "../App";
import { Route } from "react-router";
import { shallow } from "enzyme";
import Registration from "../../Forms/Registration";
import Login from "../../Forms/Login";

const shallowComponent = () => shallow(<App />); // Real unit test (isolation, no children render)
const wrapper = shallowComponent();

describe("Unit tests for App component", () => {
  test("shallow render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test(".App styling class exists", () => {
    expect(wrapper.find(".App").hasClass("App")).toBe(true);
  });

  test("public routes rendering the correct components", () => {
    const routesEndpoints = wrapper
      .find(Route)
      .reduce((routesEndpoints, route) => {
        const routesProps = route.props(); // Gets the routesProps from the routes
        routesEndpoints[routesProps.path] = routesProps.component;
        return routesEndpoints;
      }, {});

    expect(routesEndpoints["/"]).toBe(Registration);
    expect(routesEndpoints["/login"]).toBe(Login);
  });
});
