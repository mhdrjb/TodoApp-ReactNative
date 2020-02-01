let fakeID = 0;
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {id: fakeID++, Text: action.payload, completed: false}];
    case 'TODO_COMPLETE':
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {...todo, completed: !todo.completed};
        } else {
          return todo;
        }
      });
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);

    default:
      return state;
  }
};
export default todos;
