import React from 'react';
import {StyleSheet, TextInput as TextInputRN, View, Text} from 'react-native';
import {colors, fonts, mainColors} from '../../../utils';

const TextInput = ({label, placeholder, type}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
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
  label: {
    fontSize: 18,
    color: mainColors.black,
    marginBottom: 10,
    fontFamily: fonts.primary[600],
  },
});
