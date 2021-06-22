import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ProfilePhoto} from '..';
import {Button, Gap, TextInput} from '../../atoms';

const InputCustomer = () => {
  return (
    <View>
      <ProfilePhoto />
      <TextInput type="secondary" label="Nama Anda" />
      <Gap height={35} />
      <TextInput type="secondary" label="NIK" />
      <Gap height={35} />
      <TextInput type="secondary" label="Tempat Tanggal Lahir" />
      <Gap height={50} />
      <Button title="Simpan" />
    </View>
  );
};

export default InputCustomer;

const styles = StyleSheet.create({});
