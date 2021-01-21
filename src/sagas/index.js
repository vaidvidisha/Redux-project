import {takeEvery , all , fork} from 'redux-saga/effects';

import * as actionTypes from '../GlobalConstants/actionConstants';
import {loadCommentsSaga , loadAuthorsSaga , loadPostsSaga} from './saga';

function* watchPosts(){
    yield takeEvery(actionTypes.INITIATE_GET_POSTS , loadPostsSaga)
}

function* watchComments(){
    yield takeEvery(actionTypes.INITIATE_GET_COMMENTS , loadCommentsSaga)
}

function* watchAuthors(){
    yield takeEvery(actionTypes.INITIATE_GET_AUTHORS , loadAuthorsSaga)
}

export default function* rootSaga(){
    yield all(
        [
            fork(watchPosts),
            fork(watchComments),
            fork(watchAuthors),
        ]
    )
}