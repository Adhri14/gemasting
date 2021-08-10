import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {ActivityCard, Gap} from '../../components';
import {mainColors, fonts} from '../../utils';

const Aktivity = () => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={mainColors.smoke} barStyle="dark-content" />
      <Gap height={50} />
      <View style={styles.container}>
        <Text style={styles.title}>Aktifitas</Text>
        <ActivityCard />
      </View>
    </View>
  );
};

export default Aktivity;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: mainColors.lightSmoke,
  },
  title: {
    fontSize: 25,
    fontFamily: fonts.primary[600],
  },
  container: {
    paddingHorizontal: 20,
    marginBottom: 150,
  },
});
