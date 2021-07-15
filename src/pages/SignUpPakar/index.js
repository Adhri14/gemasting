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
import {colors, fonts, mainColors, useForm} from '../../utils';
import {useDispatch} from 'react-redux';
import moment from 'moment';

const SignUpPakar = ({navigation}) => {
  // Pengelola data dari state form
  const [form, setForm] = useForm({
    name: '',
    email: '',
    email_recovery: '',
    phone_number: '',
    gender: '',
    address: '',
    education: '',
    photo: 'default.png',
    pakar: 1,
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

  // Fungsi untuk mengirimkan data ke API
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
    dispatch({type: 'SET_REGISTER_PAKAR', value: data});
    Axios.post('https://api.gemasting.com/public/api/pakar/register', data)
      .then(res => {
        console.log(res.data.data);
        navigation.navigate('OtpScreen');
      })
      .catch(e => console.log(e.message));
  };

  const onSubmitGoogle = () => {};

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
            onChangeText={val => {
              setBirthPlace(val);
              // setForm('birth', val);
            }}
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
            label="Spesialisasi"
            value={form.pakar}
            onValueChange={val => setForm('pakar', val)}
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

export default SignUpPakar;

const styles = StyleSheet.create({
  page: {
    backgroundColor: mainColors.lightSmoke,
    flex: 1,
  },
  content: {
    padding: 20,
    paddingTop: 0,
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderRadius: 5,
    padding: 12,
    backgroundColor: mainColors.smoke,
    color: colors.text.primary1,
    // flex: 1,
    width: '48%',
  },
  label: {
    fontSize: 18,
    color: colors.text.primary1,
    marginBottom: 10,
    fontFamily: fonts.primary[600],
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
