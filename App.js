import React from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, } from 'react-navigation';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login'

const AppNavigator = createStackNavigator({
  LoginScreen: { screen: Login, navigationOptions: {
      title: "Login"
} },
  DashboardScreen: { screen: Dashboard, navigationOptions: {
      title: "Dashboard",
      headerLeft: null
} },
});

export default class App extends React.Component {
  render() {
    return (
        <AppNavigator />
    );
  }
}
