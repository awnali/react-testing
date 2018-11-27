import saveCommentsReducer from "../comments";
import { SAVE_COMMENTS } from "../../actions/types";

it("returns the correct state, when type is correct", () => {
  const action = { type: SAVE_COMMENTS, payload: "this is my comment" };
  const comments = saveCommentsReducer([], action);
  expect(comments.length).toEqual(1);
});

it("returns the correct state, when type is wrong", () => {
  const action = { type: "giberish", payload: "this is my comment" };
  const comments = saveCommentsReducer([], action);
  expect(comments.length).toEqual(0);
});
