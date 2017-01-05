import React, { Component } from 'react';
import Meteor from 'meteor/meteor';
import { render } from 'react-dom';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button
} from 'react-native-web';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to the fake boilerplate app, please login below. (login does't actually work)</Text>
        <View style={styles.login}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} />
          <Text style={styles.label}>Password</Text>
          <TextInput secureTextEntry={true} style={styles.input} />
          <Button title="submit" onPress={this.submit} style={styles.submit}/>
        </View>
      </View>
    );
  }
  submit() {
    console.log('login attempt');
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  logo: {
    alignSelf: 'center',
    height: 150,
    marginBottom: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20
  },
  label: {
    marginBottom: 5
  },
  input: {
    padding: 5,
    marginBottom: 10,
    borderColor: 'gray',
    borderRadius: 4,
    borderWidth: 1
  },
  login: {
    flex: .7,
    alignSelf: 'center'
  },
  submit: {
    flex: .5
  }
});
