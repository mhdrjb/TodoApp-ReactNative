import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';

class Splash extends Component {
  componentDidMount() {
    setTimeout(() => this.props.navigation.navigate('Home'), 4000);
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
              fontSize: 40,
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
