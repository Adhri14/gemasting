import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {API} from '../../../config';
import {getData, showMessage, storeData} from '../../../utils';
import {Button, Gap, Radio, TextInput} from '../../atoms';
import ProfilePhoto from '../ProfilePhoto';

const InputCustomer = () => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState({
    name: '',
    nik: '',
    birth: '',
    address: '',
    gender: '',
    photo: '',
  });
  const [token, setToken] = useState('');
  const [picture, setPicture] = useState({
    photo: '',
  });

  const dispatch = useDispatch();
  const {photoReducer} = useSelector(state => state);

  useEffect(() => {
    getData('userProfile').then(res => {
      setPicture({photo: res.profile.photo});
      setProfile({
        name: res.profile.name,
        nik: res.profile.nik,
        birth: res.profile.birth,
        address: res.profile.address,
        gender: res.profile.gender,
      });
    });
    getData('token').then(resToken => {
      setToken(resToken);
    });
  }, []);

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const addPhoto = () => {
    launchImageLibrary(
      {
        quality: 0.7,
        maxWidth: 200,
        maxHeight: 200,
      },
      response => {
        if (response.didCancel || response.error) {
          showMessage({
            message: 'Anda tidak memilih photo',
          });
        } else {
          let source = response.assets[0].uri;
          const dataImage = {
            uri: source,
            name: response.assets[0].fileName,
            type: response.assets[0].type,
          };
          setPicture({photo: source});
          dispatch({type: 'SET_PHOTO', value: dataImage});
        }
      },
    );
  };

  const updateProfile = () => {
    dispatch({type: 'SET_LOADING', value: true});
    const photoForUpload = new FormData();
    photoForUpload.append('file', photoReducer);
    axios
      .post(`${API}iofile/upload-photo-profile`, photoForUpload, {
        headers: {
          Authorization: token.value,
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(resUpload => {
        const data = {
          ...profile,
          photo: resUpload.data.data.file,
        };
        axios
          .put(`${API}customer/update-profile`, data, {
            headers: {Authorization: token.value},
          })
          .then(res => {
            storeData('userProfile', res.data.data);
            navigation.reset({
              index: 0,
              routes: [{name: 'MainApp'}],
            });
            dispatch({type: 'SET_LOADING', value: false});
          })
          .catch(e => {
            showMessage(e);
            dispatch({type: 'SET_LOADING', value: false});
          });
      })
      .catch(err => {
        showMessage({
          message: 'Anda harus upload foto',
        });
        dispatch({type: 'SET_LOADING', value: false});
      });
  };

  return (
    <View>
      <ProfilePhoto
        type="camera"
        onPress={addPhoto}
        img={{uri: picture.photo !== '' ? picture.photo : null}}
      />
      <TextInput
        label="Nama Anda"
        value={profile.name}
        onChangeText={val => changeText('name', val)}
      />
      <Gap height={35} />
      <Radio
        valueItem1="L"
        valueItem2="P"
        valueGroup={profile.gender}
        onValueChange={val => changeText('gender', val)}
      />
      <Gap height={25} />
      <TextInput
        label="NIK"
        value={profile.nik}
        keyboardType="number-pad"
        onChangeText={val => changeText('nik', val)}
      />
      <Gap height={35} />
      <TextInput
        label="Tempat Tanggal Lahir"
        value={profile.birth}
        onChangeText={val => changeText('birth', val)}
      />
      <Gap height={50} />
      <Button title="Simpan" onPress={updateProfile} />
    </View>
  );
};

export default InputCustomer;

const styles = StyleSheet.create({});
