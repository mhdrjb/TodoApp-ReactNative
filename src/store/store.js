import {createStore, applyMiddleware} from 'redux';
import combineReducers from './../reducers/index';
import thunk from 'redux-thunk';
import {getAsyncStorage} from '../actions/todoActions';

export const store = createStore(combineReducers, applyMiddleware(thunk));

store.dispatch(getAsyncStorage());
