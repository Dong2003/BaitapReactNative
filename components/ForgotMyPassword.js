import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { TextInput, Provider as PaperProvider } from 'react-native-paper';

const ForgotMyPassword = () => {
   const [username, setUsername] = useState('');
  
    const [emailerror, setEmailError] = useState('');
    
    const handleLogin = () => {
      let valid = true;
  
      if (username.trim() === '') {
        setEmailError('Vui lòng nhập email đăng ký');
        valid = false;
      }else{
        setEmailError('');
      }
  
      if (valid) {
        Alert.alert('Gửi mã thành công', `Kiểm tra email này: ${username} để lấy mã!`, [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
      }
    };
  
    return (
      <PaperProvider>
        <View style={styles.container}>
          <Text style={styles.title}>Reset Your Password</Text>
  
          <TextInput
            label="Enter your email"
            value={username}
            mode="outlined"
            onChangeText={setUsername}
            style={styles.input}
            outlineColor="orange"
            activeOutlineColor="orange"
            theme={{ roundness: 15 }}
            left={
              <TextInput.Icon
                icon={'email'}
              />
            }
          />
          {emailerror !== '' && <Text style={{alignSelf:'flex-start', color: 'red', marginBottom: 10 }}>{emailerror}</Text>}
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Send reset email</Text>
        </TouchableOpacity>

        </View>
      </PaperProvider>
    );
}

export default ForgotMyPassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});
