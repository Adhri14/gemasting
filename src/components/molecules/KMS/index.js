import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ListCard from '../ListCard';

const KMS = () => {
  return (
    <View style={{flex: 1, marginHorizontal: 20}}>
      <ListCard
        type="kms-online"
        name="John Doe"
        category="Pribadi"
        date=" 17 Agustus 2021"
      />
    </View>
  );
};

export default KMS;

const styles = StyleSheet.create({});
