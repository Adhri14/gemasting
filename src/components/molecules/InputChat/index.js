import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {fonts, mainColors} from '../../../utils';
import {Button} from '../../atoms';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tulis pesan... " />
      <View style={styles.button}>
        <Button type="button-icon-doc" disable />
        <Button type="button-icon-send" disable />
      </View>
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
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
  button: {
    flexDirection: 'row',
    width: '29%',
    justifyContent: 'space-between',
  },
});
