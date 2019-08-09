import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';
import IndexApp from "./src/IndexApp";

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <IndexApp/>
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
  }
});
