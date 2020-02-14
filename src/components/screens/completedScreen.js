import React, {Component} from 'react';
import {Icon, Button} from 'native-base';
import {View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';

class CompletedSc extends Component {
  render() {
    const {navigation, todos, deleteTodo} = this.props;
    const CompletedTodos = todos.filter(todo => todo.completed === true);
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: 'lightblue',
            paddingVertical: 10,
          }}>
          <View>
            <Icon
              type="FontAwesome"
              name="check-square-o"
              style={{fontSize: 30, color: 'orange'}}
            />
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'Far_khodkar',
                color: 'white',
                fontSize: 30,
              }}>
              کار های انجام شده
            </Text>
          </View>
          <View>
            <Button transparent>
              <Icon
                type="Ionicons"
                name="ios-arrow-back"
                style={{fontSize: 25}}
                onPress={() => navigation.goBack()}
              />
            </Button>
          </View>
        </View>
        <ScrollView>
          {CompletedTodos.length > 0 ? (
            CompletedTodos.map((todo, index) => {
              return (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'gray',
                    margin: 5,
                    paddingRight: '35%',
                  }}>
                  <Button
                    danger
                    onPress={() => {
                      deleteTodo(todo.text);
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
                کار انجام شده نداری
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  todos: state.todosReducer,
});
const mapDispatchToProps = dispatch => ({
  deleteTodo: todo => dispatch({type: 'DELETE_TODO', payload: todo}),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompletedSc);