import popUpReducer from './popup';
import todosReducer from './todos';
import {combineReducers} from 'redux';

export default combineReducers({
  popUpReducer,
  todosReducer,
});
