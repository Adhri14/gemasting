import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {TextInput, Link, Button, Gap} from '../../components';

const SignIn = ({label}) => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ILLogo />
        <Text style={styles.title}>Masuk Akun</Text>
        <TextInput label="EmailAddress" />
        <Gap height={24} />
        <TextInput label="Password" />
        <Gap height={10} />
        <Link title="Forgot My Password" size={12} />
        <Gap height={40} />
        <Button text="SignIn" />
        <Gap height={30} />
        <Link title="Create New Account" size={16} align="center" />
      </ScrollView>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-Medium',
    color: '#112340',
    marginTop: 40,
    marginBottom: 40,
  },
});
