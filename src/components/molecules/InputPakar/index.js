import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ProfilePhoto from '../ProfilePhoto';
import {Button, FileUpload, Gap, TextInput} from '../../atoms';
import {useNavigation} from '@react-navigation/native';
import {getData} from '../../../utils';

const InputPakar = () => {
  const navigation = useNavigation();
  const [token, setToken] = useState('');
  const [profile, setProfile] = useState({
    name: '',
    str: '',
  });
  useEffect(() => {
    getData('token').then(res => {
      setToken(res);
    });
    getData('userProfile').then(resProfile => {
      setProfile({
        name: resProfile.data.profile.name,
        str: resProfile.data.profile.str,
      });
    });
  }, []);

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const updateProfile = () => {
    axios
      .put(`${API}pakar/update-profile`, profile, {
        headers: {Authorization: token.value},
      })
      .then(res => {
        navigation.reset({
          index: 0,
          routes: [{name: 'MainApp'}],
        });
      })
      .catch(e => {
        showMessage(e);
      });
  };
  return (
    <View>
      <ProfilePhoto type="camera" />
      <TextInput type="secondary" label="Nama" placeholder="Nama" />
      <Gap height={35} />
      <FileUpload label="Upload STR" />
      <Gap height={35} />
      <TextInput
        type="secondary"
        label="Pengalaman Kerja"
        placeholder="Tahun"
      />
      <Gap height={50} />
      <Button title="Simpan" onPress={updateProfile} />
    </View>
  );
};

export default InputPakar;

const styles = StyleSheet.create({});
