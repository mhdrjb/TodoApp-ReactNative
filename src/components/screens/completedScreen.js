import React, {Component} from 'react';
import {Icon, Button} from 'native-base';
import {View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {deleteTodoAction} from '../../actions/todoActions';
import {RFPercentage} from 'react-native-responsive-fontsize';
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
              style={{fontSize: RFPercentage(6), color: 'orange'}}
            />
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'Far_khodkar',
                color: 'white',
                fontSize: RFPercentage(5.5),
              }}>
              کار های انجام شده
            </Text>
          </View>
          <View>
            <Button transparent>
              <Icon
                type="Ionicons"
                name="ios-arrow-back"
                style={{fontSize: RFPercentage(5)}}
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
                      fontSize: RFPercentage(5),
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
              <Text
                style={{fontFamily: 'Far_khodkar', fontSize: RFPercentage(5)}}>
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
  deleteTodo: todo => dispatch(deleteTodoAction(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompletedSc);
