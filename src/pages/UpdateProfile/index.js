import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Header, ProfilePhoto, TextInput, Gap} from '../../components';
import {colors} from '../../utils';

const UpdateProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Data Pribadi" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <ProfilePhoto />
          <TextInput label="Nama Anda" />
          <Gap height={10} />
          <TextInput label="NIK" />
          <Gap height={10} />
          <TextInput label="Tempat Tanggal Lahir" />
          <Gap height={50} />
          <Button title="Simpan" />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 25,
    paddingTop: 0,
  },
});
