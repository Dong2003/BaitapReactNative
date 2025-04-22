import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Cat1 = () => {
  return (
    <View>
      <Text>Hello, I am...</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="Dong!"
      />
    </View>
  );
}

export default Cat1;
