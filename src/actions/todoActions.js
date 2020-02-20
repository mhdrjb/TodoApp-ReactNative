import AsyncStorage from '@react-native-community/async-storage';

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

export const addTodoAction = givenTodo => {
  return async (dispatch, getState) => {
    console.log(getState());
    let todo = [
      ...getState().todosReducer,
      {text: givenTodo, completed: false},
    ];
    await AsyncStorage.setItem('todo', JSON.stringify(todo));
    dispatch({type: 'ADD_TODO', payload: todo});
  };
};

export const todoCompleteAction = givenTodo => {
  return async dispatch => {
    await AsyncStorage.getItem('todo')
      .then(data => {
        let todos = JSON.parse(data);
        console.log(todos);
        return todos.map(todo => {
          if (todo.text === givenTodo) {
            return {...todo, completed: !todo.completed};
          } else {
            return todo;
          }
        });
      })
      .then(async todos => {
        await AsyncStorage.setItem('todo', JSON.stringify(todos));
        dispatch({type: 'TODO_COMPLETE', payload: todos});
      });
  };
};

export const deleteTodoAction = givenTodo => {
  return async dispatch => {
    await AsyncStorage.getItem('todo')
      .then(data => {
        let todos = JSON.parse(data);
        console.log(todos);
        return todos.filter(todo => todo.text !== givenTodo);
      })
      .then(todos => {
        AsyncStorage.setItem('todo', JSON.stringify(todos));
        console.log(todos);
        dispatch({type: 'DELETE_TODO', payload: todos});
      });
  };
};
export const showDialog = () => {
  return async (dispatch, getState) => {
    let showpopUp = {
      ...getState().popUpReducer,
      showDialog: !getState().popUpReducer.showDialog,
    };
    await dispatch({type: 'SHOWDIALOG', payload: showpopUp});
  };
};
