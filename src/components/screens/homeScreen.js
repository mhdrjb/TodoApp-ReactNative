import React, {Component} from 'react';
import {Icon, Badge, Fab, Toast} from 'native-base';
import JDate from 'jalali-date';
import {View, Text, BackHandler} from 'react-native';
import PopupDialog from '../popupDialog';
import TodoList from '../todosList';
import {connect} from 'react-redux';
import {showDialog} from '../../actions/todoActions';
import {RFPercentage} from 'react-native-responsive-fontsize';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowCloseApp: false,
    };
  }
  componentDidMount() {
    console.log('home did mount');
    BackHandler.addEventListener('hardwareBackPress', this.backHandleClick);
  }
  componentWillUnmount() {
    console.log('home will unmount');
    BackHandler.removeEventListener('hardwareBackPress', this.backHandleClick);
  }
  backHandleClick = () => {
    if (this.props.navigation.isFocused()) {
      if (this.state.allowCloseApp === true) {
        BackHandler.exitApp();
      } else {
        this.setState({allowCloseApp: true}, () =>
          Toast.show({
            text: `برای خروج مجددا روی برگشت کلیک کنید`,
            duration: 5000,
            position: 'center',
            type: 'success',
            textStyle: {
              color: '#fff',
              fontFamily: 'Far_khodkar',
              fontSize: RFPercentage(5),
            },
          }),
        );
        setTimeout(() => this.setState({allowCloseApp: false}), 5000);
      }
      return true;
    }
  };
  render() {
    const {todos, showDialog, navigation} = this.props;
    const jalaliDate = new JDate();
    console.log('home render');
    return (
      <View style={{flex: 1}}>
        <PopupDialog />
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
              style={{fontSize: RFPercentage(5.5), color: 'orange'}}
            />
            <Badge danger style={{justifyContent: 'center'}}>
              <Text style={{fontSize: RFPercentage(3.5), color: 'orange'}}>
                {todos.filter(todo => todo.completed !== true).length}
              </Text>
            </Badge>
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'Far_khodkar',
                color: 'white',
                fontSize: RFPercentage(3.5),
              }}>
              امروز چی کار دارم؟
            </Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text
              style={{
                fontFamily: 'Yekan',
                fontSize: RFPercentage(2.5),
                color: 'white',
              }}>
              {`${jalaliDate.format('dddd')} ${jalaliDate.format(
                'D',
              )} ${jalaliDate.format('MMMM')}`}
            </Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View>
            <TodoList />
          </View>
          <Fab
            style={{backgroundColor: '#f0ad4e'}}
            position="bottomLeft"
            onPress={() => {
              showDialog();
            }}>
            <Icon
              type="FontAwesome"
              name="plus"
              style={{fontSize: RFPercentage(5)}}
            />
          </Fab>
          <Fab
            style={{backgroundColor: '#f0ad4e'}}
            position="bottomRight"
            onPress={() => {
              navigation.navigate('Completed');
            }}>
            <Icon
              type="FontAwesome5"
              name="clipboard-check"
              style={{fontSize: RFPercentage(5)}}
            />
          </Fab>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  todos: state.todosReducer,
});
const mapDispatchToProps = dispatch => ({
  showDialog: () => dispatch(showDialog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
