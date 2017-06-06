import Expo from 'expo';
import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  AsyncStorage
} from 'react-native';
import styles from './Styles';
import axios from 'axios';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.signUp = this.signUp.bind(this);
  }
  signUp() {
    const promise = axios.post('https://mobile-server-ii.herokuapp.com/users', {
      email: this.email,
      password: this.password
    });
    promise.then((response) => {
      if (response.data.code === 11000) return this.setState({error: 'Email already taken.'});
      AsyncStorage.setItem('token', response.data.token).then(() => {
        this.props.navigate('Home');
      });
    });
    promise.catch(e => console.log(e));
  }
  render() {
    return (
      <Text>Hello</Text>
      );
  }
}