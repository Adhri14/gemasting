import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {IconClose} from '../../../assets';
import {Gap} from '../../atoms';
import {fonts, mainColors} from '../../../utils';

const EmptyFamily = () => {
  return (
    <>
      <IconClose />
      <Gap height={10} />
      <Text style={styles.desc}>
        Anda belum menambahkan daftar{'\n'}anggota keluarga
      </Text>
    </>
  );
};

export default EmptyFamily;

const styles = StyleSheet.create({
  desc: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: mainColors.grey,
    lineHeight: 20,
  },
});
