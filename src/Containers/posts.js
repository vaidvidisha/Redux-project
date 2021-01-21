import React ,{useEffect} from 'react';
import { connect } from 'react-redux';
import {loadPosts} from "../Actions/posts";
import Posts from '../Components/Posts/index';

const PostsContainer = props =>{    
return(
    <Posts {...props} />
    )
}

const mapStateToProps = state => ({
    posts: state.Posts.posts
  });

const mapDispatchToProps = dispatch => ({
    loadPosts: () => {
        dispatch(loadPosts());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);