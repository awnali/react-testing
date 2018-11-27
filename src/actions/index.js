import { SAVE_COMMENTS, FETCH_COMMENTS } from "./types";
import axios from "axios";

export const saveComment = comment => {
  return {
    type: SAVE_COMMENTS,
    payload: comment
  };
};

export const fetchCommentsFromRemote = async () => {
  const comments = await axios.get(
    "http://jsonplaceholder.typicode.com/comments"
  );
  return {
    type: FETCH_COMMENTS,
    payload: comments
  };
};

export const fetchCommentsFromRemoteThunk = () => {
  return dispatch => {
    return axios({ url: "http://jsonplaceholder.typicode.com/comments" }).then(
      data =>
        dispatch({
          type: FETCH_COMMENTS,
          payload: data
        })
    );
  };
};
