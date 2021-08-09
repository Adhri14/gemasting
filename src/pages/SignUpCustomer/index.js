import Axios from 'axios';
import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  Button,
  Checkbox,
  Gap,
  Header,
  Line,
  Link,
  TextInput,
  Radio,
} from '../../components';
import {
  colors,
  fonts,
  mainColors,
  useForm,
  showMessage,
  storeData,
} from '../../utils';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import moment from 'moment';
import {IconCalender} from '../../assets';
import DateTimePicker from '@react-native-community/datetimepicker';
import {API} from '../../config';

const SignUpCustomer = ({navigation}) => {
  const [form, setForm] = useForm({
    name: '',
    email: '',
    email_recovery: '',
    password: '',
    password_confirmation: '',
    phone_number: '',
    checked: false,
    gender: '',
    address: '',
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

  const onSubmit = () => {
    // mengkombinasikan data variabel tempat lahir dan tanggal lahir menjadi sebuah objek
    const combine = {
      birth: `${birthPlace}, ${moment(date).format('DD MMMM YYYY')}`,
    };

    // mengkombinasikan data objek dari variabel form dan combine
    const data = {
      ...form,
      ...combine,
    };

    dispatch({type: 'SET_REGISTER_CUSTOMER', value: data});

    console.log(data);
    Axios.post(`${API}customer/register`, data)
      .then(res => {
        storeData('token', {value: `Bearer ${res.data.data.token}`});
        navigation.navigate('OtpScreen');
      })
      .catch(e => {
        console.log(e);
        // showMessage({
        //   message: e.data,
        // });
        // showMessage({
        //   message: e.message,
        // });
      });
  };

  const onSubmitGoogle = async () => {
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
          photo: res.user.photoURL,
        };

        Axios.post(`${API}customer/registerByGmail`, data)
          .then(result => {
            navigation.reset({
              index: 0,
              routes: [{name: 'MainApp'}],
            });
          })
          .catch(error => {
            showMessage({
              message: error.message,
            });
          });
      })
      .catch(e =>
        showMessage({
          message: e,
        }),
      );
  };

  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={mainColors.smoke} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header onPress={() => navigation.goBack()} />
        <View style={styles.content}>
          <Gap height={10} />
          <Text style={styles.title}>Daftar Akun</Text>
          <Gap height={15} />
          <TextInput
            value={form.email}
            onChangeText={val => setForm('email', val)}
            placeholder="Email"
            keyboardType="email-address"
            label="Email"
          />
          <Gap height={25} />
          <TextInput
            value={form.email_recovery}
            onChangeText={val => setForm('email_recovery', val)}
            placeholder="Email pemulihan"
            keyboardType="email-address"
            label="Email Pemulihan"
          />
          <Gap height={25} />
          <TextInput
            value={form.phone_number}
            onChangeText={val => setForm('phone_number', val)}
            placeholder="+62"
            keyboardType="number-pad"
            label="No. Telepon"
          />
          <Gap height={25} />
          <TextInput
            value={form.name}
            onChangeText={val => setForm('name', val)}
            placeholder="Nama"
            keyboardType="default"
            label="Nama"
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
            onChangeText={val => {
              setBirthPlace(val);
              // setForm('birth', val);
            }}
          />
          <Gap height={25} />
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
          <Gap height={25} />
          <TextInput
            isTextArea
            placeholder="Alamat rumah anda"
            keyboardType="default"
            label="Alamat Rumah"
            value={form.address}
            onChangeText={val => setForm('address', val)}
          />
          <Gap height={25} />
          <TextInput
            isPassword
            placeholder="Password"
            value={form.password}
            onChangeText={val => setForm('password', val)}
            label="Password"
          />
          <Gap height={25} />
          <TextInput
            value={form.password_confirmation}
            onChangeText={val => setForm('password_confirmation', val)}
            isPassword
            placeholder="Ketik ulang password"
            label="Ulangi Password"
            keyboardType="default"
          />
          <Gap height={10} />
          <Checkbox
            checked={form.checked ? 'checked' : 'unchecked'}
            onPress={() => setForm('checked', !form.checked)}
          />
          <Gap height={20} />
          <Button title="Daftar Akun" onPress={onSubmit} />
          <Gap height={20} />
          <Line />
          <Gap height={20} />
          <Button
            type="secondary"
            google
            title="Daftar dengan Google"
            onPress={onSubmitGoogle}
          />
          <Gap height={20} />
          <Link
            onPress={() => navigation.navigate('SignIn')}
            title="Sudah punya akun?"
            action="Masuk"
            align="center"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpCustomer;

const styles = StyleSheet.create({
  page: {
    backgroundColor: mainColors.lightSmoke,
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
  },
  content: {
    padding: 20,
    paddingTop: 0,
    backgroundColor: colors.white,
    flex: 1,
  },
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
