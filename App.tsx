import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import LoginScreen1 from './components/LoginPaper';
import CreateNewAccount from './components/CreateNewAccount';
import ForgotMyPassword from './components/ForgotMyPassword';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './components/HomeScreeen';
import Home from './components/BTBuoi4/Home';
import Details from './components/BTBuoi4/Details';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name='Home2' component={Home} options={{headerShown:false}}/>
        <Drawer.Screen name='Details' component={Details} />
        <Drawer.Screen name="Login" component={LoginScreen1} options={{headerShown: false}} />
        <Drawer.Screen name="CreateNewAccount" component={CreateNewAccount} />
        <Drawer.Screen name="ForgotMyPassword" component={ForgotMyPassword} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
