import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  AppIntro,
  GetStarted,
  SignIn,
  SignInCustomer,
  SignUpCustomer,
  SignUpLembaga,
  SignUpPakar,
  SplashScreen,
  HomeCustomer,
  Inbox,
  Chat,
  Profile,
  UpdateProfile,
} from '../pages';
import OtpScreen from '../pages/OtpScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={HomeCustomer} />
      <Tab.Screen name="Inbox" component={Inbox} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="AppIntro">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AppIntro"
        component={AppIntro}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpCustomer"
        component={SignUpCustomer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpPakar"
        component={SignUpPakar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpLembaga"
        component={SignUpLembaga}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignInCustomer"
        component={SignInCustomer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OtpScreen"
        component={OtpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
