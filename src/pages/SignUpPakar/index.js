import React, {useState} from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
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
import {colors, fonts, mainColors} from '../../utils';

const SignUpPakar = ({navigation}) => {
  const [radio, setRadio] = useState('');
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
          />
          <Gap height={20} />
          <TextInput
            placeholder="+62"
            keyboardType="number-pad"
            label="No Telepon"
          />
          <Gap height={20} />
          <TextInput placeholder="Nama" keyboardType="default" label="Nama" />
          <Gap height={20} />
          <Radio
            valueItem1="L"
            valueItem2="P"
            valueGroup={radio}
            onValueChange={val => setRadio(val)}
          />
          <Gap height={10} />
          <DatePicker placeholder="dd-mm-yyyy" label="Tanggal Lahir" />
          <Gap height={20} />
          <Picker label="Spesialisasi" />
          <Gap height={20} />
          <TextInput
            placeholder="Pendidikan terakhir anda"
            keyboardType="default"
            label="Pendidikan"
          />
          <Gap height={20} />
          <TextInput
            isTextArea
            placeholder="Alamat praktek anda"
            keyboardType="default"
            label="Alamat Praktek"
          />
          <Gap height={20} />
          <TextInput
            isPassword
            label="Password"
            keyboardType="default"
            placeholder="Password"
          />
          <Gap height={20} />
          <TextInput
            isPassword
            label="Ulangi Password"
            placeholder="Ketik ulang password"
            keyboardType="default"
          />
          <Gap height={10} />
          <Checkbox />
          <Gap height={20} />
          <Button
            title="Daftar Akun"
            onPress={() => navigation.navigate('OtpScreen')}
          />
          <Gap height={20} />
          <Line />
          <Gap height={20} />
          <Button type="secondary" google title="Daftar dengan Google" />
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
