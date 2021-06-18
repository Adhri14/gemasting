import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts, mainColors} from '../../../utils';
import {Button, Gap, Link, TextInput} from '../../atoms';

const TelephoneView = () => {
  return (
    <View style={styles.container}>
      <TextInput label="Telepon" />
      <Gap height={24} />
      <TextInput label="Password" />
      <Gap height={40} />
      <Button title="Masuk Akun" />
      <Gap height={10} />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: mainColors.lightSmoke,
          fontFamily: fonts.primary.normal,
        }}>
        Atau
      </Text>
      <Gap height={10} />
      <Button google type="secondary" title="Masuk dengan Google" />
      <Gap height={30} />
      <Link
        title="Belum punya akun?"
        action="Daftar"
        size={16}
        align="center"
      />
    </View>
  );
};

export default TelephoneView;

const styles = StyleSheet.create({
  container: {padding: 20},
});
