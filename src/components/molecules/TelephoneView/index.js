import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap, Button, Link, TextInput} from '../../atoms';
import {colors, fonts} from '../../../utils';

const TelephoneView = () => {
  return (
    <View style={styles.container}>
      <TextInput label="Telepon" />
      <Gap height={24} />
      <TextInput label="Password atau Pin" />
      <Gap height={40} />
      <Button title="SignIn" />
      <Gap height={10} />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: colors.text.primary,
          fontFamily: fonts.primary.normal,
        }}>
        Atau
      </Text>
      <Gap height={10} />
      <Button type="secondary" title="Masuk dengan Akun Google" />
      <Gap height={30} />
      <Link title="Create New Account" size={16} align="center" />
    </View>
  );
};

export default TelephoneView;

const styles = StyleSheet.create({
  container: {padding: 20},
});
