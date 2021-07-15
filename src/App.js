import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import Router from './router';
import {Provider} from 'react-redux';
import store from './redux/store';
import FlashMessage from 'react-native-flash-message';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '320149601856-oqcnaank0c879lq65jeqen370dslpf04.apps.googleusercontent.com',
    });
  }, []);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Router />
        <FlashMessage position="top" />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
