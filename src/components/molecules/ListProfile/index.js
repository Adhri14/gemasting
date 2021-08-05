import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts, getData, showMessage} from '../../../utils';
import {Gap} from '../../atoms';
import List from '../List';
import ProfilePhoto from '../ProfilePhoto';
import {DummyUser} from '../../../assets';

const ListProfile = () => {
  const navigation = useNavigation();

  const [token, setToken] = useState('');
  const [dataProfile, setDataProfile] = useState({
    profile: '',
    name: '',
    role: 0,
    nik: '',
  });

  useEffect(() => {
    getData('token').then(res => {
      setToken(res);
    });
    getData('userProfile').then(resProfile => {
      setDataProfile({
        profile: resProfile.data.photo,
        role: resProfile.data.role_id,
        name: resProfile.data.profile.name,
        nik: resProfile.data.profile.nik,
      });
    });
  }, []);

  console.log(token);
  console.log(dataProfile);

  const Role = () => {
    if (dataProfile.role === 2) {
      return (
        <>
          <ProfilePhoto
            name={dataProfile.name}
            type="profile"
            desc={dataProfile.nik}
            img={
              dataProfile.photo === undefined
                ? DummyUser
                : {uri: `${dataProfile.photo}`}
            }
          />
          <View style={styles.container}>
            <Gap height={30} />
            <Text style={styles.title}>Akun</Text>
            <List
              icon="edit-profile"
              name="Data Pribadi"
              onPress={() => navigation.navigate('UpdateProfileUser')}
            />
            <List icon="edit-bantuan" name="Anggota Keluarga" />
            <List icon="edit-pengaturan" name="Pengaturan" />
            <Gap height={30} />
            <Text style={styles.title}>Lainnya</Text>
            <List icon="edit-bantuan" name="Bantuan" />
            <List icon="edit-info" name="Tentang Aplikasi" />
            <List icon="edit-privasi" name="Kebijakan Privasi" />
          </View>
          <Gap height={15} />
        </>
      );
    }
    if (dataProfile.role === 3) {
      return (
        <>
          <ProfilePhoto
            name={dataProfile.name}
            type="profile"
            desc={dataProfile.nik}
            img={
              dataProfile.photo === undefined
                ? DummyUser
                : {uri: `${dataProfile.photo}`}
            }
          />
          <View style={styles.container}>
            <Gap height={30} />
            <Text style={styles.title}>Akun</Text>
            <List
              icon="edit-profile"
              name="Data Pribadi"
              onPress={() => navigation.navigate('UpdateProfilePakar')}
            />
            <List icon="edit-bantuan" name="Anggota Keluarga" />
            <List icon="edit-pengaturan" name="Pengaturan" />
            <Gap height={30} />
            <Text style={styles.title}>Lainnya</Text>
            <List icon="edit-bantuan" name="Bantuan" />
            <List icon="edit-info" name="Tentang Aplikasi" />
            <List icon="edit-privasi" name="Kebijakan Privasi" />
          </View>
          <Gap height={15} />
        </>
      );
    }
    if (dataProfile.role === 4) {
      return (
        <>
          <ProfilePhoto
            name={dataProfile.name}
            type="profile"
            desc={dataProfile.nik}
            img={
              dataProfile.photo === undefined
                ? DummyUser
                : {uri: `${dataProfile.photo}`}
            }
          />
          <View style={styles.container}>
            <Gap height={30} />
            <Text style={styles.title}>Akun</Text>
            <List
              icon="edit-profile"
              name="Data Posyandu"
              onPress={() => navigation.navigate('UpdateProfilePosyandu')}
            />
            <List icon="edit-bantuan" name="Anggota Keluarga" />
            <List icon="edit-pengaturan" name="Pengaturan" />
            <Gap height={30} />
            <Text style={styles.title}>Lainnya</Text>
            <List icon="edit-bantuan" name="Bantuan" />
            <List icon="edit-info" name="Tentang Aplikasi" />
            <List icon="edit-privasi" name="Kebijakan Privasi" />
          </View>
          <Gap height={15} />
        </>
      );
    }
    if (dataProfile.role === 5) {
      return (
        <>
          <ProfilePhoto
            name={dataProfile.name}
            type="profile"
            desc={dataProfile.nik}
            img={
              dataProfile.photo === undefined
                ? DummyUser
                : {uri: `${dataProfile.photo}`}
            }
          />
          <View style={styles.container}>
            <Gap height={30} />
            <Text style={styles.title}>Akun</Text>
            <List
              icon="edit-profile"
              name="Data HomeBaby Spa"
              onPress={() => navigation.navigate('UpdateProfileHomeBabySpa')}
            />
            <List icon="edit-bantuan" name="Anggota Keluarga" />
            <List icon="edit-pengaturan" name="Pengaturan" />
            <Gap height={30} />
            <Text style={styles.title}>Lainnya</Text>
            <List icon="edit-bantuan" name="Bantuan" />
            <List icon="edit-info" name="Tentang Aplikasi" />
            <List icon="edit-privasi" name="Kebijakan Privasi" />
          </View>
          <Gap height={15} />
        </>
      );
    }
    return <View />;
  };

  return <Role />;
};

export default ListProfile;

const styles = StyleSheet.create({
  // container: {paddingTop: 40},
  title: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: colors.text.primary1,
  },
});
