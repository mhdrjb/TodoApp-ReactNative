import {createStore, applyMiddleware} from 'redux';
import combineReducers from './../reducers/index';
import thunk from 'redux-thunk';
import {AsyncStorage} from 'react-native';

export const store = createStore(combineReducers, applyMiddleware(thunk));

const setInit = result => {
  return {type: 'INIT', payload: result};
};

const getAsyncStorage = () => {
  return async dispatch => {
    await AsyncStorage.getItem('todo').then(todos => {
      dispatch(setInit(JSON.parse(todos)));
    });
  };
};

store.dispatch(getAsyncStorage());
