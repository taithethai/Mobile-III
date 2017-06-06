import Expo from 'expo';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './components/Styles';
import { StackNavigator } from 'react-navigation';
import SignUp from './components/SignUp';
import Home from './Home';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Sign Up',
  };

  render() {
    console.log('props >>>>>', this.props)
    return (
      <View style={styles.container}>
        <Text>Check Debugger</Text>
      </View>
    );
  }
}
        // <SignUp navigate={this.props.navigation.navigate} />

Expo.registerRootComponent(App);
