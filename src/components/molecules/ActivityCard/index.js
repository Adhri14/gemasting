import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts, mainColors} from '../../../utils';

const AktivityCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
    </View>
  );
};

export default AktivityCard;

const styles = StyleSheet.create({
  container: {
    width: 168,
    height: 60,
    borderRadius: 45,
    backgroundColor: mainColors.pink,
  },
  title: {
    fontFamily: fonts.primary[500],
  },
});
