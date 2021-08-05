import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlDanger, IlMax, IlNormal} from '../../../assets';
import {fonts, mainColors} from '../../../utils';
import {Gap} from '../../atoms';

const InfoStunting = ({type}) => {
  switch (type) {
    case 'normal':
      return (
        <View>
          <IlNormal />
          <Gap height={30} />
          <Text style={[styles.desc, styles.success]}>
            Anak Anda Dalam Kondisi Normal. Tetap Jaga Pola Makan dan Asupan
            Gizi Anak Anda.
          </Text>
          <Gap height={54} />
        </View>
      );
    case 'mid':
      return (
        <View>
          <IlStuntingBig />
          <Gap height={30} />
          <Text style={[styles.desc, styles.warning]}>
            Anak Anda Terindikasi Mengalami Stunting. Segera Konsultasikan
            Kepada Ahli Gizi.
          </Text>
          <Gap height={54} />
        </View>
      );
    case 'stunting':
      return (
        <View>
          <IlDanger />
          <Gap height={30} />
          <Text style={[styles.desc, styles.danger]}>
            Anak Anda Terindikasi Mengalami Stunting Parah. Segera Konsultasikan
            Kepada Ahli Gizi.
          </Text>
          <Gap height={54} />
        </View>
      );
    case 'max':
      return (
        <View>
          <IlMax />
          <Gap height={30} />
          <Text style={[styles.desc, styles.warning]}>
            Anak Anda Terindikasi Melebihi Batas Tinggi Normal. Segera
            Konsultasikan Kepada Ahli Gizi.
          </Text>
          <Gap height={54} />
        </View>
      );
    default:
      return (
        <View>
          <IlNormal />
          <Gap height={30} />
          <Text style={[styles.desc, styles.success]}>Hello Info Stunting</Text>
          <Gap height={54} />
        </View>
      );
  }
};

export default InfoStunting;

const styles = StyleSheet.create({
  desc: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    marginHorizontal: 45,
  },
  success: {
    color: mainColors.green,
  },
  warning: {
    color: mainColors.yellow,
  },
  danger: {
    color: mainColors.salmon,
  },
});
