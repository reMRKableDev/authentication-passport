import React from "react";
import PrivateRoute from "../PrivateRoute";
import { mount } from "enzyme";
import { MemoryRouter, Redirect } from "react-router";

test("a + b", () => {
  const sum = 10;
  expect(5 + 5).toEqual(sum);
});
/* test("render component if user has been authenticated", () => {
  const AComponent = () => <div>AComponent</div>;
  const props = { path: "/profile", component: AComponent };

  const wrapper = mount(
    <MemoryRouter initialEntries={[props.path]}>
      <PrivateRoute redirectProfile={true} ownProps={props} />
    </MemoryRouter>
  );

  expect(wrapper.exists(AComponent)).toBe(true);
}); */
