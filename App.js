import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SearchScreen  from './screens/SearchScreen';
import TransactionScreen from './screens/TransactionScreen';

export default class App extends React.Component {
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator=createBottomTabNavigator({
  Transaction:{screens:TransactionScreen},
  Search:{screens:SearchScreen}
})

const AppContainer=createAppContainer(TabNavigator)