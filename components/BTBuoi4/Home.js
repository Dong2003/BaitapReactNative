import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button } from 'react-native-paper';

const Home = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuIcon} onPress={toggleMenu}>
        <Icon name="menu" size={30} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>Home</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Details')}>
        Go to Details
      </Button>

      <Modal
        transparent={true}
        visible={menuVisible}
        animationType="fade"
        onRequestClose={toggleMenu}
      >
        <TouchableWithoutFeedback onPress={toggleMenu}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              toggleMenu();
              navigation.navigate('Home');
            }}
          >
            <Text style={styles.menuText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              toggleMenu();
              navigation.navigate('Profile');
            }}
          >
            <Text style={styles.menuText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              toggleMenu();
              navigation.navigate('Logout');
            }}
          >
            <Text style={styles.menuText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menu: {
    position: 'absolute',
    marginTop: 20,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    padding: 10,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  menuText: {
    fontSize: 18,
  },
});