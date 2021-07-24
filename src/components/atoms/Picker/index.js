import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker as PickerRN} from '@react-native-picker/picker';
import {colors, fonts, mainColors} from '../../../utils';

const Picker = ({label, placeholder, type, onValueChange, value}) => {
  if (type === 'lembaga') {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.container}>
          <PickerRN
            onValueChange={val => onValueChange(val)}
            selectedValue={value}>
            <PickerRN.Item value={6} label="Posyandu" />
            <PickerRN.Item value={7} label="HomeBaby SPA" />
          </PickerRN>
        </View>
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <PickerRN
          onValueChange={val => onValueChange(val)}
          selectedValue={value}>
          <PickerRN.Item value={null} label="Pilih Profesi" />
          <PickerRN.Item value={1} label="Ahli Gizi" />
          <PickerRN.Item value={2} label="Dokter Umum" />
          <PickerRN.Item value={3} label="Dokter Anak" />
          <PickerRN.Item value={4} label="Dokter Kandungan" />
          <PickerRN.Item value={5} label="Bidan Umum" />
          <PickerRN.Item value={6} label="Posyandu" />
          <PickerRN.Item value={7} label="HomeBaby SPA" />
        </PickerRN>
      </View>
    </View>
  );
};

export default Picker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: mainColors.smoke,
    borderRadius: 15,
    paddingVertical: 8,
  },
  label: {
    color: colors.text.primary1,
    fontSize: 16,
    marginBottom: 10,
    fontFamily: fonts.primary[600],
  },
});
