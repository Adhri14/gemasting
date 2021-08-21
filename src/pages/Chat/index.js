import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {fonts, mainColors} from '../../utils';

const Chat = () => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={mainColors.smoke} />
      <Text
        style={{
          fontSize: 20,
          fontFamily: fonts.primary[600],
          color: mainColors.teal,
        }}>
        Chat Page
      </Text>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: mainColors.lightPink,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
