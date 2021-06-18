import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker as PickerRN} from '@react-native-picker/picker';
import {colors, fonts, mainColors} from '../../../utils';

const Picker = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <PickerRN />
      </View>
    </View>
  );
};

export default Picker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: mainColors.smoke,
    borderRadius: 10,
  },
  label: {
    color: colors.text.primary1,
    fontSize: 16,
    marginBottom: 6,
    fontFamily: fonts.primary.normal,
  },
});
