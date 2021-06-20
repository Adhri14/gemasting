import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts, mainColors} from '../../../utils';
import {Button, Gap, Link, Radio, TextInput, InputPassword} from '../../atoms';

const EmailView = () => {
  return (
    <View style={styles.container}>
      <TextInput label="Email" />
      <Gap height={24} />
      <InputPassword label="Password" />
      <Gap height={40} />
      <Button title="Masuk Akun" />
      <Gap height={10} />
      <Text style={styles.or}>Atau</Text>
      <Gap height={10} />
      <Button google type="secondary" title="Masuk dengan Google" />
      <Gap height={30} />
      <Link
        title="Belum punya akun?"
        action="Daftar"
        size={16}
        align="center"
      />
    </View>
  );
};

export default EmailView;

const styles = StyleSheet.create({
  container: {padding: 20},
  or: {
    textAlign: 'center',
    fontSize: 16,
    color: mainColors.lightSmoke,
    fontFamily: fonts.primary.normal,
  },
});
