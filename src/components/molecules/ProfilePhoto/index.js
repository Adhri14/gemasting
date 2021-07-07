import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {IconCamera, DummyUser} from '../../../assets';
import {colors, fonts, mainColors} from '../../../utils';

const ProfilePhoto = ({name, desc, type, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.borderProfile}>
        <Image source={DummyUser} style={styles.avatar} />
        {type === 'camera' && (
          <TouchableOpacity
            activeOpacity={1}
            onPress={onPress}
            style={styles.buttonCamera}>
            <IconCamera width={18} height={18} />
          </TouchableOpacity>
        )}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 25,
    color: colors.text.primary1,
    fontFamily: fonts.primary[600],
    marginTop: 20,
    textAlign: 'center',
  },
  nomorId: {
    fontSize: 18,
    fontFamily: fonts.primary[500],
    color: colors.text.primary2,
    marginTop: 2,
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonCamera: {
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: mainColors.teal,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    bottom: 0,
    borderWidth: 3,
    borderColor: colors.white,
  },
});
