import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {DummyPhoto} from '../../../assets/Dummy';
import {colors, fonts, mainColors} from '../../../utils';
import {
  IconNext,
  IconProfileSecond,
  IconHistory,
  IconSetting,
  IconHelp,
  IconProfile,
  IconShield,
  IconInfo,
} from '../../../assets';

const List = ({profile, type, icon, name, desc, onPress}) => {
  const Icon = () => {
    switch (icon) {
      case 'edit-profile':
        return <IconProfileSecond />;
      case 'edit-riwayat':
        return <IconHistory />;
      case 'edit-pengaturan':
        return <IconSetting />;
      case 'edit-bantuan':
        return <IconHelp />;
      case 'edit-privasi':
        return <IconShield />;
      case 'edit-info':
        return <IconInfo />;
      default:
        return <IconProfile />;
    }
    // if (icon === 'edit-profile') {
    //   return <IconProfileActive />;
    // }
    // if (icon === 'edit-riwayat') {
    //   return <IconHistory />;
    // }
    // if (icon === 'edit-pengaturan') {
    //   return <IconSetting />;
    // }
    // if (icon === 'edit-bantuan') {
    //   return <IconHelp />;
    // }
    // return <IconProfile />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={profile} style={styles.avatar} />}
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        {/* <Text style={styles.desc}>{desc}</Text> */}
      </View>
      {type === 'next' && <IconNext />}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: mainColors.smoke,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {flex: 1, marginLeft: 16, justifyContent: 'center'},
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 24,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[500],
    color: mainColors.grey1,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary1,
  },
});
