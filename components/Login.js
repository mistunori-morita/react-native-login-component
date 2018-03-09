/* @flow */

import React, { Component } from 'react';
import Myform from './Myform';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginwrap}>
          <Image
          style={styles.logo}
          source={require('./img/icon.png')}/>
          <Text style={styles.title}>A simple login App</Text>
        </View>
        <View style={styles.myform}>
          <Myform />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282830',
    width: Dimensions.get('window').width,
  },
  loginwrap: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  myform: {
    flex: 1,

  },
  title: {
    color: '#fff',
    marginTop: 10,
  },

});
