import React from 'react';
import {View, Text} from 'react-native';
import ProfilePhoto from '../ProfilePhoto';
import { Gap, TextInput, FileUpload, Button } from '../../atoms';

const InputPosyandu = () => {
  return (
    <View>
      <ProfilePhoto type="camera" />
      <Gap height={20} />
      <TextInput type="secondary" label="Nama Posyandu" />
      <Gap height={35} />
      <FileUpload label="Upload Surat Keterangan Puskesmas" />
      <Gap height={35} />
      <TextInput
        type="secondary"
        label="Alamat Posyandu"
      />
      <Gap height={50} />
      <Button title="Simpan" />
    </View>
  );
};

export default InputPosyandu;