import React, {useState} from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Alert,
} from 'react-native';

const Feedback = () => {

  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [feedback, setfeedback] = useState('');
  const [location, setLocation] = useState('');
  const [isLoading, setLoading] = useState(false);

  const userObj = {
    username,
    email,
    feedback,
  };

  const SendFeedback = () => {
    if (!username || !email || !feedback) {
      return Alert.alert(`Required fields are missing...`);
    } else {
      setLoading(true);
      axios
        .post('http://10.0.2.2:5000/sendfeedback', userObj)

        .then(res => {
          console.log(res);
          Alert.alert(`Thank You....!!!`);
          
          setusername("")
          setemail("")
          setfeedback("")

          setLoading(false);
        })

        .catch(err => {
          console.log(err);
          setLoading(false);
        });
    }
  };
  const findLoc = () => {
    const config = {
      enableHighAccuracy: true,
      timeout: 2000,
      maximumAge: 3600000,
    };

    Geolocation.getCurrentPosition(
      info => setLocation(info.coords),
      error => console.log('ERROR', error),
      config,
    );
  };

  const shareSocial = async () => {
    const shareMsg = {
      message: 'CarClub services are customer satisfied....',
    };
    try {
      const shareRes = await Share.open(shareMsg);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View>
      <Navbar />

      <View>
        <Text
          style={{
            textAlign: 'center',
            color: 'gray',
            fontSize: 30,
            fontFamily: 'serif',
            fontWeight: 'bold',
            marginVertical: 25,
          }}>
          FEEDBACK
        </Text>
      </View>

      <View
        style={{
          alignItems: 'center',
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
          value={username}
          onChangeText={e => setusername(e)}
          placeholder="ENTER USERNMAE"
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
          value={email}
          onChangeText={e => setemail(e)}
          placeholder="ENTER EMAIL"
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
          value={feedback}
          onChangeText={e => setfeedback(e)}
          placeholder="ENTER FEEDBACK"
        />
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
              backgroundColor: '#fc4a1a',
              width: 280,
              height: 47,
              marginBottom: 6,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={SendFeedback}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 22,
                color: '#ffffff',
                fontFamily: 'serif',
              }}>
              SEND
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View
        style={{
          marginLeft: 30,
          marginTop: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={shareSocial}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: 'black',
                fontFamily: 'serif',
                marginBottom: 10,
              }}>
              <Icon name="share" size={32} color="green" />
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 20,
              marginTop: 3,
              color: 'green',
            }}>
            Tell your friends
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={findLoc}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: 'black',
                fontFamily: 'serif',
              }}>
              <Icon name="location-on" size={32} color="#021b79" />
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 20,
              marginTop: 3,
              color: '#021b79',
            }}>
            Track your location
          </Text>
        </View>
      </View>


<View
    style={{
      backgroundColor: 'black',
      width: 350,
      borderRadius: 10,
      marginHorizontal: 20,
      marginVertical: 20,
      padding : 10,
      paddingBottom : 20
  
    }}>
    <View>
      <Text
        style={{
          textAlign: 'center',
          marginVertical: 20,
          fontSize: 30,
          color : 'white'
        }}>
        Your Location
      </Text>
    </View>
  
    <View
    style={{
    flexDirection : 'row',
    marginHorizontal : 10
    }}>
  
    <Text
        style={{
          fontSize: 25,
          color : 'white'
       
        }}>
        Latitude: 
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 25,
          marginLeft : 15,
          color : 'white'
        }}>
       {location.latitude}
      </Text>
    </View>

    <View
    style={{
    flexDirection : 'row',
    marginHorizontal : 10
  
    }}>
  
    <Text
        style={{
          textAlign: 'center',
          fontSize: 25,
          color : 'white'
        }}>
      Altitude:
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 25,
          color : 'white',
          marginLeft : 15,
  
        }}>
     {location.altitude}
      </Text>
    </View>

    <View
    style={{
    flexDirection : 'row',
    marginHorizontal : 10
  
    }}>
  
    <Text
        style={{
          textAlign: 'center',
          fontSize: 25,
          color : 'white'
        }}>
       Place:
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 25,
          color : 'white',
          marginLeft : 15,
  
        }}>
           {location.accuracy}
    
      </Text>
    </View>
    </View>
      


 
    </View>
  );
};

export default Feedback;
