import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import membersReducer from './src/reducers/MembersReducer';
import Reactotron from 'reactotron-react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';

const store = createStore(membersReducer);
const Stack = createNativeStackNavigator();

// function HomeScreen() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  Reactotron.log('App component is rendered');

  Reactotron.warn('*glares*');

  Reactotron.error("Now you've done it.");

  Reactotron.display({
    name: 'KNOCK KNOCK',
    preview: "Who's there?",
    value: 'Orange.',
    important: true,
  });

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{height: '100%'}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'white',
  },
  boxA: {
    height: 700,
    width: '100%',
    backgroundColor: 'red',
  },
  boxB: {
    height: 700,
    width: '100%',
    backgroundColor: 'green',
  },
});

export default App;
