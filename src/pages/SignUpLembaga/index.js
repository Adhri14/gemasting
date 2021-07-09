import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {
  Button,
  Checkbox,
  Gap,
  Header,
  Line,
  Link,
  Picker,
  TextInput,
} from '../../components';
import {colors, fonts, mainColors} from '../../utils';

const SignUpLembaga = ({navigation}) => {
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
          <Gap height={25} />
          <TextInput
            placeholder="+62"
            keyboardType="number-pad"
            label="No. Telepon"
          />
          <Gap height={25} />
          <TextInput
            placeholder="Nama kantor"
            keyboardType="default"
            label="Nama Kantor"
          />
          <Gap height={25} />
          <TextInput
            placeholder="Alamat kantor anda"
            isTextArea
            keyboardType="default"
            label="Alamat Kantor"
          />
          <Gap height={25} />
          <Picker label="Kategori Lembaga" />
          <Gap height={25} />
          <TextInput
            placeholder="Pasword"
            keyboardType="default"
            label="Password"
            isPassword
          />
          <Gap height={25} />
          <TextInput
            placeholder="Ketik ulang password"
            label="Ulangi Password"
            keyboardType="default"
            isPassword
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

export default SignUpLembaga;

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
