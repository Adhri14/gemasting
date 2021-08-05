import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput, Gap, Button, Radio, Checkbox, Link, Line} from '../../atoms';
import {
  useForm,
  mainColors,
  fonts,
  showMessage,
  storeData,
} from '../../../utils';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import DateTimePicker from '@react-native-community/datetimepicker';
import Axios from 'axios';
import {IconCalender} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const PosyanduInput = () => {
  const navigation = useNavigation();
  const [form, setForm] = useForm({
    name: '',
    email: '',
    email_recovery: '',
    phone_number: '',
    address: '',
    photo: 'default.png',
    password: '',
    password_confirmation: '',
    checked: false,
  });

  const dispatch = useDispatch();

  const onSubmitPosyandu = () => {
    dispatch({type: 'SET_REGISTER_POSYANDU', value: form});
    Axios.post('https://api.gemasting.com/public/api/posyandu/register', form)
      .then(successPos => {
        storeData('token', {value: `Bearer ${res.data.data.token}`});
        navigation.navigate('OtpScreen');
      })
      .catch(e => console.log(e.message));
  };

  const onSubmitGooglePosyandu = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    auth()
      .signInWithCredential(googleCredential)
      .then(res => {
        const dataPos = {
          name: res.user.displayName,
          email: res.user.email,
          phone_number: res.user.phoneNumber,
          uid: res.user.uid,
        };

        Axios.post(
          'https://api.gemasting.com/public/api/posyandu/registerByGmail',
          dataPos,
        )
          .then(res => {
            console.log(res.data.data);
            navigation.reset({
              index: 0,
              routes: [{name: 'MainApp'}],
            });
          })
          .catch(e => console.log(e.message));
      })
      .catch(e =>
        showMessage({
          message: e,
        }),
      );
  };
  return (
    <>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        label="Email"
        value={form.email}
        onChangeText={val => setForm('email', val)}
      />
      <Gap height={20} />
      <TextInput
        placeholder="Email Recovery"
        keyboardType="email-address"
        label="Email Recovery"
        value={form.email_recovery}
        onChangeText={val => setForm('email_recovery', val)}
      />
      <Gap height={20} />
      <TextInput
        placeholder="+62"
        keyboardType="number-pad"
        label="No. Telepon"
        value={form.phone_number}
        onChangeText={val => setForm('phone_number', val)}
      />
      <Gap height={20} />
      <TextInput
        placeholder="Nama kantor"
        keyboardType="default"
        label="Nama Kantor"
        value={form.name}
        onChangeText={val => setForm('name', val)}
      />
      <Gap height={20} />
      <TextInput
        placeholder="Alamat kantor anda"
        isTextArea
        keyboardType="default"
        label="Alamat Kantor"
        value={form.address}
        onChangeText={val => setForm('address', val)}
      />
      <Gap height={20} />
      <TextInput
        placeholder="Pasword"
        keyboardType="default"
        label="Password"
        isPassword
        value={form.password}
        onChangeText={val => setForm('password', val)}
      />
      <Gap height={20} />
      <TextInput
        placeholder="Ketik ulang password"
        label="Ulangi Password"
        keyboardType="default"
        isPassword
        value={form.password_confirmation}
        onChangeText={val => setForm('password_confirmation', val)}
      />
      <Gap height={10} />
      <Checkbox
        checked={form.checked ? 'checked' : 'unchecked'}
        onPress={val => setForm('checked', !form.checked)}
      />
      <Gap height={20} />
      <Button title="Daftar Akun" onPress={onSubmitPosyandu} />
      <Gap height={20} />
      <Line />
      <Gap height={20} />
      <Button
        type="secondary"
        google
        title="Daftar dengan Google"
        onPress={onSubmitGooglePosyandu}
      />
      <Gap height={20} />
      <Link
        onPress={() => navigation.navigate('SignIn')}
        title="Sudah punya akun?"
        action="Masuk"
        align="center"
      />
    </>
  );
};

export default PosyanduInput;

const styles = StyleSheet.create({});
