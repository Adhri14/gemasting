import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {mainColors} from '../../utils';
import {CardButton} from '../../components';

const HomeCustomer = () => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={mainColors.smoke} barStyle="dark-content" />
      <Text>Home Customer</Text>
    </View>
  );
};

export default HomeCustomer;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: mainColors.lightSmoke,
  },
});
