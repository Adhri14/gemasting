import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {mainColors} from '../../utils';

const Chat = () => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={mainColors.smoke} barStyle="dark-content" />
      <Text>Chat Page</Text>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: mainColors.lightSmoke,
  },
});
