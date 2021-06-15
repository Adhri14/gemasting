import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import {colors, fonts} from '../../utils';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header onPress={() => navigation.goBack()} title="Daftar Akun User" />
        <View style={styles.content}>
          <TextInput label="Email" />
          <Gap height={10} />
          <TextInput label="No Telepon" />
          <Gap height={10} />
          <TextInput label="Password" />
          <Gap height={10} />
          <TextInput label="Recovery Password" />
          <Gap height={24} />
          <Button
            title="Daftar Akun"
            onPress={() => navigation.navigate('OtpScreen')}
          />
          <Gap height={10} />
          <Button title="Daftar Akun dengan Gmail" />
          <Gap height={30} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
  },
});
