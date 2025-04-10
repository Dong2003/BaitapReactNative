import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cat from './components/Cat';
import Cat1 from './components/Cat1';
import Cafe from './components/Cat3';
import Cafe1 from './components/Cat4';

export default function App() {
  return (
    <View style={styles.container}>
      <Cat />
      <Cat1 />
      <Cafe />
      <Cafe1 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
