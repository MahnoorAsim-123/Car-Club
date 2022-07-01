import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navbar from '../Components/Navbar';
import Icon from 'react-native-vector-icons/MaterialIcons';

const UserProfile = ({navigation}) => {
  const [userData, setuserData] = useState([]);

  const getData = async () => {
    try {
      let userDatas = await AsyncStorage.getItem('key');
      let datas = JSON.parse(userDatas);
      setuserData(datas);
    } catch (error) {
      console.log('Something went wrong', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <Navbar />
      <View
              style={{
                alignItems: 'flex-end',
                marginTop: 20,
                marginRight:25,
              }}>
              <Icon name="edit" size={26} color="gray" />
            </View>
      <View>

        
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            // marginTop: 5,
          }}>
          <View
            style={{
              marginVertical: 10,
            }}>
            {/* <Icon name="account-circle" size={170} color="#f37335" /> */}
            <Icon name="account-circle" size={170} color="#E899DC" />

          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 30,
                  fontFamily: 'serif',
                  color: '#f37335',
                  fontWeight: 'bold',
                  marginBottom: 1,
                  marginRight: 8,
                }}>
                {userData.fname}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 30,
                  fontFamily: 'serif',
                  color: '#f37335',
                  fontWeight: 'bold',
                  marginBottom: 1,
                }}>
                {userData.lname}
              </Text>
            </View>

            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                fontFamily: 'serif',
                color: '#f37335',
                fontWeight: 'bold',
                marginBottom: 15,
              }}>
              {userData.role}
            </Text>

            <View
              style={{
                borderWidth: 1,
                borderColor: 'silver',
                width: 300,
                marginBottom: 25,
              }}></View>

       

            <View
              style={{
                flexDirection: 'row',
                // alignItems:'center',
              }}>
              <Icon name="email" size={25} color="gray" />
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'serif',
                  color: '#f37335',
                  fontWeight: 'bold',
                  marginBottom: 15,
                  marginTop: -3,
                  marginLeft: 10,
                }}>
                {userData.email}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                // alignItems:'center',
              }}>
              <Icon name="phone" size={25} color="gray" />
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'serif',
                  color: '#f37335',
                  fontWeight: 'bold',
                  marginBottom: 15,
                  marginLeft: 10,
                  marginTop: -2,
                }}>
                {userData.contact}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                // alignItems:'center',
              }}>
              <Icon name="person" size={25} color="gray" />
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'serif',
                  color: '#f37335',
                  fontWeight: 'bold',
                  marginBottom: 15,
                  marginLeft: 10,
                  marginTop: -2,
                }}>
                {userData.username}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                // alignItems:'center',
              }}>
              <Icon name="location-on" size={25} color="gray" />
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'serif',
                  color: '#f37335',
                  fontWeight: 'bold',
                  marginBottom: 15,
                  marginLeft: 10,
                  marginTop: -2,
                }}>
                {userData.address}
              </Text>
            </View>

            {/* <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontFamily: 'serif',
              color: 'gray',
              // color : 'gray',
              fontWeight: 'bold',
              marginVertical: 6,
            }}>
            FirstName: {userData.fname}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontFamily: 'serif',
              color: '#414345',
              // color : 'gray',
              fontWeight: 'bold',
              marginVertical: 6,
            }}>
            Last Name: {userData.lname}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontFamily: 'serif',
              color: '#414345',
              // color : 'gray',
              fontWeight: 'bold',
              marginVertical: 6,
            }}>
            Contact: {userData.contact}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontFamily: 'serif',
              color: '#414345',
              // color : 'gray',
              fontWeight: 'bold',
              marginVertical: 6,
            }}>
            Username: {userData.username}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontFamily: 'serif',
              color: '#414345',
              // color : 'gray',
              fontWeight: 'bold',
              marginVertical: 6,
            }}>
            Email: {userData.email}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontFamily: 'serif',
              color: '#414345',
              // color : 'gray',
              fontWeight: 'bold',
              marginVertical: 6,
            }}>
            Role: {userData.role}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontFamily: 'serif',
              color: '#414345',
              // color : 'gray',
              fontWeight: 'bold',
              marginVertical: 6,
            }}>
            Address: {userData.address}
          </Text>*/}
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserProfile;
