import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DummyUser, IconLocation, IconStar} from '../../../assets';
import {fonts, mainColors} from '../../../utils';
import {Gap} from '../../atoms';

const ListPakar = ({name, pakar, address, onPress, detail}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1}>
      <View style={detail ? styles.container2 : styles.container}>
        <View style={styles.bgProfile}>
          <Image source={DummyUser} style={styles.profile} />
        </View>
        <Gap width={20} />
        <View style={styles.content}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.pakar}>{pakar}</Text>
          {detail ? (
            <View style={styles.wrapper}>
              <Text style={styles.countCons}>1x konsultasi Chat</Text>
            </View>
          ) : (
            <View style={styles.wrapper}>
              <View style={styles.row}>
                <IconStar width={20} height={20} />
                <Text style={styles.rating}>4.9</Text>
              </View>
              <Gap width={20} />
              <View style={[styles.row, styles.badge]}>
                <IconLocation width={20} height={20} />
                <Text style={styles.address}>{address}</Text>
              </View>
            </View>
          )}
        </View>
      </View>
      <Gap height={20} />
      {detail ? <Text>{''}</Text> : <View style={styles.line} />}
    </TouchableOpacity>
  );
};

export default ListPakar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: mainColors.smoke,
    padding: 20,
    borderRadius: 15,
    width: '100%',
  },
  bgProfile: {
    backgroundColor: mainColors.green,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    overflow: 'hidden',
  },
  profile: {
    width: 100,
    height: 100,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: mainColors.black,
  },
  pakar: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: mainColors.grey,
    marginBottom: 10,
  },
  badge: {
    backgroundColor: mainColors.lightPink,
    borderRadius: 3,
    padding: 4,
    paddingRight: 8,
  },
  rating: {
    fontSize: 14,
    fontFamily: fonts.primary[500],
    color: '#F39D13',
    marginTop: 4.2,
    marginLeft: 4,
  },
  address: {
    fontSize: 9,
    fontFamily: fonts.primary[400],
    color: mainColors.pink,
    marginLeft: 5,
  },
  line: {
    height: 1,
    backgroundColor: mainColors.smoke,
    marginBottom: 20,
  },
  countCons: {
    fontSize: 16,
    fontFamily: fonts.primary[500],
    color: mainColors.green,
  },
});
