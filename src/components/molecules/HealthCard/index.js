import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {HospitalDummy1} from '../../../assets';
import {fonts, mainColors} from '../../../utils';

const HealthCard = () => {
  return (
    <View style={styles.container}>
      <Image source={HospitalDummy1} />
      <View style={styles.content}>
        <Text style={styles.title}>RS Siti Fatimah</Text>
        <Text style={styles.desc}>Jl. Kol Burlian</Text>
      </View>
    </View>
  );
};

export default HealthCard;

const styles = StyleSheet.create({
  container: {
    width: 120,
    backgroundColor: mainColors.white,
    borderRadius: 8,
    shadowColor: mainColors.black,
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
    marginRight: 10,
    padding: 10,
  },
  content: {
    paddingTop: 10,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
    color: mainColors.black,
    flexDirection: 'row',
  },
  desc: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: mainColors.grey,
  },
});
