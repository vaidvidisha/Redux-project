import React from 'react';
import { connect } from 'react-redux';
import {loadComments} from "../Actions/posts";
import Comments from '../Components/Comments/index';

const CommentsContainer = props =>{
return(
    <Comments {...props} />
    )
}

const mapStateToProps = state => ({
    comments: state.Posts.comments
  });

const mapDispatchToProps = dispatch => ({
    
    loadAllComments: () => {
        dispatch(loadComments());
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);