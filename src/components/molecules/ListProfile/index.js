import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ProfilePhoto from '../ProfilePhoto';
import List from '../List';
import {colors, fonts, mainColors} from '../../../utils';
import {Button, Gap} from '../../atoms';
import {useNavigation} from '@react-navigation/native';

const ListProfile = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ProfilePhoto
        name="Nama Pengguna"
        type="profile"
        desc="3578102110030001"
      />
      <View style={styles.container}>
        <Gap height={30} />
        <Text style={styles.title}>Akun</Text>
        <List
          icon="edit-profile"
          name="Data Pribadi"
          onPress={() => navigation.navigate('UpdateProfile')}
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
