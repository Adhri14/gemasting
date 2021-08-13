import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts, mainColors} from '../../../utils';
// import ScrollableTabView, {
//   DefaultTabBar,
// } from 'react-native-scrollable-tab-view';

const AktivityCard = () => {
  return (
    // <ScrollableTabView
    //   style={{marginTop: 20}}
    //   initialPage={1}
    //   renderTabBar={() => <DefaultTabBar />}>
    //   <Text tabLabel="Tab #1">My</Text>
    //   <Text tabLabel="Tab #2">favorite</Text>
    //   <Text tabLabel="Tab #3">project</Text>
    // </ScrollableTabView>
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
    </View>
  );
};

export default AktivityCard;

const styles = StyleSheet.create({
  container: {
    width: 168,
    height: 60,
    borderRadius: 45,
    backgroundColor: mainColors.pink,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.primary[500],
  },
});
