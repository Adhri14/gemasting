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

const Profile = ({navigation}) => {
  const [token, setToken] = useState('');
  const [provider, setProvider] = useState({});

  useEffect(() => {
    getData('token').then(res => {
      setToken(res);
    });
    getData('provider').then(res => {
      console.log(res);
      setProvider(res);
    });
  }, []);

  const dispatch = useDispatch();

  const onSignOut = () => {
    // removeData('provider');
    // removeData('userProfile');
    // removeData('token');
    // navigation.reset({
    //   index: 0,
    //   routes: [{name: 'AppIntro'}],
    // });
    dispatch({type: 'SET_LOADING', value: true});
    if (provider.value === 'firebase') {
      try {
        auth()
          .signOut()
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
          .catch(err => {
            dispatch({type: 'SET_LOADING', value: false});
            console.log(err.message);
          });
      } catch (error) {
        dispatch({type: 'SET_LOADING', value: false});
        console.log(error);
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
          // console.log(e.message);
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
