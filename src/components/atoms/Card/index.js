import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {mainColors} from '../../../utils';

const Card = ({children, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={styles.container}>
      {children}
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDEDED',
    borderRadius: 15,
    padding: 20,
  },
});
