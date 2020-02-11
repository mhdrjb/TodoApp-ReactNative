import React, {Component} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {Button, Icon} from 'native-base';
import {connect} from 'react-redux';

class TodoList extends Component {
  render() {
    const {todos, deleteTodo, completeTodo} = this.props;
    const inCompletedTodos = todos.filter(todo => !todo.completed);
    return (
      <ScrollView>
        {inCompletedTodos.length > 0 ? (
          inCompletedTodos.map(todo => {
            return (
              <View
                key={todo.id}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: 'gray',
                  margin: 5,
                }}>
                <Button
                  danger
                  onPress={() => {
                    deleteTodo(todo.id);
                  }}>
                  <Icon active name="trash" />
                </Button>
                <Text
                  style={{
                    fontFamily: 'Yekan',
                    fontSize: 25,
                    textAlign: 'center',
                    color: 'white',
                  }}>
                  {todo.text}
                </Text>
                <Button
                  success
                  onPress={() => {
                    completeTodo(todo.id);
                  }}>
                  <Icon type="Entypo" active name="check" />
                </Button>
              </View>
            );
          })
        ) : (
          <View
            style={{
              backgroundColor: 'lightblue',
              width: '100%',
              alignItems: 'center',
            }}>
            <Text style={{fontFamily: 'Far_khodkar', fontSize: 25}}>
              امروز کاری برای انجام دادن نداری
            </Text>
          </View>
        )}
      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({
  todos: state.todosReducer,
});
const mapDispatchToProps = dispatch => ({
  deleteTodo: id => dispatch({type: 'DELETE_TODO', payload: id}),
  completeTodo: id => dispatch({type: 'TODO_COMPLETE', payload: id}),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
