import React, {useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {fonts, getData, mainColors, useForm} from '../../utils';
import {CardButton, Gap, HeaderHome} from '../../components';
import {
  DummyUser,
  IconImage,
  IlChatPakar,
  IlJanji,
  IlKMS,
  IlKomunitas,
  IlRekamMedis,
  IlStunting,
} from '../../assets';
import Axios from 'axios';
// import Axios from './'

const HomeCustomer = ({navigation}) => {
  const [token, setToken] = useState('');

  const [dataProfile, setDataProfile] = useState({
    profile: '',
    name: '',
  });

  useEffect(() => {
    getData('token').then(res => {
      setToken(res);
    });
    getProfile();
  }, []);

  const getProfile = () => {
    Axios.get('https://api.gemasting.com/public/api/profile', {
      headers: {Authorization: `Bearer ${token}`},
    })
      .then(res => {
        setDataProfile({
          profile: res.data.data.profile.photo,
        });
        setDataProfile({
          name: res.data.data.profile.name,
        });
      })
      .catch(e => console.log(e.message));
  };

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <StatusBar backgroundColor={mainColors.smoke} barStyle="dark-content" />
        <HeaderHome
          img={
            dataProfile.profile === null
              ? DummyUser
              : {uri: `${dataProfile.profile}`}
          }
          name={dataProfile.name}
        />
        <View style={styles.container}>
          <View style={styles.banner}>
            <IconImage />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>Fitur Kami</Text>
            <View style={styles.wrapper}>
              <CardButton label="Chat Pakar">
                <IlChatPakar />
              </CardButton>
              <CardButton label="Buat Janji">
                <IlJanji />
              </CardButton>
              <CardButton
                label="KMS Online"
                onPress={() => navigation.navigate('KmsOnline')}>
                <IlKMS />
              </CardButton>
              <CardButton
                label="Cek Stunting"
                onPress={() => navigation.navigate('Stunting')}>
                <IlStunting />
              </CardButton>
              <CardButton label="Rekam Medis">
                <IlRekamMedis />
              </CardButton>
              <CardButton label="Komunitas">
                <IlKomunitas />
              </CardButton>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeCustomer;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: mainColors.lightSmoke,
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  container: {
    marginBottom: 120,
    marginTop: 40,
  },
  banner: {
    backgroundColor: mainColors.smoke,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    height: 150,
  },
  content: {
    marginTop: 40,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: mainColors.pink,
  },
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});
