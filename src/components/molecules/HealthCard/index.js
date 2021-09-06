import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {HospitalDummy1} from '../../../assets';
import {fonts, mainColors} from '../../../utils';

const HealthCard = ({image, name, address}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={image} style={styles.img} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.desc}>{address}</Text>
      </View>
    </View>
  );
};

export default HealthCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: mainColors.white,
    borderRadius: 8,
    shadowColor: mainColors.black,
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 4,
    overflow: 'hidden',
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
  image: {
    width: 120,
    height: 110,
    borderRadius: 15,
    overflow: 'hidden',
  },
  img: {
    resizeMode: 'cover',
  },
});
