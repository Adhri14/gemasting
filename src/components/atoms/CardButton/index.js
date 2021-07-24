import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts, mainColors} from '../../../utils';
import Gap from '../Gap';

const CardButton = ({label, onPress, type}) => {
  if (type === 'card-big') {
    return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonBig}
        onPress={onPress}
        activeOpacity={1}>
        <Text style={styles.textButton}>{''}</Text>
      </TouchableOpacity>
      <Gap height={10} />
      <Text style={styles.textButton}>{label}</Text>
    </View>
  );
  }
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
  container: {justifyContent: 'center', alignItems: 'center', marginBottom: 20},
  button: {
    width: 100,
    height: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: mainColors.smoke,
  },
  buttonBig: {
    width: 168,
    height: 150,
    borderRadius: 30,
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
