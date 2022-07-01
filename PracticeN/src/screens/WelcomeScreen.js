import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  const signupHandler = () => {
    navigation.navigate('Signup');
  };

  const loginHandler = () => {
    navigation.navigate('Login');
  };

  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 40,
        }}>
        <Image
          source={require('../assets/logo.png')}
          style={{
            height: 310,
            width: 300,
          }}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 200,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#dc281e',
            width: 120,
            height: 47,
            borderRadius: 13,
            marginRight: 6,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={signupHandler}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: '#ffffff',
              fontFamily: 'serif',
            }}>
            SignUp
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#7F8C8D',
            width: 120,
            height: 47,
            borderRadius: 13,
            marginRight: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={loginHandler}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: 'gray',
              fontFamily: 'serif',
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;
