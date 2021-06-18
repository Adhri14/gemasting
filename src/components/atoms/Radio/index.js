import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {colors, fonts, mainColors} from '../../../utils';

const Radio = ({valueGroup, valueItem1, valueItem2, onValueChange}) => {
  return (
    <RadioButton.Group onValueChange={onValueChange} value={valueGroup}>
      <Text style={styles.title}>Jenis kelamin</Text>
      <View style={styles.radio}>
        <RadioButton.Item
          position="leading"
          label="laki-laki"
          value={valueItem1}
          labelStyle={styles.label}
          color={mainColors.teal}
          uncheckedColor="#999"
        />
        <RadioButton.Item
          position="leading"
          label="perempuan"
          value={valueItem2}
          labelStyle={styles.label}
          color={mainColors.teal}
          uncheckedColor="#999"
        />
      </View>
    </RadioButton.Group>
  );
};

export default Radio;

const styles = StyleSheet.create({
  radio: {flexDirection: 'row', marginLeft: -24},
  label: {color: mainColors.lightSmoke},
  title: {
    fontSize: 16,
    color: colors.text.primary1,
    fontFamily: fonts.primary.normal,
  },
});
