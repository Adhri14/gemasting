import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {IconCamera, DummyUser} from '../../../assets';
import {colors, fonts, mainColors} from '../../../utils';

const ProfilePhoto = ({name, desc, type, onPress, img}) => {
  if (type === 'profile') {
    return (
      <View style={styles.containerProfile}>
        <View style={styles.borderProfile}>
          <Image source={img} style={styles.avatarProfile} />
        </View>
        {name && (
          <View style={styles.content}>
            <Text style={styles.nameProfile}>{name}</Text>
            <Text style={styles.nomorIdProfile}>{desc}</Text>
          </View>
        )}
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.borderProfile}>
        <Image source={img} style={styles.avatar} />
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
  containerProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  avatarProfile: {
    width: 70,
    height: 70,
    borderRadius: 110 / 2,
  },
  borderProfile: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    borderRadius: 100,
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
  nameProfile: {
    fontSize: 18,
    color: colors.text.primary1,
    fontFamily: fonts.primary[600],
  },
  nomorIdProfile: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary2,
    marginTop: 2,
    alignItems: 'center',
  },
  content: {marginLeft: 20},
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
