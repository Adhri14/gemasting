import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Line, Link, TextInput} from '../../atoms';
import axios from 'axios';
import {storeData, useForm, showMessage} from '../../../utils';
import {API} from '../../../config';

const EmailView = () => {
  const navigation = useNavigation();
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    axios
      .post(`${API}customer/login`, form)
      .then(res => {
        // console.log(res.data);
        // showMessage({
        //   message: res.data.meta.code,
        // });
        console.log(res.data);
        if (res.data.meta.code === 200) {
          storeData('token', {value: `Bearer ${res.data.data.token}`});
          navigation.reset({
            index: 0,
            routes: [{name: 'MainApp'}],
          });
        } else if (res.data.meta.code === 500) {
          showMessage({
            message: res.data.meta.message,
          });
          return false;
        } else {
          console.log(res.data);
          return true;
        }
      })
      .catch(e => {
        console.log(e);
      });
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
    </View>
  );
};

export default EmailView;

const styles = StyleSheet.create({
  container: {padding: 20},
});
