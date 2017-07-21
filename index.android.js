/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { LoginButton } from 'react-native-fbsdk';

export default class Posterific extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginButton
          onLoginFinished={
              (error, result) => {
                if (error) {
                  alert("Login failed");
                } else if (result.isCancelled) {
                  alert("Login is cancelled");
                } else {
                  alert("login success");
                }
              }
          }
          onLogoutFinished={
            alert("logout")
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Posterific', () => Posterific);
