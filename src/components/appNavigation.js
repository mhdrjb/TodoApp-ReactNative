import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/homeScreen';
import {createAppContainer} from 'react-navigation';
import CompletedSc from './screens/completedScreen';

class AppNavigation extends Component {
  render() {
    return <AppContainer />;
  }
}
const AppStackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Completed: CompletedSc,
  },
  {
    headerMode: 'none',
  },
);
const AppContainer = createAppContainer(AppStackNavigator);

export default AppNavigation;
