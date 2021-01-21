import * as actionTypes from '../GlobalConstants/actionConstants';

// Action for load masters in listing view.
export function loadPosts() {
  return {
    type: actionTypes.INITIATE_GET_POSTS,
  };
}

export function loadComments() {
    return {
      type: actionTypes.INITIATE_GET_COMMENTS,
    };
}

export function loadAuthors() {
    return {
      type: actionTypes.INITIATE_GET_AUTHORS,
    };
}