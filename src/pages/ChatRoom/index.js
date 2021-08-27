import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ChatItem, Header, InputChat} from '../../components';
import {fonts, mainColors} from '../../utils';

const ChatRoom = () => {
  return (
    <View style={styles.page}>
      <Header title="Dr. John Doe" more />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.welcome}>Selamat Berkonsultasi!</Text>
          <Text style={styles.time}>
            Halo John! Sekarang anda bisa konsultasi keluhan anda selama 30
            menit kedepan.
          </Text>
          <ChatItem Other />
          <ChatItem isMe />
          <ChatItem Other />
          <ChatItem isMe />
          <ChatItem Other />
          <ChatItem isMe />
          <ChatItem Other />
          <ChatItem isMe />
        </View>
      </ScrollView>
      <InputChat />
    </View>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({
  page: {
    backgroundColor: mainColors.white,
    flex: 1,
  },
  welcome: {
    fontSize: 18,
    fontFamily: fonts.primary[500],
    color: mainColors.pink,
    textAlign: 'center',
    justifyContent: 'center',
  },
  time: {
    fontSize: 12,
    color: mainColors.grey,
    textAlign: 'center',
    fontFamily: fonts.primary[400],
    paddingHorizontal: 37,
    marginBottom: 30,
  },
  content: {
    flex: 1,
  },
});
