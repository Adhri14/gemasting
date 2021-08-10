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

const Profile = ({navigation}) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    getData('token').then(res => {
      setToken(res);
    });
  }, []);

  const onSignOut = () => {
    axios({
      url: `${API}logout`,
      method: 'post',
      headers: {
        Authorization: token.value,
      },
    })
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{name: 'AppIntro'}],
        });
        removeData('token');
        removeData('userProfile');
      })
      .catch(e => {
        showMessage({
          message: e.message,
        });
      });
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
