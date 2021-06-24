import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput as TextInputRN,
} from 'react-native';
import {
  Button,
  Gap,
  Header,
  TextInput,
  InputPassword,
  Radio,
  Picker,
  Checkbox,
  Link,
  DatePicker,
} from '../../components';
import {colors, fonts, mainColors} from '../../utils';

const SignUpPakar = ({navigation}) => {
  const [radio, setRadio] = useState('');
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header onPress={() => navigation.goBack()} />
        <View style={styles.content}>
          <Gap height={10} />
          <Text style={styles.title}>Daftar Akun</Text>
          <Gap height={15} />
          <TextInput label="Email" />
          <Gap height={25} />
          <TextInput label="No Telepon" />
          <Gap height={25} />
          <TextInput label="Nama" />
          <Gap height={25} />
          <Radio
            valueItem1="laki-laki"
            valueItem2="perempuan"
            valueGroup={radio}
            onValueChange={val => setRadio(val)}
          />
          <Gap height={10} />
          <View>
            <Text style={styles.label}>Tempat, Tanggal Lahir</Text>
            <View style={styles.row}>
              <TextInputRN style={styles.input} />
              <DatePicker />
            </View>
          </View>
          <Gap height={25} />
          <Picker label="Spesialisasi" />
          <Gap height={25} />
          <TextInput label="Pendidikan" />
          <Gap height={25} />
          <TextInput label="Alamat Praktek" />
          <Gap height={25} />
          <InputPassword label="Password" />
          <Gap height={25} />
          <InputPassword label="Ketik Ulang Password" />
          <Gap height={10} />
          <Checkbox />
          <Gap height={20} />
          <Button
            title="Daftar Akun"
            onPress={() => navigation.navigate('OtpScreen')}
          />
          <Gap height={10} />
          <Text style={styles.or}>Atau</Text>
          <Gap height={10} />
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
    backgroundColor: mainColors.white,
    flex: 1,
  },
  content: {
    padding: 20,
    paddingTop: 0,
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontSize: 40,
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
  or: {
    textAlign: 'center',
    fontSize: 16,
    color: mainColors.lightSmoke,
    fontFamily: fonts.primary.normal,
  },
});
