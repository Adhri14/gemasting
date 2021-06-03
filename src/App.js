import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {GetStarted, SignIn, SplashScreen} from './pages';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
      {/* <GetStarted /> */}
      {/* <SignIn /> */}
      {/* <SplashScreen /> */}
    </NavigationContainer>
  );
};

export default App;
