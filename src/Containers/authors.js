import React from 'react';
import { connect } from 'react-redux';
import {loadAuthors} from "../Actions/posts";
import Authors from '../Components/Authors/index';

const AuthorsContainer = props =>{
return(
    <Authors {...props} />
    )
}

const mapStateToProps = state => ({
    authors: state.Posts.authors
  });

const mapDispatchToProps = dispatch => ({
    
    loadAuthors: () => {
        dispatch(loadAuthors());
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(AuthorsContainer);