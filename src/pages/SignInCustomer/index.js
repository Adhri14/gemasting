import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  Button,
  Gap,
  Header,
  InputPassword,
  Link,
  TextInput,
} from '../../components';
import {colors, fonts, mainColors} from '../../utils';

const SignInCustomer = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView>
        <Header onPress={() => navigation.goBack()} />
        <View style={styles.container}>
          <Gap height={10} />
          <Text style={styles.title}>Masuk Akun</Text>
          <TextInput label="Email" />
          <Gap height={24} />
          <InputPassword label="Password" />
          <Gap height={40} />
          <Button
            title="Masuk Akun"
            onPress={() => navigation.replace('MainApp')}
          />
          <Gap height={10} />
          <Text style={styles.or}>Atau</Text>
          <Gap height={10} />
          <Button google type="secondary" title="Masuk dengan Google" />
          <Gap height={30} />
          <Link
            title="Belum punya akun?"
            action="Daftar"
            size={16}
            align="center"
            onPress={() => navigation.navigate('SignUpCustomer')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignInCustomer;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
  },
  container: {padding: 20, paddingTop: 0},
  or: {
    textAlign: 'center',
    fontSize: 16,
    color: mainColors.lightSmoke,
    fontFamily: fonts.primary.normal,
  },
});
