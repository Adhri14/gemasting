import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ProfilePhoto, List} from '../../components';
import {colors} from '../../utils';

const Profile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ProfilePhoto name="Nama Pengguna" desc="3578102110030001" />
      <List
        icon="edit-profile"
        name="Data Pribadi"
        desc="Edit Profile Anda"
        type="next"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        icon="edit-riwayat"
        name="Riwayat Transaksi"
        desc="Lihat Daftar Transaksi"
        type="next"
      />
      <List
        icon="edit-pengaturan"
        name="Pengaturan"
        desc="Edit Pengguna Anda"
        type="next"
      />
      <List
        icon="edit-bantuan"
        name="Bantuan"
        desc="Edit Pengguna Anda"
        type="next"
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginTop: 40,
    backgroundColor: colors.white,
  },
});
