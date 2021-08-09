import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import ProfilePhoto from '../ProfilePhoto';
import {Gap, TextInput, FileUpload, Button} from '../../atoms';
import {getData} from '../../../utils';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {API} from '../../../config';

const InputPosyandu = () => {
  const navigation = useNavigation();
  const [token, setToken] = useState('');

  const [dataProfile, setDataProfile] = useState({
    profile: '',
    name: '',
    address: '',
  });

  useEffect(() => {
    getData('token').then(res => {
      setToken(res);
    });
    getProfile();
  }, []);

  const getProfile = () => {
    axios({
      url: `${API}profile`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'get',
    })
      .then(res => {
        // setDataProfile(res.data.data);
        setDataProfile({
          profile: res.data.data.profile.photo,
          name: res.data.data.profile.name,
          role: res.data.data.role_id,
          nik: res.data.data.profile.nik,
          address: res.data.data.profile.address,
        });
      })
      .catch(e => console.log(e.message));
  };
  return (
    <View>
      <ProfilePhoto type="camera" />
      <Gap height={20} />
      <TextInput
        type="secondary"
        value={dataProfile.name}
        label="Nama Posyandu"
      />
      <Gap height={35} />
      <FileUpload label="Upload Surat Keterangan Puskesmas" />
      <Gap height={35} />
      <TextInput
        type="secondary"
        value={dataProfile.address}
        label="Alamat Posyandu"
      />
      <Gap height={50} />
      <Button title="Simpan" />
    </View>
  );
};

export default InputPosyandu;
