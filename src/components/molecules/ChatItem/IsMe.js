import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts, mainColors} from '../../../utils';

const IsMe = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <Text style={styles.text}>
          Siang dok, saya merasa sakit kepala selama 2 hari. Sudah minum 2 pil
          obat sakit kepala tapi tidak ada efek apapun.
        </Text>
      </View>
      <Text style={styles.date}>12.34</Text>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    marginBottom: 50,
    paddingRight: 30,
  },
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: mainColors.pink,
    maxWidth: '70%',
    borderRadius: 10,
    borderTopRightRadius: 0,
  },
  text: {
    fontSize: 12,
    fontFamily: fonts.primary[500],
    color: mainColors.white,
  },
  date: {
    fontSize: 10,
    fontFamily: fonts.primary.normal,
    marginTop: 5,
    color: mainColors.grey,
  },
});
