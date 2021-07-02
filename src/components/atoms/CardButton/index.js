import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts, mainColors} from '../../../utils';
import Gap from '../Gap';

const CardButton = ({label, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        activeOpacity={1}>
        <Text style={styles.textButton}>{''}</Text>
      </TouchableOpacity>
      <Gap height={10} />
      <Text style={styles.textButton}>{label}</Text>
    </View>
  );
};

export default CardButton;

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
  button: {
    width: 100,
    height: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: mainColors.smoke,
  },
  textButton: {
    fontSize: 16,
    fontFamily: fonts.primary[500],
    color: colors.text.primary1,
  },
});
