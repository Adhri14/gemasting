import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  Button,
  Checkbox,
  Gap,
  Header,
  InputPassword,
  Link,
  Picker,
  TextInput,
} from '../../components';
import {colors, fonts, mainColors} from '../../utils';

const SignUpLembaga = ({navigation}) => {
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
          <TextInput label="No. Telepon" />
          <Gap height={25} />
          <TextInput label="Nama Kantor" />
          <Gap height={25} />
          <TextInput label="Alamat Kantor" />
          <Gap height={25} />
          <Picker label="Kategori Lembaga" />
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

export default SignUpLembaga;

const styles = StyleSheet.create({
  page: {
    backgroundColor: mainColors.lightSmoke,
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
  },
  content: {
    padding: 20,
    paddingTop: 0,
    backgroundColor: colors.white,
    flex: 1,
  },
  or: {
    textAlign: 'center',
    fontSize: 16,
    color: mainColors.lightSmoke,
    fontFamily: fonts.primary.normal,
  },
});
