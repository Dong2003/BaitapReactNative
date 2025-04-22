import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ChangeScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Navigation.navigate('LoginScreen')} style={styles.button}>
        <Text>LoginScreen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Navigation.navigate('paper')} style={styles.button}>
        <Text>PaperScreen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Navigation.navigate('LoginScreenPaper')} style={styles.button}>
        <Text>LoginScreenPaper</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ChangeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        padding:16,
        backgroundColor: '#0984e3',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        width: '100%',
        marginBottom: 10,
    },
})