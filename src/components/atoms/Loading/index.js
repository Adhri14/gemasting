import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {mainColors} from '../../../utils';

const Loading = ({type}) => {
  return (
    <View
      style={type === 'loading-main' ? styles.containerMain : styles.container}>
      <ActivityIndicator size="large" color={mainColors.pink} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainColors.black,
    opacity: 0.3,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerMain: {
    flex: 1,
    backgroundColor: mainColors.white,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
