import React from "react";
import ReactDom from "react-dom";
import { shallow } from "enzyme";
import CommentList from "../CommentList";

it("has comment box heading", () => {
  const wrapper = document.createElement("div");
  ReactDom.render(<CommentList />, wrapper);

  expect(wrapper.innerHTML).toContain("Comments:");
});
