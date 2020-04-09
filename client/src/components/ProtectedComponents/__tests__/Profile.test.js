import React from "react";
import Profile from "../Profile";
import { shallow } from "enzyme";

const shallowComponent = () => shallow(<Profile />);

test("shallow rendering", () => {
    const wrapper = shallowComponent();
    expect(wrapper).toMatchSnapshot();
  });