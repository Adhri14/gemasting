import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ProfilePhoto from '../ProfilePhoto';
import List from '../List';
import {colors, fonts, mainColors, getData} from '../../../utils';
import {Button, Gap} from '../../atoms';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const ListProfile = () => {
  const navigation = useNavigation();
  const [token, setToken] = useState({
    tkn: '',
  });

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
    getProfile();
  }, []);

  const getProfile = () => {
    axios({
      url: 'https://api.gemasting.com/public/api/profile',
      headers: {
        Authorization: `Bearer ${token.tkn}`,
      },
      method: 'get',
    })
      .then(res => {
        // setDataProfile(res.data.data);
        setDataProfile({
          profile: res.data.data.profile.photo,
          name: res.data.data.profile.name,
          role: res.data.data.role_id,
          nik: res.data.data.profile.nik,
        });
      })
      .catch(e => console.log(e.message));
  };

  const Role = () => {
    if (dataProfile.role === 2) {
      return (
        <View>
          <ProfilePhoto
            name={dataProfile.name}
            type="profile"
            desc={dataProfile.nik}
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
        </View>
      );
    }
    if (dataProfile.role === 3) {
      return (
        <View>
          <ProfilePhoto
            name={dataProfile.name}
            type="profile"
            desc={dataProfile.nik}
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
        </View>
      );
    }
    if (dataProfile.role === 4) {
      return (
        <View>
          <ProfilePhoto
            name={dataProfile.name}
            type="profile"
            desc={dataProfile.nik}
          />
          <View style={styles.container}>
            <Gap height={30} />
            <Text style={styles.title}>Akun</Text>
            <List
              icon="edit-profile"
              name="Data Pribadi"
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
        </View>
      );
    }
    if (dataProfile.role === 5) {
      return (
        <View>
          <ProfilePhoto
            name={dataProfile.name}
            type="profile"
            desc={dataProfile.nik}
          />
          <View style={styles.container}>
            <Gap height={30} />
            <Text style={styles.title}>Akun</Text>
            <List
              icon="edit-profile"
              name="Data Pribadi"
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
        </View>
      );
    }
    return <View />;
  };

  return (
    <View>
      <Role />
    </View>
  );
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
