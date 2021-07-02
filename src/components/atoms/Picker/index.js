import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker as PickerRN} from '@react-native-picker/picker';
import {colors, fonts, mainColors} from '../../../utils';

const Picker = ({label, placeholder}) => {
  // const [data, setData] = useState({

  // });
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <PickerRN>
          <PickerRN.Item label="Dokter Spesialis Anak" />
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
