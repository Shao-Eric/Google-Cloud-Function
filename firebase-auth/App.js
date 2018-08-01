import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyBle0Q4TY07lOjiGZ1-1ldDdc7uNPWAWyA',
      authDomain: 'one-time-password-ea1ce.firebaseapp.com',
      databaseURL: 'https://one-time-password-ea1ce.firebaseio.com',
      projectId: 'one-time-password-ea1ce',
      storageBucket: 'one-time-password-ea1ce.appspot.com',
      messagingSenderId: '396119504468'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});
