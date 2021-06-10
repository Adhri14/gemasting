import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import {colors, fonts} from '../../utils';

const SignUp = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <View style={styles.content}>
          <TextInput label="Email" />
          <Gap height={10} />
          <TextInput label="No Telepon" />
          <Gap height={10} />
          <TextInput label="Alamat Praktek" />
          <Gap height={10} />
          <TextInput label="Password" />
          <Gap height={24} />
          <Button text="Daftar Akun" />
          <Gap height={10} />
          <Button text="Daftar Akun dengan Google" />
          <Gap height={30} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: '#112340',
    marginTop: 40,
    marginBottom: 40,
  },
});
