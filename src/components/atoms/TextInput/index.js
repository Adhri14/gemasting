import React from 'react';
import {StyleSheet, TextInput as TextInputRN, View, Text} from 'react-native';
import {colors, fonts, mainColors} from '../../../utils';

const TextInput = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    padding: 12,
    backgroundColor: mainColors.smoke,
    color: colors.text.primary1,
    // flex: 1,
  },
  label: {
    fontSize: 16,
    color: colors.text.primary1,
    marginBottom: 6,
    fontFamily: fonts.primary.normal,
  },
});
