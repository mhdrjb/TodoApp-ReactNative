import {CommonActions} from '@react-navigation/native';
import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(
        CommonActions.reset({
          routes: [{name: 'Home'}],
        }),
      );
    }, 3000);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#483D8B',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <Image source={require('../../assets/todo.png')} />
          <Text
            style={{
              fontFamily: 'Far_khodkar',
              color: 'white',
              fontSize: RFPercentage(7),
              textAlign: 'center',
            }}>
            کارهاتو به من بسپر
          </Text>
        </View>
      </View>
    );
  }
}

export default Splash;
