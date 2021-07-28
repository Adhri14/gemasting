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
} from '../../atoms';
import {useForm, mainColors, fonts, showMessage} from '../../../utils';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import DateTimePicker from '@react-native-community/datetimepicker';
import Axios from 'axios';
import {IconCalender} from '../../../assets';

const PakarInput = () => {
  const [form, setForm] = useForm({
    name: '',
    email: '',
    email_recovery: '',
    phone_number: '',
    gender: '',
    address: '',
    education: '',
    pakar: null,
    photo: 'default.png',
    password: '',
    password_confirmation: '',
    checked: false,
  });
  // Pengelola data dari state tanggal lahir
  const [birthPlace, setBirthPlace] = useState('');

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
    const form = {
      birth: `${birthPlace}, ${moment(date).format('DD MMMM YYYY')}`,
    };

    // mengkombinasikan data objek dari variabel form dan combine
    const data = {
      ...form,
      ...combine,
    };

    dispatch({type: 'SET_REGISTER_PAKAR', value: data});
    Axios.post('https://api.gemasting.com/public/api/pakar/register', data)
      .then(res => {
        console.log(res.data.data);
        navigation.navigate('OtpScreen');
      })
      .catch(e => console.log(e.message));
  };

  const onSubmitGooglePakar = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    auth()
      .signInWithCredential(googleCredential)
      .then(res => {
        const data = {
          name: res.user.displayName,
          email: res.user.email,
          phone_number: res.user.phoneNumber,
          uid: res.user.uid,
        };

        Axios.post(
          'https://api.gemasting.com/public/api/pakar/registerByGmail',
          data,
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
      <Gap height={10} />
      <TextInput
        placeholder="Tempat lahir"
        keyboardType="default"
        label="Tempat lahir"
        value={birthPlace}
        onChangeText={val => setBirthPlace(val)}
      />
      <Gap height={20} />
      <View>
        <Text style={styles.name}>Tanggal Lahir</Text>
        <TouchableOpacity style={styles.container} onPress={showDatepicker}>
          <View style={styles.rowDate}>
            <Text style={styles.placeholder}>
              {moment(date).format('DD-MM-YYYY')}
            </Text>
            <IconCalender />
          </View>
          {show && (
            <DateTimePicker
              value={date}
              mode={mode}
              display="default"
              onChange={onChange}
            />
          )}
        </TouchableOpacity>
      </View>
      <Gap height={20} />
      <Picker
        label="Spesialis"
        value={form.pakar}
        onValueChange={val => setForm('pakar', val)}
        type="pakar"
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
        onPress={val => setForm(!form.checked)}
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
        onPress={() => navigation.navigate('SignIn')}
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
