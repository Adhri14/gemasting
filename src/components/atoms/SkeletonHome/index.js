import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {mainColors} from '../../../utils';
import Gap from '../Gap';

const SkeletonHome = () => {
  return (
    <SkeletonPlaceholder backgroundColor={mainColors.darkSmoke}>
      <View style={styles.container}>
        <View style={styles.text} />
        <View style={[styles.row, {marginBottom: 20}]}>
          <View style={styles.component} />
          <View style={styles.component} />
          <View style={styles.component} />
        </View>
        <View style={[styles.row, {marginBottom: 30}]}>
          <View style={styles.component} />
          <View style={styles.component} />
          <View style={styles.component} />
        </View>
        <View style={styles.text} />
        <View style={styles.row}>
          <View style={[styles.component, {width: 150, height: 120}]} />
          <View style={[styles.component, {width: 150, height: 120}]} />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export default SkeletonHome;

const styles = StyleSheet.create({
  text: {
    width: 80,
    height: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  component: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
});
