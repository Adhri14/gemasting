import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ProfilePhoto from '../ProfilePhoto';
import {Button, Gap, TextInput} from '../../atoms';
import {getData, colors} from '../../../utils';
import {useEffect} from 'react';

const InputCustomer = () => {
  const [profile, setProfile] = useState({
    fullName: '',
    NIK: '',
    TglLahir: '',
  });
  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  }, []);
  return (
    <View>
      <ProfilePhoto type="camera" />
      <TextInput label="Nama Anda" />
      <Gap height={35} />
      <TextInput label="NIK" />
      <Gap height={35} />
      <TextInput label="Tempat Tanggal Lahir" />
      <Gap height={50} />
      <Button title="Simpan" />
    </View>
  );
};

export default InputCustomer;

const styles = StyleSheet.create({});
