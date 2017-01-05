import React from 'react';
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
import Login from '../ui/Login.jsx';

export default class App extends React.Component {
  render() {
    return (
      <Login />
    );
  }
}
