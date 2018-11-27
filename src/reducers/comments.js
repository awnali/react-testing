import { SAVE_COMMENTS, FETCH_COMMENTS } from "../actions/types";
export default (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENTS:
      return [...state, action.payload];
    case FETCH_COMMENTS:
      return action.payload.data.map(comment => comment.name);
    default:
      return state;
  }
};
