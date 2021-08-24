import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import Router from './router';
import {Provider, useSelector} from 'react-redux';
import store from './redux/store';
import FlashMessage from 'react-native-flash-message';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Loading} from './components';
import * as Sentry from '@sentry/react-native';

const MainApp = () => {
  const {loading} = useSelector(state => state.loadingReducer);
  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position="top" />
      {loading && <Loading />}
    </NavigationContainer>
  );
};

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      // 320149601856-oqcnaank0c879lq65jeqen370dslpf04.apps.googleusercontent.com
      webClientId:
        '320149601856-oqcnaank0c879lq65jeqen370dslpf04.apps.googleusercontent.com',
    });
  }, []);

  Sentry.init({
    dsn: 'https://c3960286c9164e339a47eb3a93a80a31@o968512.ingest.sentry.io/5919857',
  });
  // Sentry.nativeCrash();
  // throw new Error('My first Sentry error!');

  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
