import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ProfilePhoto, List, Gap, Button} from '../../components';
import {colors, fonts, mainColors} from '../../utils';

const Profile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={40} />
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
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    // marginTop: 40,
    backgroundColor: colors.white,
  },
  container: {paddingHorizontal: 20, paddingTop: 60},
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
});
