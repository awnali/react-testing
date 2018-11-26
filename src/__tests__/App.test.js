import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";

it("has Comment Box and Comment List components", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(CommentBox).length).toEqual(1);
  expect(wrapper.find(CommentList).length).toEqual(1);
});
