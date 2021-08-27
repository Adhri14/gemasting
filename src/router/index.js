import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  AppIntro,
  GetStarted,
  SignIn,
  SignInPakar,
  SignInPosyandu,
  SignUpCustomer,
  SignUpPartner,
  SignInHBS,
  SplashScreen,
  HomeCustomer,
  Activity,
  Aktivitas,
  Chat,
  Profile,
  KmsOnline,
  Stunting,
  KmsOutput,
  AddFamilyKMS,
  UpdateProfileUser,
  UpdateProfilePosyandu,
  UpdateProfileHomeBabySpa,
  UpdateProfilePakar,
  StuntingOutput,
  ChatPakar,
  Transaction,
  OtpScreen,
  DetailTransaction,
  ChatRoom,
} from '../pages';
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
    <Stack.Navigator initialRouteName="Splashscreen">
      {/* Screen Utama */}
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
      {/* Akhir */}

      {/* SignIn -> 4 */}
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignInPosyandu"
        component={SignInPosyandu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignInHBS"
        component={SignInHBS}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignInPakar"
        component={SignInPakar}
        options={{headerShown: false}}
      />
      {/* Akhir */}
      {/* SignUp -> 2 */}
      <Stack.Screen
        name="SignUpCustomer"
        component={SignUpCustomer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpPartner"
        component={SignUpPartner}
        options={{headerShown: false}}
      />
      {/* Akhir */}
      {/* OTP */}
      <Stack.Screen
        name="OtpScreen"
        component={OtpScreen}
        options={{headerShown: false}}
      />
      {/* Akhir */}
      {/* Dashboard */}
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      {/* Akhir */}
      {/* Update Profile -> 4 */}
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
      {/* Akhir */}
      {/* KMS Online 3 */}
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
        name="AddFamilyKMS"
        component={AddFamilyKMS}
        options={{headerShown: false}}
      />
      {/* Akhir */}
      {/* Stunting 2 */}
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
      {/* Akhir */}
      {/* ChatPakar */}
      <Stack.Screen
        name="ChatPakar"
        component={ChatPakar}
        options={{headerShown: false}}
      />
      {/* Akhir */}
      {/* Transaction */}
      <Stack.Screen
        name="Transaction"
        component={Transaction}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailTransaction"
        component={DetailTransaction}
        options={{
          headerShown: false,
        }}
      />
      {/* Akhir */}
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
