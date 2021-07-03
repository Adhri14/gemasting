import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts, mainColors} from '../../../utils';

const Line = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.or}>Atau</Text>
      <View style={styles.line} />
    </View>
  );
};

export default Line;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  line: {
    height: 1,
    backgroundColor: mainColors.grey,
    opacity: 0.8,
    width: '40%',
    borderRadius: 2,
  },
  or: {
    textAlign: 'center',
    fontSize: 16,
    color: mainColors.grey,
    opacity: 0.8,
    fontFamily: fonts.primary.normal,
  },
});
