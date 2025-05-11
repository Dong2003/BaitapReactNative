import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import LoginScreen1 from './components/LoginPaper';
import CreateNewAccount from './components/CreateNewAccount';
import ForgotMyPassword from './components/ForgotMyPassword';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider as PaperProvider } from 'react-native-paper';

import HomeScreen from './components/HomeScreeen';
import Home from './components/BTBuoi4/Home';
import Details from './components/BTBuoi4/Details';
import LoginScreen from './components/BTBuoi5/LoginScreen';
import TodoListScreen from './components/BTBuoi5/TodoListScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name='Home2' component={Home} options={{headerShown:false}}/>
          <Drawer.Screen name='LoginScreen' component={LoginScreen} options={{headerShown:false}}/>
          <Drawer.Screen name='Details' component={Details} />
          <Drawer.Screen name="Login" component={LoginScreen1} options={{headerShown: false}} />
          <Drawer.Screen name="CreateNewAccount" component={CreateNewAccount} />
          <Drawer.Screen name="ForgotMyPassword" component={ForgotMyPassword} />
          <Drawer.Screen name="TodoList" component={TodoListScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
