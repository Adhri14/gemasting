import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ProfilePhoto} from '..';
import {Button, FileUpload, Gap, TextInput} from '../../atoms';

const InputPakar = () => {
  return (
    <View>
      <ProfilePhoto type="camera" />
      <TextInput type="secondary" label="Nama" />
      <Gap height={35} />
      <FileUpload label="Upload STR" />
      <Gap height={35} />
      <TextInput
        type="secondary"
        label="Pengalaman Kerja"
        placeholder="Tahun"
      />
      <Gap height={50} />
      <Button title="Simpan" />
    </View>
  );
};

export default InputPakar;

const styles = StyleSheet.create({});
