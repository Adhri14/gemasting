import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ProfilePhoto from '../ProfilePhoto';
import List from '../List';
import { fonts, mainColors } from '../../../utils';
import { Gap } from '../../atoms';

const ListProfile = () => {
  return(
    <View>
      <ProfilePhoto name="Nama Pengguna" desc="3578102110030001" />
        <View style={styles.container}>
          <List
            icon="edit-profile"
            name="Data Pribadi"
            type="next"
            onPress={() => navigation.navigate('UpdateProfile')}
          />
          <List icon="edit-riwayat" name="Riwayat Transaksi" type="next" />
          <List icon="edit-pengaturan" name="Pengaturan" type="next" />
          <List icon="edit-bantuan" name="Bantuan" type="next" />
        </View>
        <Gap height={30} />
        <View style={{paddingHorizontal: 20}}>
          {/* <Button title="Keluar" /> */}
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.textButton}>Keluar</Text>
          </TouchableOpacity>
        </View>
        <Gap height={15} />
    </View>
  );
};

export default ListProfile;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: mainColors.salmon,
    paddingVertical: 14,
    borderRadius: 5,
  },
  textButton: {
    fontFamily: fonts.primary[600],
    fontSize: 18,
    color: mainColors.white,
  },
  container: {paddingTop: 40},
})