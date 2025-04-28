import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import LoginScreen1 from './components/LoginPaper';
import CreateNewAccount from './components/CreateNewAccount';
import ForgotMyPassword from './components/ForgotMyPassword';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/HomeScreeen';
import Home from './components/BTBuoi4/Home';
import Details from './components/BTBuoi4/Details';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='Home2' component={Home} options={{headerShown:false}}/>
        <Stack.Screen name='Details' component={Details} />
        <Stack.Screen name="Login" component={LoginScreen1} options={{headerShown: false}} />
        <Stack.Screen name="CreateNewAccount" component={CreateNewAccount} />
        <Stack.Screen name="ForgotMyPassword" component={ForgotMyPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
