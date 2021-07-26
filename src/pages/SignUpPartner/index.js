import DateTimePicker from '@react-native-community/datetimepicker';
import Axios from 'axios';
import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Keyboard,
} from 'react-native';
import {IconCalender} from '../../assets';
import {
  Button,
  Checkbox,
  Gap,
  Header,
  Line,
  Link,
  Picker,
  Radio,
  TextInput,
} from '../../components';
import {colors, fonts, mainColors, storeData, useForm} from '../../utils';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const SignUpPartner = ({navigation}) => {
  // const [form, setForm] = useForm({
  //   name: '',
  //   email: '',
  //   email_recovery: '',
  //   phone_number: '',
  //   gender: '',
  //   address: '',
  //   education: '',
  //   photo: 'default.png',
  //   password: '',
  //   password_confirmation: '',
  //   checked: false,
  // });

  // const [form2, setForm2] = useForm({
  //   name: '',
  //   email: '',
  //   email_recovery: '',
  //   phone_number: '',
  //   address: '',
  //   photo: 'default.png',
  //   password: '',
  //   password_confirmation: '',
  //   checked: false,
  // });

  // const [form3, setForm3] = useForm({
  //   name: '',
  //   email: '',
  //   email_recovery: '',
  //   phone_number: '',
  //   address: '',
  //   photo: 'default.png',
  //   password: '',
  //   password_confirmation: '',
  //   checked: false,
  // });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [email_recovery, setEmail_recovery] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [address, setAddress] = useState('');
  const [photo, setPhoto] = useState('default.png');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');
  const [gender, setGender] = useState('');
  const [checked, setChecked] = useState(false);
  const [education, setEducation] = useState('');

  const isDisplay = 'none';

  // Pengelola data dari state tanggal lahir
  const [birthPlace, setBirthPlace] = useState('');

  const [pakar, setPakar] = useState(null);

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

  const onSubmitPosyandu = () => {
    dispatch({type: 'SET_REGISTER_POSYANDU', value: form});
    Axios.post('https://api.gemasting.com/public/api/posyandu/register', form2)
      .then(successPos => {
        storeData('token', successPos.data.data.token);
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

  const onSubmitHBS = () => {
    dispatch({type: 'SET_REGISTER_HBS', value: data});
    Axios.post('https://api.gemasting.com/public/api/hbs/register', form3)
      .then(successHBS => {
        console.log(successHBS.data.data);
        storeData('token', successHBS.data.data.token);
        navigation.navigate('OtpScreen');
      })
      .catch(e => console.log(e.message));
  };

  const onSubmitGoogleHBS = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    auth()
      .signInWithCredential(googleCredential)
      .then(res => {
        const dataHBS = {
          name: res.user.displayName,
          email: res.user.email,
          phone_number: res.user.phoneNumber,
          uid: res.user.uid,
        };

        Axios.post(
          'https://api.gemasting.com/public/api/hbs/registerByGmail',
          dataHBS,
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

  const Input = () => {
    if (
      pakar === 1 ||
      pakar === 2 ||
      pakar === 3 ||
      pakar === 4 ||
      pakar === 5
    ) {
      return (
        <>
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            label="Email"
            value={email}
            onChangeText={val => setEmail(val)}
          />
          <Gap height={20} />
          <TextInput
            placeholder="Email Recovery"
            keyboardType="email-address"
            label="Email Recovery"
            value={email_recovery}
            onChangeText={val => setEmail_recovery(val)}
          />
          <Gap height={20} />
          <TextInput
            placeholder="+62"
            keyboardType="number-pad"
            label="No Telepon"
            value={phone_number}
            onChangeText={val => setPhone_number(val)}
          />
          <Gap height={20} />
          <TextInput
            placeholder="Nama"
            keyboardType="default"
            label="Nama"
            value={name}
            onChangeText={val => setName(val)}
          />
          <Gap height={20} />
          <Radio
            valueItem1="L"
            valueItem2="P"
            valueGroup={gender}
            onValueChange={val => setGender(val)}
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
          <TextInput
            placeholder="Pendidikan terakhir anda"
            keyboardType="default"
            label="Pendidikan"
            value={education}
            onChangeText={val => setEducation(val)}
          />
          <Gap height={20} />
          <TextInput
            isTextArea
            placeholder="Alamat praktek anda"
            keyboardType="default"
            label="Alamat Praktek"
            value={address}
            onChangeText={val => setAddress(val)}
          />
          <Gap height={20} />
          <TextInput
            isPassword
            label="Password"
            keyboardType="default"
            placeholder="Password"
            value={password}
            onChangeText={val => setPassword(val)}
          />
          <Gap height={20} />
          <TextInput
            isPassword
            label="Ulangi Password"
            placeholder="Ketik ulang password"
            keyboardType="default"
            value={password_confirmation}
            onChangeText={val => setPassword_confirmation(val)}
          />
          <Gap height={10} />
          <Checkbox
            checked={checked ? 'checked' : 'unchecked'}
            onPress={val => setChecked(!checked)}
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
    }
    if (pakar === 6) {
      return (
        <>
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            label="Email"
            value={email}
            onChangeText={val => setEmail(val)}
          />
          <Gap height={20} />
          <TextInput
            placeholder="Email Recovery"
            keyboardType="email-address"
            label="Email Recovery"
            value={email_recovery}
            onChangeText={val => setEmail_recovery(val)}
          />
          <Gap height={20} />
          <TextInput
            placeholder="+62"
            keyboardType="number-pad"
            label="No. Telepon"
            value={phone_number}
            onChangeText={val => setPhone_number(val)}
          />
          <Gap height={20} />
          <TextInput
            placeholder="Nama kantor"
            keyboardType="default"
            label="Nama Kantor"
            value={name}
            onChangeText={val => setName(val)}
          />
          <Gap height={20} />
          <TextInput
            placeholder="Alamat kantor anda"
            isTextArea
            keyboardType="default"
            label="Alamat Kantor"
            value={address}
            onChangeText={val => setAddress(val)}
          />
          <Gap height={20} />
          <TextInput
            placeholder="Pasword"
            keyboardType="default"
            label="Password"
            isPassword
            value={password}
            onChangeText={val => setPassword(val)}
          />
          <Gap height={20} />
          <TextInput
            placeholder="Ketik ulang password"
            label="Ulangi Password"
            keyboardType="default"
            isPassword
            value={password_confirmation}
            onChangeText={val => setPassword_confirmation(val)}
          />
          <Gap height={10} />
          <Checkbox
            checked={checked ? 'checked' : 'unchecked'}
            onPress={val => setChecked(!checked)}
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
    }
    if (pakar === 7) {
      return (
        <>
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            label="Email"
            value={email}
            onChangeText={val => setEmail(val)}
          />
          <Gap height={20} />
          <TextInput
            placeholder="Email Recovery"
            keyboardType="email-address"
            label="Email Recovery"
            value={email_recovery}
            onChangeText={val => setEmail_recovery(val)}
          />
          <Gap height={20} />
          <TextInput
            placeholder="+62"
            keyboardType="number-pad"
            label="No. Telepon"
            value={phone_number}
            onChangeText={val => setPhone_number(val)}
          />
          <Gap height={20} />
          <TextInput
            placeholder="Nama kantor"
            keyboardType="default"
            label="Nama Kantor"
            value={name}
            onChangeText={val => setName(val)}
          />
          <Gap height={20} />
          <TextInput
            placeholder="Alamat kantor anda"
            isTextArea
            keyboardType="default"
            label="Alamat Kantor"
            value={address}
            onChangeText={val => setAddress(val)}
          />
          <Gap height={20} />
          <TextInput
            placeholder="Pasword"
            keyboardType="default"
            label="Password"
            isPassword
            value={password}
            onChangeText={val => setPassword(val)}
          />
          <Gap height={20} />
          <TextInput
            placeholder="Ketik ulang password"
            label="Ulangi Password"
            keyboardType="default"
            isPassword
            value={password_confirmation}
            onChangeText={val => setPassword_confirmation(val)}
          />
          <Gap height={10} />
          <Checkbox
            checked={checked ? 'checked' : 'unchecked'}
            onPress={val => setChecked(!checked)}
          />
          <Gap height={20} />
          <Button title="Daftar Akun" onPress={onSubmitHBS} />
          <Gap height={20} />
          <Line />
          <Gap height={20} />
          <Button
            type="secondary"
            google
            title="Daftar dengan Google"
            onPress={onSubmitGoogleHBS}
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
    }
    return <View />;
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
          <Picker
            label="Pilih Profesi"
            value={pakar}
            onValueChange={val => setPakar(val)}
          />
          <Gap height={30} />
          <View style={styles.line} />
          <Gap height={30} />
          <View style={styles.wrapper(isDisplay)}>
            <Input />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpPartner;

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
  line: {
    height: 1,
    backgroundColor: mainColors.smoke,
    borderRadius: 10,
  },
  wrapper: isDisplay => ({
    display: isDisplay === null ? 'none' : 'flex',
  }),
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
