import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Reactotron from 'reactotron-react-native';

class HomeScreen extends Component {
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.boxA}>
          <View style={styles.row}>
            <Pressable
              style={styles.button}
              onPress={() => Reactotron.log('History')}>
              <Text style={styles.buttonText}>History New</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => Reactotron.log('Active')}>
              <Text style={styles.buttonText}>Active</Text>
            </Pressable>
          </View>
          <View style={styles.row}>
            <Pressable
              style={styles.button}
              onPress={() => Reactotron.log('History')}>
              <Text style={styles.buttonText}>History</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => Reactotron.log('Active')}>
              <Text style={styles.buttonText}>Active</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.boxB}></View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  boxA: {
    width: '100%',
  },
  boxB: {
    height: 700,
    width: '100%',
    backgroundColor: 'green',
  },
  button: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  buttonText: {
    fontSize: 30,
    color: 'red',
    fontFamily: 'times',
  },
  row: {
    marginVertical: 30,
    justifyContent: 'space-around',
    flex: 1,
    flexDirection: 'row',
  },
});

export default HomeScreen;
