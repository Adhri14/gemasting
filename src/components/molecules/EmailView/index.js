import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Line, Link, TextInput} from '../../atoms';
import Axios from 'axios';
import {useForm} from '../../../utils';

const EmailView = () => {
  const navigation = useNavigation();
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    Axios.post('https://api.gemasting.com/public/api/customer/login', form)
      .then(res => {
        console.log(res.data.data);
        navigation.navigate('MainApp');
      })
      .catch(e => console.log(e.message));
    // console.log('OK');
  };
  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        keyboardType="email-address"
        placeholder="Email"
        value={form.email}
        onChangeText={val => setForm('email', val)}
      />
      <Gap height={20} />
      <TextInput
        label="Password"
        keyboardType="default"
        placeholder="Password"
        isPassword
        value={form.password}
        onChangeText={val => setForm('password', val)}
      />
      <Gap height={40} />
      <Button title="Masuk Akun" onPress={onSubmit} />
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
