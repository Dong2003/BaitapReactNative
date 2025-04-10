import React from 'react';
import { Text, View } from 'react-native';

const Cat = (props) => {
  return (
    <View>
      <Text>Hello, I am {props.name}!</Text>
    </View>
  );
}

const Cafe = () => {
  return (
    <View>
      <Cat name="Dong" />
      <Cat name="Dong1" />
      <Cat name="Dong2" />
    </View>
  );
}

export default Cafe;
