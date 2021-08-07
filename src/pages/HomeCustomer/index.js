import React, {useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  fonts,
  getData,
  mainColors,
  showMessage,
  storeData,
  useForm,
} from '../../utils';
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
import axios from 'axios';

const HomeCustomer = ({navigation}) => {
  const [token, setToken] = useState('');

  const [dataProfile, setDataProfile] = useState({
    profile: '',
    name: '',
    role: 0,
  });

  useEffect(() => {
    getData('token').then(res => {
      setToken(res);
    });
    getProfile();
  }, []);

  console.log(token.value);

  const getProfile = () => {
    axios({
      url: 'https://api.gemasting.com/public/api/profile',
      method: 'get',
      headers: {
        Authorization: token.value,
      },
    })
      .then(res => {
        setDataProfile({
          profile: res.data.data.profile.photo,
          name: res.data.data.profile.name,
          role: res.data.data.role_id,
        });
        // oke paham bang, ganti res lagi saja ya bang?
        // Saya coba jalankan ya bang
        // Ketika berhasil ambil data user dari API kita simpan data user
        // res.data ini hasil dari respon backend dia mengirimkan data dari res.. tapi kata 'res' ini bisa kita rubah bisa jadi 'berhasil'
        storeData('userProfile', res.data); // ini data user yg sudah di simpan
      })
      .catch(e =>
        showMessage({
          message: e.message,
        }),
      );
  };

  const Role = () => {
    if (dataProfile.role === 2) {
      return (
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
      );
    }
    if (dataProfile.role === 3) {
      return (
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
        </View>
      );
    }
    if (dataProfile.role === 4) {
      return (
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
        </View>
      );
    }
    if (dataProfile.role === 5) {
      return (
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
        </View>
      );
    }

    return (
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
    );
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
            <View>
              <Role />
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
