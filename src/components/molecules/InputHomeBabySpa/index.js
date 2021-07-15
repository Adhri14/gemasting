import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ProfilePhoto from '../ProfilePhoto';
import {Button, FileUpload, Gap, TextInput} from '../../atoms';

const InputHomeBabySpa = () => {
  return (
    <View>
      <ProfilePhoto type="camera" />
      <Gap height={20} />
      <TextInput type="secondary" label="Nama HomeBaby Spa" />
      <Gap height={35} />
      <FileUpload label="Upload Surat LSP" />
      <Gap height={35} />
      <TextInput type="secondary" label="Alamat HomeBaby Spa" />
      <Gap height={50} />
      <Button title="Simpan" />
    </View>
  );
};

export default InputHomeBabySpa;

const styles = StyleSheet.create({});
