import * as actionTypes from "../GlobalConstants/actionConstants";

const Posts = (state = {
    posts: [],
    comments: [],
    authors: []
} , action) => {
    switch (action.type) {
        case actionTypes.SET_POSTS:
            state = {
                ...state,
                posts: action.response.data
                };
                console.log("posts reducer",action.response.data)
            break;
        case actionTypes.SET_COMMENTS:
            state = {
                ...state,
                comments: action.response.data
                };
            break;
        case actionTypes.SET_AUTHORS:
            state = {
                ...state,
                authors: action.response.data
                };
            break;
        default:
            return state;
    }
    return state;

};

export default Posts;
