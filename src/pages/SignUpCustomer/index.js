import Axios from 'axios';
import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {
  Button,
  Checkbox,
  Gap,
  Header,
  Line,
  Link,
  TextInput,
} from '../../components';
import {colors, fonts, mainColors, useForm} from '../../utils';

const SignUpCustomer = ({navigation}) => {
  const [form, setForm] = useForm({
    name: '',
    email: '',
    email_recovery: '',
    password: '',
    password_confirmation: '',
    phone_number: '',
    checked: false,
  });

  const onSubmit = () => {
    Axios.post('https://api.gemasting.com/public/api/customer/register', form)
      .then(res => {
        console.log(res.data.data);
        navigation.navigate('OtpScreen', form);
      })
      .catch(e => console.log(e.message));
    // navigation.navigate('OtpScreen', form);
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
            value={form.name}
            onChangeText={val => setForm('name', val)}
            placeholder="Nama"
            keyboardType="default"
            label="Nama"
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
});
