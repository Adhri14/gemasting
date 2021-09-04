import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import SkeletonHome from '../SkeletonHome';

const Skeleton = ({type}) => {
  if (type === 'home') {
    return <SkeletonHome />;
  }
  return (
    <SkeletonPlaceholder backgroundColor={mainColors.darkSmoke}>
      <View style={styles.container}>
        <View style={styles.text} />
        <View style={styles.row}>
          <View style={styles.component} />
          <View style={styles.component} />
          <View style={styles.component} />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export default Skeleton;

const styles = StyleSheet.create({});
