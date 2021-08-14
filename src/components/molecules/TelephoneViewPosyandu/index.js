import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts, mainColors} from '../../../utils';
import {Button, Gap, Link, TextInput, InputPassword, Line} from '../../atoms';

const TelephoneViewPosyandu = () => {
  return (
    <View style={styles.container}>
      <TextInput label="Telepon" keyboardType="number-pad" placeholder="+62" />
      <Gap height={20} />
      <TextInput label="Pin" keyboardType="number-pad" placeholder="Pin" />
      <Gap height={40} />
      <Button title="Masuk Akun" />
    </View>
  );
};

export default TelephoneViewPosyandu;

const styles = StyleSheet.create({
  container: {padding: 20},
});
