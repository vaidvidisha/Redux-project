import {call , put} from 'redux-saga/effects';
import * as actionTypes from '../GlobalConstants/actionConstants';
import axios from 'axios';

export function* loadCommentsSaga(){
    try{
        const response = yield call(axios.get , 'http://jsonplaceholder.typicode.com/comments');
          yield put({
            type: actionTypes.SET_COMMENTS,
            response
          });
    }catch(error){
        console.log(error);
    }
}

export function* loadAuthorsSaga(){
    try{
        const response = yield call(axios.get , 'http://jsonplaceholder.typicode.com/users');
          yield put({
            type: actionTypes.SET_AUTHORS,
            response
          });
    }catch(error){
        console.log(error);
    }
}

export function* loadPostsSaga(){
    try{
        const response = yield call(axios.get , 'http://jsonplaceholder.typicode.com/posts');
          yield put({
            type: actionTypes.SET_POSTS,
            response
          });
    }catch(error){
        console.log(error);
    }
}