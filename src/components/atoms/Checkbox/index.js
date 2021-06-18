import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Checkbox as CheckboxPaper} from 'react-native-paper';
import {fonts} from '../../../utils';

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.checkbox}>
      <CheckboxPaper.Item
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
        position="leading"
        style={styles.content}
      />
      <Text style={styles.label}>
        Dengan klik daftar, berarti anda telah menyetujui{'\n'}
        <Text style={styles.bold}>Syarat & Ketentuan Gemasting.</Text>
      </Text>
    </View>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    marginLeft: -25,
  },
  label: {
    fontFamily: fonts.primary[300],
    color: '#000',
    fontSize: 12,
    marginLeft: -10,
    marginTop: 8,
  },
  bold: {
    fontFamily: fonts.primary[700],
  },
});
