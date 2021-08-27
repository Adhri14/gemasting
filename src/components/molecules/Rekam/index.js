import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ListCard from '../ListCard';

const Rekam = () => {
  return (
    <View style={{flex: 1, marginHorizontal: 20}}>
      <ListCard
        type="rekam-medis"
        name="Dr. Stephen Strange"
        category="Sepesialis Anak"
        date="17 Agustus 2021"
      />
    </View>
  );
};

export default Rekam;

const styles = StyleSheet.create({});
