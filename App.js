import React, {Component} from 'react';
import {I18nManager} from 'react-native';
import AppNavigation from './src/components/appNavigation';
import {Provider} from 'react-redux';
import store from './src/store/store';

I18nManager.forceRTL(true);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}
