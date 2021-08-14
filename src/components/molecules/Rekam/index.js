import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ListCard from '../ListCard';

const Rekam = () => {
  return (
    <View style={{flex: 1}}>
      <ListCard type="rekam-medis" />
    </View>
  );
};

export default Rekam;

const styles = StyleSheet.create({});
