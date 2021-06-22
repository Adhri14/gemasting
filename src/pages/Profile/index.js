import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ProfilePhoto, List} from '../../components';
import {colors} from '../../utils';

const Profile = () => {
  return (
    <View style={styles.page}>
      <ProfilePhoto />
      <List
        icon="edit-profile"
        name="Data Pribadi"
        desc="Edit Profile Anda"
        type="next"
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
