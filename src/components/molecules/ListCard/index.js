import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DummyUser} from '../../../assets';
import {colors, mainColors, fonts} from '../../../utils';

const ListCard = ({
  colorHeader,
  colorsProgress,
  colorsTime,
  name,
  desc,
  progress,
  time,
  type,
  date,
  category,
  onPress,
  weight,
}) => {
  if (type === 'rekam-medis') {
    return (
      <View style={styles.container2}>
        <View style={styles.content}>
          <View>
            <Text style={styles.profileName}>{name}</Text>
            <Text style={styles.profileDesc}>{category}</Text>
          </View>
          <View>
            <Text style={styles.timeRecord}>{date}</Text>
          </View>
        </View>
        <View style={styles.descRecord}>
          <Text style={styles.diagnosis}>Diagnosis : Demam Flu Ringan </Text>
          <Text style={styles.diagnosis}>
            Penanganan : Istirahat & Obat Paracetamol{' '}
          </Text>
        </View>
      </View>
    );
  }
  if (type === 'kms-online') {
    return (
      <View style={styles.container2}>
        <View style={styles.content}>
          <View>
            <Text style={styles.profileName}>{name}</Text>
            <Text style={styles.profileDesc}>{category}</Text>
          </View>
          <View>
            <Text style={styles.timeRecord}>{date}</Text>
          </View>
        </View>
        <View style={styles.descRecord}>
          <Text style={styles.kmsweight}>{weight}</Text>
          <Text style={styles.kmshight}>
            Penanganan : Tetap harus di jaga pola makannya
          </Text>
        </View>
      </View>
    );
  }
  if (type === 'stunting') {
    return (
      <View style={styles.container2}>
        <View style={styles.content}>
          <View>
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={styles.profileDesc}>Pribadi</Text>
          </View>
          <View>
            <Text style={styles.timeRecord}>06 Juli 2021</Text>
          </View>
        </View>
        <View style={styles.descRecord}>
          <Text style={styles.kmsweight}>Indikasi Stunting Parah </Text>
        </View>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.header(colorHeader)}>
        <Text style={styles.progress(colorsProgress)}> {progress}</Text>
        <Text style={styles.time(colorsTime)}>{time}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.image}>
          <Image source={DummyUser} style={styles.img} />
        </View>
        <View style={styles.name}>
          <Text style={styles.label}>{name}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: colors.secondary,
    overflow: 'hidden',
  },

  header: colorHeader => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colorHeader,
  }),
  progress: colorsProgress => ({
    fontFamily: fonts.primary[500],
    color: colorsProgress,
  }),
  time: colorsTime => ({
    fontFamily: fonts.primary[500],
    color: colorsTime,
  }),
  body: {
    backgroundColor: colors.secondary,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: mainColors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginRight: 20,
  },
  img: {
    width: 50,
    height: 50,
  },
  name: {},
  label: {
    fontFamily: fonts.primary[600],
    fontSize: 18,
  },
  desc: {
    fontFamily: fonts.primary[400],
    color: mainColors.grey,
  },

  // Style second component

  container2: {
    borderRadius: 15,
    backgroundColor: colors.secondary,
    overflow: 'hidden',
  },
  content: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  timeRecord: {
    color: mainColors.pink2,
    marginTop: 6,
    fontFamily: fonts.primary[500],
  },
  profile: {},
  profileName: {
    fontFamily: fonts.primary[600],
    color: mainColors.black,
    fontSize: 20,
  },
  profileDesc: {
    fontFamily: fonts.primary[500],
    color: mainColors.black,
  },

  descRecord: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  diagnosis: {
    fontFamily: fonts.primary[500],
    fontSize: 12,
    color: mainColors.grey,
  },
  kmsweight: {
    fontFamily: fonts.primary[500],
    fontSize: 12,
    color: mainColors.salmon,
  },
  kmshight: {
    fontFamily: fonts.primary[500],
    fontSize: 12,
    color: mainColors.green,
  },
});
