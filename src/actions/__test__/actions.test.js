import configureMockStore from "redux-mock-store";
import reduxPromise from "redux-promise";
import thunk from "redux-thunk";
import moxios from "moxios";
import {
  saveComment,
  fetchCommentsFromRemote,
  fetchCommentsFromRemoteThunk
} from "../../actions/index";
import { SAVE_COMMENTS, FETCH_COMMENTS } from "../../actions/types";

// const middlewares = [reduxPromise];
const middlewares = [thunk, reduxPromise];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ comments: [] });

it("returns the correct type and payload", () => {
  const response = saveComment("This is new comment");
  expect(response.type).toEqual(SAVE_COMMENTS);
});

describe("remote comments", () => {
  beforeEach(() => {
    moxios.install();
    moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
      status: 200,
      response: ["first comment", "second comment"]
    });
  });
  afterEach(() => {
    store.clearActions();
    moxios.uninstall();
  });
  it("fetch comments from remote with thunk", done => {
    store.dispatch(fetchCommentsFromRemoteThunk()).then(() => {
      expect(store.getActions()[0].type).toEqual(FETCH_COMMENTS);
      done();
    });
  });
  it("fetch comments from remote with redux promise", done => {
    store.dispatch(fetchCommentsFromRemote()).then(() => {
      expect(store.getActions()[0].type).toEqual(FETCH_COMMENTS);
      done();
    });
  });
});
