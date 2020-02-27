import React, {Component} from 'react';
import HomeScreen from './screens/homeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import CompletedSc from './screens/completedScreen';
import Splash from './screens/splash';

const Stack = createStackNavigator();

class AppNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Completed" component={CompletedSc} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppNavigation;
