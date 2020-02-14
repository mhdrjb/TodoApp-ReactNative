import {AsyncStorage} from 'react-native';

const initialState = [];
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT':
      return [...action.payload];
    case 'ADD_TODO':
      let todo = [...state, {text: action.payload, completed: false}];
      AsyncStorage.setItem('todo', JSON.stringify(todo));
      return todo;
    case 'TODO_COMPLETE':
      AsyncStorage.getItem('todo')
        .then(data => {
          let todos = JSON.parse(data);
          return todos.map(todo => {
            if (todo.text === action.payload) {
              return {...todo, completed: !todo.completed};
            } else {
              return todo;
            }
          });
        })
        .then(todos => {
          AsyncStorage.setItem('todo', JSON.stringify(todos));
        });
      return state.map(todo => {
        if (todo.text === action.payload) {
          return {...todo, completed: !todo.completed};
        } else {
          return todo;
        }
      });
    case 'DELETE_TODO':
      AsyncStorage.getItem('todo')
        .then(data => {
          let todos = JSON.parse(data);
          return todos.filter(todo => todo.text !== action.payload);
        })
        .then(todos => {
          AsyncStorage.setItem('todo', JSON.stringify(todos));
          console.log(todos);
        });
      return state.filter(todo => todo.text !== action.payload);

    default:
      return state;
  }
};
export default todosReducer;
