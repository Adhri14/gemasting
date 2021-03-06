import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ProfilePhoto from '../ProfilePhoto';
import {
  Button,
  FileUpload,
  Gap,
  Radio,
  TextInput,
  DatePicker,
} from '../../atoms';
import {useNavigation} from '@react-navigation/native';
import {getData, showMessage, storeData} from '../../../utils';
import DocumentPicker from 'react-native-document-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {API} from '../../../config';
import moment from 'moment';

const InputPakar = () => {
  const navigation = useNavigation();

  const [token, setToken] = useState('');
  const [profile, setProfile] = useState({
    name: '',
    birth: '',
    gender: '',
    address: '',
  });
  const [picture, setPicture] = useState({
    photo: '',
  });
  const [file, setFile] = useState({
    document: '',
  });

  // Pengelola data dari state tanggal lahir
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date(profile.birth);
    setShow(Platform.OS === 'ios');
    changeText('birth', currentDate);
  };

  // Fungsi untuk merubah mode ui dan menculkan dan menghide popup
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  // Fungsi untuk memunculkan mode ui berupa tanggal
  const showDatepicker = () => {
    showMode('date');
  };

  const dispatch = useDispatch();
  const {photoReducer, documentReducer} = useSelector(state => state);

  useEffect(() => {
    getData('token').then(res => {
      setToken(res);
    });
    getData('userProfile').then(resProfile => {
      setPicture({photo: resProfile.profile.photo});
      setProfile({
        name: resProfile.profile.name,
        birth: resProfile.profile.birth,
        gender: resProfile.profile.gender,
        address: resProfile.profile.address,
      });
      setFile({document: resProfile.profile.document});
    });
  }, []);

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const addDocument = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      let source = res[0].name;
      const dataDocument = {
        uri: res[0].uri,
        type: res[0].type,
        name: res[0].name,
      };
      setFile({document: source});
      dispatch({type: 'SET_DOCUMENT', value: dataDocument});
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        showMessage({
          message: err.message,
        });
      } else {
        showMessage({
          message: err,
        });
      }
    }
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
    if (photoReducer.name === '' || documentReducer.name === '') {
      axios
        .put(
          `${API}pakar/update-profile`,
          {...profile, photo: picture.photo, document: file.document},
          {
            headers: {Authorization: token.value},
          },
        )
        .then(res => {
          storeData('userProfile', res.data.data);
          navigation.reset({
            index: 0,
            routes: [{name: 'MainApp'}],
          });
          dispatch({type: 'SET_LOADING', value: false});
        })
        .catch(e => {
          dispatch({type: 'SET_LOADING', value: false});
          showMessage(e);
        });
    } else {
      axios
        .post(`${API}iofile/upload-photo-profile`, photoForUpload, {
          headers: {
            Authorization: token.value,
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(resUpload => {
          const documentForUpload = new FormData();
          documentForUpload.append('file', documentReducer);
          axios
            .post(
              `${API}iofile/upload-document-institution`,
              documentForUpload,
              {
                headers: {
                  Authorization: token.value,
                  'Content-Type': 'multipart/form-data',
                },
              },
            )
            .then(resFile => {
              const data = {
                ...profile,
                photo: resUpload.data.data.file,
                document: resFile.data.data.file,
              };
              axios
                .put(`${API}pakar/update-profile`, data, {
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
            });
        })
        .catch(err => {
          showMessage({
            message: 'Anda harus upload foto',
          });
          dispatch({type: 'SET_LOADING', value: false});
        });
    }
  };
  return (
    <View>
      <ProfilePhoto
        type="camera"
        onPress={addPhoto}
        img={{uri: picture.photo !== '' ? picture.photo : null}}
      />
      <Gap height={35} />
      <TextInput
        type="secondary"
        label="Nama"
        placeholder="Nama"
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
      <Gap height={35} />
      <DatePicker
        mode="date"
        value={new Date(profile.birth)}
        onValueChange={onChange}
        type={mode}
        show={show}
        placeholder={moment(new Date(profile.birth)).format('DD-MM-YYYY')}
        onPress={showDatepicker}
        label="Tanggal Lahir"
      />
      <Gap height={35} />
      <TextInput
        type="secondary"
        label="Pengalaman Kerja"
        placeholder="Tahun"
      />
      <Gap height={35} />
      <TextInput
        type="secondary"
        label="Alamat Praktek"
        placeholder="Alamat Praktek"
        isTextArea
        value={profile.address}
        onChangeText={val => changeText('address', val)}
      />
      <Gap height={35} />
      <FileUpload
        label="Upload STR"
        onPress={addDocument}
        text={file.document !== '' ? file.document : '(MAX 2MB)'}
      />
      <Gap height={50} />
      <Button title="Simpan" onPress={updateProfile} />
    </View>
  );
};

export default InputPakar;

const styles = StyleSheet.create({});
