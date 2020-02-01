import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {SwipeRow, Button, Icon, View, Text} from 'native-base';
import {connect} from 'react-redux';

class TodoList extends Component {
  render() {
    const {todos, deleteTodo, completeTodo} = this.props;
    return (
      <ScrollView>
        {todos.filter(todo => todo.completed !== true).length > 0 ? (
          todos.map(todo => {
            if (!todo.completed) {
              return (
                <SwipeRow
                  key={todo.id}
                  leftOpenValue={75}
                  rightOpenValue={-75}
                  style={{
                    backgroundColor: '#f4f4f4',
                  }}
                  right={
                    <Button
                      success
                      onPress={() => {
                        completeTodo(todo.id);
                      }}>
                      <Icon type="Entypo" active name="check" />
                    </Button>
                  }
                  body={
                    <View style={{flex: 1}}>
                      <Text
                        style={{
                          fontFamily: 'Yekan',
                          fontSize: 25,
                          textAlign: 'center',
                        }}>
                        {todo.text}
                      </Text>
                    </View>
                  }
                  left={
                    <Button
                      danger
                      onPress={() => {
                        deleteTodo(todo.id);
                      }}>
                      <Icon active name="trash" />
                    </Button>
                  }
                />
              );
            }
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
  todos: state,
});
const mapDispatchToProps = dispatch => ({
  deleteTodo: id => dispatch({type: 'DELETE_TODO', payload: id}),
  completeTodo: id => dispatch({type: 'TODO_COMPLETE', payload: id}),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
