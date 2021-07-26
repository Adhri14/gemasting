import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyUser} from '../../../assets';
import {colors, fonts} from '../../../utils';

const HeaderHome = ({img, name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>Selamat Datang</Text>
      </View>
      <View style={styles.image}>
        <Image style={styles.img} source={img} />
      </View>
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontFamily: fonts.primary[600],
    color: colors.text.primary1,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary2,
    marginTop: -6,
  },
  image: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 25,
    backgroundColor: 'lightgreen',
  },
  img: {
    width: 50,
    height: 50,
  },
});
