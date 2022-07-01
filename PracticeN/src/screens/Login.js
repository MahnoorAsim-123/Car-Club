import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Image,
  ToastAndroid,
  Alert,
} from 'react-native';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  // const [checked, setChecked] = useState(true);

  const userObj = {
    email,
    password,
  };

  const userLogin = () => {
    if (!email || !password) {
      return setError('Required fields are missing');
    } else {
      setLoading(true);

      axios
        .post('http://10.0.2.2:5000/userlogin', userObj)

        .then(res => {
          console.log(res.data.message);

          if (res.data.message === 'user successfully loggedin') {
            AsyncStorage.setItem('key', JSON.stringify(res.data.data));
            alert('Loggedin Successfully');
            setLoading(false);
            navigation.navigate('Gallery');
          } else {
            setError('Invalid Credentials');
            setLoading(false);
          }
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        });
    }

    // ToastAndroid.showWithGravityAndOffset("Signup Successfully",
    // ToastAndroid.SHORT,
    // ToastAndroid.CENTER
    // )
  };
  // // get item
  // const getData = () => {
  //   try {
  //     AsyncStorage.getItem('key').then(val => {
  //       console.log(val);
  //     });
  //   } catch (e) {
  //     // error reading value
  //   }
  // };

  const onPress = () => {
    navigation.navigate('Signup');
  };

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/logo.png')}
            style={{
              height: 270,
              width: 250,
            }}
          />
        </View>

        <Text
          style={{
            paddingHorizontal: 10,
            color: 'red',
            fontWeight: 'bold',
            fontSize: 17,
            marginTop: -40,
            marginBottom: 15,
            paddingVertical: 7,
            fontFamily: 'serif',
          }}>
          {error}
        </Text>

        <View
          style={{
            width: 290,
            marginBottom: 10,
            marginTop: -10,
          }}>
          <Text
            style={{
              fontSize: 35,
              fontFamily: 'serif',
              fontWeight: 'bold',
              color: '#0f2027',
            }}>
            Login
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: '#2c3e50',
            }}>
            I am already a registered user.
          </Text>
        </View>

        <View
          style={{
            width: 290,
          }}>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              paddingLeft: 13,
              color: 'gray',
              fontSize: 17,
              fontFamily: 'serif',
              fontWeight: 'bold',
              width: 280,
              marginBottom: 10,
            }}
            value={email}
            onChangeText={e => setEmail(e)}
            placeholder="Email Address"
            keyboardType="email-address"
          />

          <TextInput
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              paddingLeft: 13,
              color: 'gray',
              fontSize: 17,
              fontFamily: 'serif',
              fontWeight: 'bold',
              width: 280,
              marginBottom: 10,
            }}
            value={password}
            onChangeText={e => setPassword(e)}
            placeholder="Password"
            secureTextEntry={true}
          />

          {/* <View style={{flexDirection: 'row'}}>
               <CheckBox status={checked ?  'checked': 'unchecked'}
                onClick={() => {setChecked(!checked)}}/>
              <Text style={{marginTop: 5}}>SHOW</Text>
              </View> */}

          {isLoading ? (
            <ActivityIndicator
              style={{
                marginVertical: 8,
              }}
              size="large"
              color="#fc4a1a"
            />
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: '#045DE9',
                width: 280,
                height: 47,
                marginBottom: 6,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={userLogin}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: '#ffffff',
                  fontFamily: 'serif',
                }}>
                Login
              </Text>
            </TouchableOpacity>
          )}
          <Text
            style={{
              fontWeight: 'bold',
              color: 'gray',
            }}>
            I do not have an account.?
          </Text>
          <TouchableOpacity onPress={onPress}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#2f80ed',
                fontSize: 14,
                fontFamily: 'serif',
              }}>
              SignUp
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
