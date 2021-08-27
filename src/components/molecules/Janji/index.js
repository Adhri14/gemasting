import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ListCard from '../ListCard';

const Janji = () => {
  return (
    <View style={{flex: 1, marginHorizontal: 20}}>
      <ListCard
        type="rekam-medis"
        name="John Doe"
        category="Spesialis Anak"
        date="17 Agustus 2021"
      />
    </View>
  );
};

export default Janji;

const styles = StyleSheet.create({});
