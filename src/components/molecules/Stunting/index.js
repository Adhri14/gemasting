import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ListCard from '../ListCard';

const Stunting = () => {
  return (
    <View style={{flex: 1, marginHorizontal: 20}}>
      <ListCard type="stunting" />
    </View>
  );
};

export default Stunting;

const styles = StyleSheet.create({});
