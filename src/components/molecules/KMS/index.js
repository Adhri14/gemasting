import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ListCard from '../ListCard';

const KMS = () => {
  return (
    <View style={{flex: 1}}>
      <ListCard type="kms-online" />
    </View>
  );
};

export default KMS;

const styles = StyleSheet.create({});
