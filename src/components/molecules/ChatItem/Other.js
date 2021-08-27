import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyUser} from '../../../assets';
import {fonts, mainColors} from '../../../utils';

const Other = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyUser} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>
            Selamat siang. Perkenalkan saya Dr. John Doe, dokter umum. Apakah
            ada yang bisa dibantu?
          </Text>
        </View>
        <Text style={styles.date}>12.34</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginBottom: 50,
    paddingLeft: 30,
    flexDirection: 'row',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 12,
  },
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: mainColors.smoke,
    maxWidth: '80%',
    borderRadius: 10,
    borderTopLeftRadius: 0,
  },
  text: {
    fontSize: 12,
    fontFamily: fonts.primary[500],
    color: mainColors.black,
  },
  date: {
    fontSize: 10,
    fontFamily: fonts.primary.normal,
    marginTop: 5,
    color: mainColors.grey,
  },
});
