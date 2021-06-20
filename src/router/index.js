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
} from '../pages';
import OtpScreen from '../pages/OtpScreen';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
};

export default Router;
