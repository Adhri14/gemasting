import React from 'react';
import {StyleSheet, TextInput as TextInputRN, View, Text} from 'react-native';
import {colors} from '../../../utils';

const TextInput = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN style={styles.input} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
  },
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: 'Nunito-Regular',
  },
});
