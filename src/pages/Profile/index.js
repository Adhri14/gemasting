import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ProfilePhoto, List, Gap, Button, ListProfile} from '../../components';
import {
  colors,
  fonts,
  mainColors,
  getData,
  removeData,
  showMessage,
} from '../../utils';
import axios from 'axios';
import {API} from '../../config';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Profile = ({navigation}) => {
  const [token, setToken] = useState('');
  const [provider, setProvider] = useState({});

  useEffect(() => {
    getData('token').then(res => {
      setToken(res);
    });
    getData('provider').then(res => {
      setProvider(res);
    });
  }, []);

  const dispatch = useDispatch();

  const onSignOut = async () => {
    // removeData('token');
    //         removeData('userProfile');
    //         removeData('provider');
    //         navigation.reset({
    //           index: 0,
    //           routes: [{name: 'AppIntro'}],
    //         });
    dispatch({type: 'SET_LOADING', value: true});
    if (provider.value === 'firebase') {
      try {
        dispatch({type: 'SET_LOADING', value: false});
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        auth()
          .signOut()
          .then(() => {
            removeData('token');
            removeData('userProfile');
            removeData('provider');
            navigation.reset({
              index: 0,
              routes: [{name: 'AppIntro'}],
            });
          });
      } catch (error) {
        dispatch({type: 'SET_LOADING', value: false});
        showMessage({message: error.message});
      }
    }
    if (provider.value === 'api') {
      axios({
        url: `${API}logout`,
        method: 'post',
        headers: {
          Authorization: token.value,
        },
      })
        .then(() => {
          dispatch({type: 'SET_LOADING', value: false});
          navigation.reset({
            index: 0,
            routes: [{name: 'AppIntro'}],
          });
          removeData('token');
          removeData('userProfile');
          removeData('provider');
        })
        .catch(e => {
          dispatch({type: 'SET_LOADING', value: false});
          showMessage({
            message: e.message,
          });
        });
    }
  };

  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={mainColors.smoke} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={50} />
        <View style={styles.container}>
          <Text style={styles.title}>Profile</Text>
          <Gap height={30} />
          <ListProfile />
          <View>
            <Button title="Keluar" type="button-danger" onPress={onSignOut} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    // marginTop: 40,
    backgroundColor: mainColors.lightSmoke,
  },
  container: {paddingHorizontal: 20, marginBottom: 150},
  title: {
    fontSize: 25,
    fontFamily: fonts.primary[600],
  },
});
