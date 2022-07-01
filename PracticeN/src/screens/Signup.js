import React, {useState} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';

const Signup = ( {navigation} ) => {

  const [fname, setFirstName] = useState('');
  const [lname, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  // const [checked, setChecked] = useState(true);

  const userObj = {
    fname,
    lname,
    contact,
    address,
    username,
    email,
    password,
  };

  const userSignup = () => {

    if (
      !fname ||
      !lname ||
      !contact ||
      !address ||
      !username ||
      !email ||
      !password
    ) {
      return setError('Required fields are missing');
      // Alert.alert(`Required fields are missing...`);
    }

    //  else if (fname.length < 3) {
    //     return Alert.alert(`Firstname must be 3 letters long..`);
    //   } else if (lname.length < 3) {
    //     return Alert.alert(`Lastname must be 3 letters long..`);
    //   }
    //   else if (username.length < 3) {
    //     return Alert.alert(`username must be 3 letters long..`);
    //   }
    //   else if ((contact.length <= 10 ) || (contact.length > 11)) {
    //     return Alert.alert(`Contact must be 11 digits long`);
    //   }
    //   else if (password.length < 6) {
    //   return Alert.alert(`Password must be 6 characters long..`);
    // }

    else {
      setLoading(true);
      axios
        .post('http://10.0.2.2:5000/createuser', userObj)
        
        .then(res => {
          if (res.data.message === 'Email address already exists.') {
            setError('Email Address already exists');
          } else {
            Alert.alert('Registered Successfully');
          }

          setLoading(false);

          setFirstName('');
          setLastName('');
          setContact('');
          setAddress('');
          setUsername('');
          setEmail('');
          setPassword('');
        })

        .catch(err => {
          console.log(err);
          setLoading(false);
        });

      // ToastAndroid.showWithGravityAndOffset("Signup Successfully",
      // ToastAndroid.SHORT,
      // ToastAndroid.CENTER
      // )
    }
  };

  const onPress = () => {
    navigation.navigate('Login');
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
              height: 150,
              width: 170,
            }}
          />
        </View>

        <Text
          style={{
            paddingHorizontal: 10,
            color: 'red',
            fontWeight: 'bold',
            fontSize: 17,
            marginTop: -22,
            marginBottom: 10,
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
              fontSize: 27,
              fontFamily: 'serif',
              fontWeight: 'bold',
              color: '#0f2027',
            }}>
            SignUp
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: '#2c3e50',
            }}>
            Please create your account.
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
              marginBottom: 5,
            }}
            value={fname}
            onChangeText={e => setFirstName(e)}
            placeholder="First Name"
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
              marginBottom: 5,
            }}
            value={lname}
            onChangeText={e => setLastName(e)}
            placeholder="Last Name"
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
              marginBottom: 5,
            }}
            value={contact}
            onChangeText={e => setContact(e)}
            placeholder="Contact"
            keyboardType="number-pad"
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
              marginBottom: 5,
            }}
            value={address}
            onChangeText={e => setAddress(e)}
            placeholder="Address"
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
              marginBottom: 5,
            }}
            value={username}
            onChangeText={e => setUsername(e)}
            placeholder="Username"
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
              marginBottom: 5,
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
              marginBottom: 5,
            }}
            value={password}
            onChangeText={e => setPassword(e)}
            placeholder="Password"
            secureTextEntry={true}
          />

          {/* <View
        style={{
          flexDirection: 'row',
        }}>
        <CheckBox
          status={checked ? 'checked' : 'unchecked'}
          onClick={() => {
            setChecked(!checked);
          }}
        />

        <Text style={{marginTop: 5}}>SHOW</Text>
      </View> */}

          {isLoading ? (
            <ActivityIndicator
              style={{
                marginTop: 10,
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
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={userSignup}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 19,
                  color: '#ffffff',
                  fontFamily: 'serif',
                }}>
                SignUp
              </Text>
            </TouchableOpacity>
          )}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 5,
            }}>
            <Text
              style={{
                color: 'gray',
              }}>
              Already Member?
            </Text>
            <TouchableOpacity onPress={onPress}>
              <Text
                style={{
                  marginLeft: 7,
                  fontWeight: 'bold',
                  color: '#2A2A72',
                  textDecorationLine: 'underline',
                  textDecorationStyle: 'solid',
                  textDecorationColor: 'blue',
                  fontFamily: 'serif',
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;
