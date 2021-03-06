import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Checkbox as CheckboxPaper} from 'react-native-paper';
import {colors, fonts, mainColors} from '../../../utils';

const Checkbox = ({checked, onPress}) => {
  // const [checked, setChecked] = useState(false);

  return (
    <View style={styles.checkbox}>
      <CheckboxPaper.Item
        status={checked}
        onPress={onPress}
        position="leading"
        style={styles.content}
        uncheckedColor={mainColors.darkSmoke}
        color={mainColors.pink}
      />
      <Text onPress={onPress} style={styles.label}>
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
    width: '100%',
    // backgroundColor: 'yellow',
    // paddingRight: 12,
  },
  content: {
    marginLeft: -25,
  },
  label: {
    fontFamily: fonts.primary[300],
    color: colors.text.primary1,
    fontSize: 14,
    marginLeft: -10,
    marginTop: 9,
  },
  bold: {
    fontFamily: fonts.primary[700],
    color: mainColors.pink,
  },
});
