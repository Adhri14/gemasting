import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {fonts, mainColors} from '../../../utils';
import {Button} from '../../atoms';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tulis pesan... " />
      <Button type="button-icon-doc" disable />
      <Button type="button-icon-send" disable />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
  },
  input: {
    backgroundColor: mainColors.smoke,
    padding: 15,
    borderRadius: 15,
    flex: 1,
    marginRight: 10,
    fontSize: 14,
    fontFamily: fonts.primary.normal,
  },
});
