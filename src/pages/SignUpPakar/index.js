import Axios from 'axios';
import React, {useState} from 'react';
import {
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Button,
  Checkbox,
  DatePicker,
  Gap,
  Header,
  Line,
  Link,
  Picker,
  Radio,
  TextInput,
} from '../../components';
import {colors, fonts, mainColors, useForm} from '../../utils';

const SignUpPakar = ({navigation}) => {
  const [form, setForm] = useForm({
    name: '',
    email: '',
    phone_number: '',
    gender: '',
    address: '',
    education: '',
    birth: '',
    sub_role: 1,
    password: '',
    password_confirmation: '',
    checked: false,
  });

  const onSubmit = () => {
    Axios.post('https://api.gemasting.com/public/api/pakar/register', form)
      .then(res => {
        console.log(res.data.data);
        navigation.navigate('OtpScreen', form);
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
            placeholder="+62"
            keyboardType="number-pad"
            label="No Telepon"
            value={form.phone_number}
            onChangeText={val => setForm('phone_number', val)}
          />
          <Gap height={20} />
          <TextInput placeholder="Nama" keyboardType="default" label="Nama" />
          <Gap height={20} />
          <Radio
            valueItem1="L"
            valueItem2="P"
            valueGroup={form.gender}
            onValueChange={val => setForm('gender', val)}
          />
          <Gap height={10} />
          <DatePicker label="Tanggal Lahir" />
          <Gap height={20} />
          <Picker
            label="Spesialisasi"
            value={form.sub_role}
            onValueChange={val => setForm('sub_role', val)}
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
});
