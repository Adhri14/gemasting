import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts, mainColors} from '../../../utils';
import {
  Button,
  Gap,
  Link,
  Radio,
  TextInput,
  InputPassword,
  Line,
} from '../../atoms';
import {useNavigation} from '@react-navigation/native';

const EmailView = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TextInput label="Email" placeholder="Email" />
      <Gap height={20} />
      <TextInput label="Password" placeholder="Password" isPassword />
      <Gap height={40} />
      <Button
        title="Masuk Akun"
        onPress={() => navigation.navigate('MainApp')}
      />
      <Gap height={20} />
      <Line />
      <Gap height={20} />
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
});
