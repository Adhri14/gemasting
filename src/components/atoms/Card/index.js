import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {mainColors} from '../../../utils';

const Card = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: mainColors.smoke,
    borderRadius: 15,
    padding: 20,
  },
});
