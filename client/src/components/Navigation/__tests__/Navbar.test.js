import React from "react";
import Navbar from "../Navbar";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Link } from "react-router-dom";
import { StaticRouter } from "react-router";

const shallowComponent = () => shallow(<Navbar />);
const wrapper = shallowComponent();

test("shallow render", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Link matches home snapshot", () => {
  const context = {};
  const component = renderer.create(
    <StaticRouter location="/" context={context}>
      <Link to="/" />
    </StaticRouter>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Link matches login snapshot", () => {
  const context = {};
  const component = renderer.create(
    <StaticRouter location="/login" context={context}>
      <Link to="/login" />
    </StaticRouter>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Link matches loprofilegin snapshot", () => {
  const context = {};
  const component = renderer.create(
    <StaticRouter location="/profile" context={context}>
      <Link to="/profile" />
    </StaticRouter>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
