import { createStore, applyMiddleware,combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Posts from './posts';

import rootSaga from '../sagas/index'

const sagaMiddleware = createSagaMiddleware();
const AppReducer = combineReducers({
    Posts 
})
const store = createStore(AppReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default store;