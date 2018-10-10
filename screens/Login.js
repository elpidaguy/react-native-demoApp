import React, { Component } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import {RkButton, RkText, RkTextInput, RkCard} from 'react-native-ui-kitten';


export class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    // this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

login()
{

  if (this.state.username == '') {
      Alert.alert('Please Fill Username!')
  }
  else if (this.state.password == ''){
      Alert.alert('Please Fill Password!')
  }
  else {
    let data = {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'same-origin',
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        usertype: 'admin',
      }),
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json',
      }
    }
    fetch('http://139.59.71.69:9876/login',data)
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.success == 'true') {
        Alert.alert('Login Successfull!')
        this.props.navigation.navigate('DashboardScreen');
      }
      else {
        Alert.alert('Login Failed')
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }
}

render() {
  return (
    <View style={styles.container}>
      <RkCard style={{padding: 20}}>
        <View style={{alignItems: 'center',padding: 10}}>
          <RkText rkType='warning large' style={{fontSize: 40}}>Log In</RkText>
        </View>
        <View style={{alignItems: 'center',padding: 10}}>
          <RkTextInput placeholder='Username' value={this.state.username}  onChangeText={(username) => this.setState({username: username})} />
          <RkTextInput secureTextEntry={true} placeholder='Password' value={this.state.password}  onChangeText={(password) => this.setState({password: password})} />
        </View>
        <View style={{alignItems: 'center',padding: 10}}>
          <RkButton rkType='success small' title="Press Me" onPress={this.login} > Log In!</RkButton>
        </View>
      </RkCard>
    </View>
  );
}
}

export default Login

const styles = StyleSheet.create({
container: {
  flex:1,
  backgroundColor: '#fff',
  justifyContent: 'center',
  padding: 10
},
});
