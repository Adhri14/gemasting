import React from 'react';
import {StyleSheet, TextInput as TextInputRN, View, Text} from 'react-native';
import {colors, fonts, mainColors} from '../../../utils';

const TextInput = ({label, placeholder, type}) => {
  return (
    <View>
      <Text style={styles.label(type)}>{label}</Text>
      <TextInputRN style={styles.input(type)} placeholder={placeholder} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: type => ({
    borderRadius: 10,
    padding: 12,
    backgroundColor: type === 'secondary' ? '#F3F3F3' : mainColors.smoke,
    color: colors.text.primary1,
    // flex: 1,
  }),
  label: type => ({
    fontSize: 16,
    color: type === 'secondary' ? '#B0B0B0' : colors.text.primary1,
    marginBottom: 6,
    fontFamily: fonts.primary.normal,
  }),
});
