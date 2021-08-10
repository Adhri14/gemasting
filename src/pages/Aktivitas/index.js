import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {mainColors} from '../../utils';

const Aktivitas = () => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={mainColors.smoke} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={50} />
        <View style={styles.container}>
          <Text style={styles.title}>Aktivitas</Text>
          <Gap height={30} />
          <ListProfile />
        </View>
      </ScrollView>
    </View>
  );
};

export default Aktivitas;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    // marginTop: 40,
    backgroundColor: mainColors.lightSmoke,
  },
  container: {paddingHorizontal: 20, marginBottom: 150},
  title: {
    fontSize: 25,
    fontFamily: fonts.primary[600],
  },
});
