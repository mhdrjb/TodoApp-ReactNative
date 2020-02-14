import {AsyncStorage} from 'react-native';

export const setInit = result => {
  return {type: 'INIT', payload: result};
};

export const getAsyncStorage = () => {
  return async dispatch => {
    await AsyncStorage.getItem('todo').then(todos => {
      dispatch(setInit(JSON.parse(todos)));
    });
  };
};
