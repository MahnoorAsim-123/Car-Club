import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import Signup from './src/screens/Signup';
import Login from './src/screens/Login';
import Packages from './src/screens/Packages';
import Booking from './src/screens/Booking';
import Gallery from './src/screens/Gallery';
import Feedback from './src/screens/Feedback';
import UserProfile from './src/screens/UserProfile';
import BookRide from './src/screens/BookRide';
import Payment from './src/screens/Payment';
import CreateCategory from './src/screens/CreateCategory';
import GetFeedback from './src/screens/GetFeedback';
import ShowCategories from './src/screens/ShowCategories';
import ShowPackages from './src/screens/ShowPackages';
import Users from './src/screens/Users';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import SplashScreen from './src/screens/SplashScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              title: 'Welcome to Rent Car',
              headerShown: false,
              // headerStyle: {
              //   backgroundColor: '#f00000',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              //   fontFamily: 'serif',
              // },
            }}
            name="WelcomeScreen"
            component={WelcomeScreen}
          />
          <Stack.Screen
            options={{
              title: 'SignUp',
              headerShown: false,
              // headerStyle: {
              //   backgroundColor: '#f00000',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              //   fontFamily: 'serif',
              // },
            }}
            name="Signup"
            component={Signup}
          />
          <Stack.Screen
            options={{
              title: 'Login',
              headerShown: false,
              // headerStyle: {
              //   backgroundColor: '#f00000',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              //   fontFamily: 'serif',
              // },
            }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{
              title: 'Packages',
              headerShown: false,
              // headerStyle: {
              //   backgroundColor: '#f00000',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              //   fontFamily: 'serif',
              // },
            }}
            name="Packages"
            component={Packages}
          />
          <Stack.Screen
            options={{
              title: 'CreateCategory',
              headerShown: false,
              // headerStyle: {
              //   backgroundColor: '#f00000',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              //   fontFamily: 'serif',
              // },
            }}
            name="CreateCategory"
            component={CreateCategory}
          />
          <Stack.Screen
            options={{
              title: 'Gallery',
              headerShown: false,
              // headerStyle: {
              //   backgroundColor: '#f00000',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              //   fontFamily: 'serif',
              // },
            }}
            name="Gallery"
            component={Gallery}
          />
          <Stack.Screen
            options={{
              title: 'Profile',
              headerShown: false,
              // headerStyle: {
              //   backgroundColor: '#f00000',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              //   fontFamily: 'serif',
              // },
            }}
            name="UserProfile"
            component={UserProfile}
          />
          <Stack.Screen
            options={{
              title: 'Booking',
              headerShown: false,
              // headerStyle: {
              //   backgroundColor: '#f00000',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              //   fontFamily: 'serif',
              // },
            }}
            name="Booking"
            component={Booking}
          />
             <Stack.Screen
            options={{
              title: 'Users',
              headerShown: false,
              // headerStyle: {
              //   backgroundColor: '#f00000',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              //   fontFamily: 'serif',
              // },
            }}
            name="Users"
            component={Users}
          />
          <Stack.Screen
            options={{
              title: 'Feedback',
              headerShown: false,
              // headerStyle: {
              //   backgroundColor: '#f00000',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              //   fontFamily: 'serif',
              // },
            }}
            name="Feedback"
            component={Feedback}
          />
          <Stack.Screen
            options={{
              title: 'BookRide',
              headerStyle: {
                backgroundColor: '#f00000',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontFamily: 'serif',
              },
            }}
            name="BookRide"
            component={BookRide}
          />
          <Stack.Screen
            options={{
              title: 'Payment',
              headerStyle: {
                backgroundColor: '#f00000',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontFamily: 'serif',
              },
            }}
            name="Payment"
            component={Payment}
          />

          <Stack.Screen
            options={{
              title: 'Feeds',
              headerShown: false,
              // headerStyle: {
              //   backgroundColor: '#f00000',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              //   fontFamily: 'serif',
              // },
            }}
            name="Feeds"
            component={GetFeedback}
            GetFeedback
          />

          <Stack.Screen
            options={{
              title: 'Cat',
              headerShown: false,
              // headerStyle: {
              //   backgroundColor: '#f00000',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              //   fontFamily: 'serif',
              // },
            }}
            name="Cat"
            component={ShowCategories}
            GetFeedback
          />

<Stack.Screen
            options={{
              title: 'Pkg',
              headerShown: false,
              // headerStyle: {
              //   backgroundColor: '#f00000',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              //   fontFamily: 'serif',
              // },
            }}
            name="Pkg"
            component={ShowPackages}
            GetFeedback
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

//  --------Tab Navigation--------
// const App = () => {
//   const myIcon = <Icon name="rocket" size={30} color="#900" />;
//   const Tab = createBottomTabNavigator();
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
// screenOptions={({ route }) => ({
//   tabBarIcon: ({ focused, color, size }) => {
//     let iconName;

//     if (route.name === 'CustomerDashboard') {
//       iconName = focused
//         ? 'ios-information-circle'
//         : 'ios-information-circle-outline';
//     } else if (route.name === 'Booking') {
//       iconName = focused ? 'ios-list-box' : 'ios-list';
//     }

//     // You can return any component that you like here!
//     return <Icon name={iconName} size={30} color="#900" />;
//   },
//   tabBarActiveTintColor: 'tomato',
//   tabBarInactiveTintColor: 'gray',
// })}
//       >
//         <Tab.Screen name="Categories" component={Categories} />
//         <Tab.Screen name="Booking" component={Booking} />
//         <Tab.Screen name="Gallery" component={Gallery} />
//         <Tab.Screen name="Feedback" component={Feedback} />
//         <Tab.Screen name="Profile" component={Profile} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

export default App;
