import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Line, Link, TextInput} from '../../atoms';
import Axios from 'axios';
import {showMessage, storeData, useForm} from '../../../utils';
import {API} from '../../../config';
import {useDispatch} from 'react-redux';

const EmailViewPakar = () => {
  const navigation = useNavigation();
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const onSubmit = () => {
    Axios.post(`${API}pakar/login`, form)
      .then(res => {
        if (res.data.meta.code === 200) {
          storeData('token', {value: `Bearer ${res.data.data.token}`});
          storeData('userProfile', res.data.data);
          navigation.reset({
            index: 0,
            routes: [{name: 'MainApp'}],
          });
          dispatch({type: 'SET_LOADING', value: false});
        } else if (res.data.meta.code === 500) {
          showMessage({
            message: res.data.meta.message,
          });
          dispatch({type: 'SET_LOADING', value: false});
        } else {
          dispatch({type: 'SET_LOADING', value: false});
        }
      })
      .catch(e => {
        showMessage(e.message);
        dispatch({type: 'SET_LOADING', value: false});
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

export default EmailViewPakar;

const styles = StyleSheet.create({
  container: {padding: 20},
});
