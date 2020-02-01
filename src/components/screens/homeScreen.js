import React, {Component} from 'react';
import {Icon, Badge, Fab} from 'native-base';
import JDate from 'jalali-date';
import {View, Text} from 'react-native';
import PopupDialog from '../popupDialog';
import TodoList from '../todosList';
import {connect} from 'react-redux';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  showDialog = null;
  render() {
    const jalaliDate = new JDate();
    return (
      <View style={{flex: 1}}>
        <PopupDialog
          showDialog={func => {
            this.showDialog = func;
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: 'lightblue',
            paddingVertical: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              type="FontAwesome"
              name="check-square-o"
              style={{fontSize: 30, color: 'orange'}}
            />
            <Badge danger style={{justifyContent: 'center'}}>
              <Text style={{fontSize: 15, color: 'orange'}}>
                {
                  this.props.todos.filter(todo => todo.completed !== true)
                    .length
                }
              </Text>
            </Badge>
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'Far_khodkar',
                color: 'white',
                fontSize: 20,
              }}>
              امروز چی کار دارم؟
            </Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text style={{fontFamily: 'Yekan', fontSize: 13, color: 'white'}}>
              {`${jalaliDate.format('dddd')} ${jalaliDate.format(
                'D',
              )} ${jalaliDate.format('MMMM')}`}
            </Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={{paddingTop: 10}}>
            <TodoList />
          </View>
          <Fab
            style={{backgroundColor: '#f0ad4e'}}
            position="bottomLeft"
            onPress={() => {
              this.showDialog();
            }}>
            <Icon type="FontAwesome" name="plus" style={{fontSize: 25}} />
          </Fab>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  todos: state,
});

export default connect(mapStateToProps)(HomeScreen);
