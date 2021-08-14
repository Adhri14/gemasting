import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import Router from './router';
import {Provider, useSelector} from 'react-redux';
import store from './redux/store';
import FlashMessage from 'react-native-flash-message';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Loading} from './components';

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

  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
