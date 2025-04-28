import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.openDrawer()}>
        <Icon name="menu" size={30} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>Home</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Details')}>
        Go to Details
      </Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  menuIcon: {
    position: 'absolute',
    top: 40,
    left: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});