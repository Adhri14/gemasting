import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  TextInput,
  Gap,
  Button,
  Radio,
  Checkbox,
  Link,
  Line,
  Picker,
  DatePicker,
} from '../../atoms';
import {
  useForm,
  mainColors,
  fonts,
  showMessage,
  storeData,
} from '../../../utils';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import DateTimePicker from '@react-native-community/datetimepicker';
import Axios from 'axios';
import {IconCalender} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
import {API} from '../../../config';

const PakarInput = ({pakar}) => {
  const navigation = useNavigation();
  const [form, setForm] = useForm({
    name: '',
    email: '',
    email_recovery: '',
    phone_number: '',
    gender: '',
    address: '',
    education: '',
    pakar: pakar,
    photo: 'default.png',
    password: '',
    password_confirmation: '',
    checked: false,
  });
  // Pengelola data dari state tanggal lahir

  // Pengelola data dari state tanggal lahir
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  // Fungsi untuk merubah value lama menjadi value baru
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    // setForm('birth', currentDate);
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

  const onSubmitPakar = () => {
    dispatch({type: 'SET_LOADING', value: true});
    const combine = {
      birth: `${moment(date).format('DD-MM-YYYY')}`,
    };

    // mengkombinasikan data objek dari variabel form dan combine
    const data = {
      ...form,
      ...combine,
    };

    dispatch({type: 'SET_REGISTER_PAKAR', value: data});
    if (form.checked === false) {
      dispatch({type: 'SET_LOADING', value: false});
      showMessage({
        message: 'Anda harus menyetujui persyaratan dari Gemasting APP',
      });
    } else {
      Axios.post(`${API}pakar/register`, data)
        .then(res => {
          if (res.data.meta.code === 500) {
            dispatch({type: 'SET_LOADING', value: false});
            showMessage({
              message: res.data.meta.message,
            });
          } else if (res.data.meta.code === 200) {
            dispatch({type: 'SET_LOADING', value: false});
            storeData('token', {value: `Bearer ${res.data.data.token}`});
            storeData('userProfile', res.data.data);
            storeData('provider', {value: 'api'});
            navigation.navigate('OtpScreen');
          } else {
            dispatch({type: 'SET_LOADING', value: false});
            return true;
          }
        })
        .catch(e => {
          dispatch({type: 'SET_LOADING', value: false});
          showMessage({
            message: e.message,
          });
        });
    }
  };

  const onSubmitGooglePakar = async () => {
    // Sign-in the user with the credential
    try {
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      auth()
        .signInWithCredential(googleCredential)
        .then(res => {
          const data = {
            email: res.user.email,
            name: res.user.displayName,
            phone_number: null,
            photo: res.user.photoURL,
            address: null,
            gender: null,
            birth: null,
            pakar: pakar,
          };

          Axios.post(`${API}pakar/register-by-gmail`, data)
            .then(result => {
              if (result.data.meta.code === 500) {
                showMessage({
                  message: result.data.meta.message,
                });
              } else if (result.data.meta.code === 200) {
                storeData('token', {value: `Bearer ${result.data.data.token}`});
                storeData('userProfile', result.data.data);
                storeData('provider', {value: res.user.providerId});
                navigation.reset({
                  index: 0,
                  routes: [{name: 'MainApp'}],
                });
              } else {
                console.log(result.data.data);
              }
            })
            .catch(e => {
              showMessage(e);
            });
        })
        .catch(e => {
          showMessage({
            message: e.message,
          });
        });
    } catch (error) {
      if (error.message === 'Sign in action cancelled') {
        showMessage({
          message: 'Anda membatalkan pilihan akun',
        });
      }
    }
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
        label="No Telepon"
        value={form.phone_number}
        onChangeText={val => setForm('phone_number', val)}
      />
      <Gap height={20} />
      <TextInput
        placeholder="Nama"
        keyboardType="default"
        label="Nama"
        value={form.name}
        onChangeText={val => setForm('name', val)}
      />
      <Gap height={20} />
      <Radio
        valueItem1="L"
        valueItem2="P"
        valueGroup={form.gender}
        onValueChange={val => setForm('gender', val)}
      />
      <Gap height={20} />
      <DatePicker
        value={date}
        onValueChange={onChange}
        type={mode}
        show={show}
        mode="date"
        placeholder={moment(date).format('DD-MM-YYYY')}
        onPress={showDatepicker}
      />
      <Gap height={20} />
      <TextInput
        placeholder="Pendidikan terakhir anda"
        keyboardType="default"
        label="Pendidikan"
        value={form.education}
        onChangeText={val => setForm('education', val)}
      />
      <Gap height={20} />
      <TextInput
        isTextArea
        placeholder="Alamat praktek anda"
        keyboardType="default"
        label="Alamat Praktek"
        value={form.address}
        onChangeText={val => setForm('address', val)}
      />
      <Gap height={20} />
      <TextInput
        isPassword
        label="Password"
        keyboardType="default"
        placeholder="Password"
        value={form.password}
        onChangeText={val => setForm('password', val)}
      />
      <Gap height={20} />
      <TextInput
        isPassword
        label="Ulangi Password"
        placeholder="Ketik ulang password"
        keyboardType="default"
        value={form.password_confirmation}
        onChangeText={val => setForm('password_confirmation', val)}
      />
      <Gap height={10} />
      <Checkbox
        checked={form.checked ? 'checked' : 'unchecked'}
        onPress={val => setForm('checked', !form.checked)}
      />
      <Gap height={20} />
      <Button title="Daftar Akun" onPress={onSubmitPakar} />
      <Gap height={20} />
      <Line />
      <Gap height={20} />
      <Button
        type="secondary"
        google
        title="Daftar dengan Google"
        onPress={onSubmitGooglePakar}
      />
      <Gap height={20} />
      <Link
        onPress={() => navigation.navigate('SignInPakar')}
        title="Sudah punya akun?"
        action="Masuk"
        align="center"
      />
    </>
  );
};

export default PakarInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: mainColors.smoke,
    height: 65,
    borderRadius: 15,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    color: mainColors.black,
    marginBottom: 10,
    fontFamily: fonts.primary[600],
  },
  placeholder: {
    fontSize: 16,
    fontFamily: fonts.primary[500],
    color: mainColors.black,
    zIndex: 1,
  },
  rowDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
