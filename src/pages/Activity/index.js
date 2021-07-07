import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {mainColors} from '../../utils';

const Activity = () => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={mainColors.smoke} barStyle="dark-content" />
      <Text>Activity Page</Text>
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: mainColors.lightSmoke,
  },
});
