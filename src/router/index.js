import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  AppIntro,
  GetStarted,
  SignIn,
  SignInCustomer,
  SignInPakar,
  SignUpCustomer,
  SignUpPartner,
  SignUpPakar,
  SplashScreen,
  HomeCustomer,
  Activity,
  Aktivitas,
  Chat,
  Profile,
  KmsOnline,
  Stunting,
  KmsOutput,
  AddFamily,
  UpdateProfileUser,
  UpdateProfilePosyandu,
  UpdateProfileHomeBabySpa,
  UpdateProfilePakar,
  StuntingOutput,
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
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Activity">
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
        name="SignUpPartner"
        component={SignUpPartner}
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
        name="SignInPakar"
        component={SignInPakar}
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
        name="UpdateProfileUser"
        component={UpdateProfileUser}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UpdateProfilePakar"
        component={UpdateProfilePakar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UpdateProfilePosyandu"
        component={UpdateProfilePosyandu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UpdateProfileHomeBabySpa"
        component={UpdateProfileHomeBabySpa}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KmsOnline"
        component={KmsOnline}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KmsOutput"
        component={KmsOutput}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddFamily"
        component={AddFamily}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Stunting"
        component={Stunting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StuntingOutput"
        component={StuntingOutput}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
