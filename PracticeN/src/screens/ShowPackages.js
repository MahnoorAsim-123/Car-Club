import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Alert,
  FlatList,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const ShowPackages = ({navigation}) => {
  const [packageData, setPackageData] = useState([]);
  const [toggle, setToggle] = useState(false);

  const getCatData = () => {
    axios
      .get('http://10.0.2.2:5000/getpackage')
      .then(res => {
        console.log(res.data, 'package');
        setPackageData(res.data);
      })
      .catch(err => {
        console.log('err');
      });
  };

  useEffect(() => {
    getCatData();
  }, [toggle]);

  const bookRide = () => {
    navigation.navigate('BookRide');
  };

  const renderItem = ({index, item}) => {
    return (
      <View
        style={{
          // borderWidth: 1,
          // borderColor: 'silver',
          backgroundColor: 'white',
          flexDirection: 'row',
          borderRadius: 10,
          alignItems: 'center',
          paddingHorizontal: 3,
          marginBottom: 10,
        }}>
        <Image
          source={require('../assets/image1.jpg')}
          style={{
            height: 150,
            width: 150,
            borderRadius: 20,
            margin: 2,
          }}
        />
        <View
          style={{
            flexDirection: 'column',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: 'black',
              fontFamily: 'serif',
              marginLeft: 10,
              marginBottom: 10,
              marginTop: 10,
            }}>
            {item.packagename}
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              fontFamily: 'serif',
              marginLeft: 10,
              marginBottom: 10,
              width: 240,
            }}>
            {item.packagedesc}
          </Text>

          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'black',
              fontFamily: 'serif',
              marginLeft: 10,
              marginBottom: 10,
              width: 240,
            }}>
            ${item.packageprice}
          </Text>

          <Text
            style={{
              marginLeft: 10,

              marginBottom: 10,
            }}>
            <Icon name="star" size={25} color="orange" />
            <Icon name="star" size={25} color="orange" />
            <Icon name="star" size={25} color="orange" />
            <Icon name="star" size={25} color="orange" />
            <Icon name="star-half" size={25} color="orange" />
          </Text>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                marginLeft: 13,
                marginBottom: 10,
              }}
              onPress={bookRide}>
              <Text style={{textAlign: 'center', color: 'white', marginTop: 5}}>
                <Icon name="shopping-cart" size={29} color="red" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <View>
        <Navbar />
       
        <View
          style={{
            alignItems: 'center',
          }}>
          <FlatList
            data={packageData}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ShowPackages;
