import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ListCard from '../ListCard';

const Janji = () => {
  return (
    <View style={{flex: 1}}>
      <ListCard type="rekam-medis" />
    </View>
  );
};

export default Janji;

const styles = StyleSheet.create({});
