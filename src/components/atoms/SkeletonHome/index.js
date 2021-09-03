import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {mainColors} from '../../../utils';

const SkeletonHome = () => {
  return (
    <SkeletonPlaceholder backgroundColor={mainColors.darkSmoke}>
      <View style={styles.container}>
        <View />
        <View>
          <View />
          <View />
          <View />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export default SkeletonHome;

const styles = StyleSheet.create({});
