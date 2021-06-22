import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyUser} from '../../../assets/Dummy';
import {colors, fonts} from '../../../utils';

const ProfilePhoto = ({name, desc}) => {
  return (
    <View style={styles.container}>
      <View style={styles.borderProfile}>
        <Image source={DummyUser} style={styles.avatar} />
      </View>
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.nomorId}>{desc}</Text>
        </View>
      )}
    </View>
  );
};

export default ProfilePhoto;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  borderProfile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
    color: colors.text.primary1,
    fontFamily: fonts.primary[400],
    marginTop: 20,
  },
  nomorId: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary2,
    marginTop: 2,
    alignItems: 'center',
  },
});
