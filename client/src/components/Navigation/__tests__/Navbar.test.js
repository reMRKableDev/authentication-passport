import React from "react";
import Navbar from "../Navbar";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Link } from "react-router-dom";
import { StaticRouter } from "react-router";
import { validateSnapshot } from "../../../utils/testing/validators";

const shallowComponent = () => shallow(<Navbar />);
const wrapper = shallowComponent();

describe("Unit Tests for component snapshots", () => {
  test("shallow render", () => {
    validateSnapshot(wrapper);
  });

  test("Link matches home snapshot", () => {
    const context = {};
    const component = renderer.create(
      <StaticRouter location="/" context={context}>
        <Link to="/" />
      </StaticRouter>
    );

    let tree = component.toJSON();
    validateSnapshot(tree);
  });

  test("Link matches login snapshot", () => {
    const context = {};
    const component = renderer.create(
      <StaticRouter location="/login" context={context}>
        <Link to="/login" />
      </StaticRouter>
    );

    let tree = component.toJSON();
    validateSnapshot(tree);
  });

  test("Link matches profile snapshot", () => {
    const context = {};
    const component = renderer.create(
      <StaticRouter location="/profile" context={context}>
        <Link to="/profile" />
      </StaticRouter>
    );

    let tree = component.toJSON();
    validateSnapshot(tree);
  });
});
