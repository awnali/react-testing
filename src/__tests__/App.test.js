import React from "react";
import { mount } from "enzyme";
import Provider from "../Provider";
import App from "../App";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";

it("has Comment Box and Comment List components", () => {
  const wrapper = mount(
    <Provider>
      <App />
    </Provider>
  );
  expect(wrapper.find(CommentBox).length).toEqual(1);
  expect(wrapper.find(CommentList).length).toEqual(1);
});
