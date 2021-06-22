import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {DummyPhoto} from '../../../assets/Dummy';
import {colors, fonts} from '../../../utils';
import {
  IconNext,
  IconProfileActive,
  IconHistory,
  IconSetting,
  IconHelp,
} from '../../../assets';

const List = ({profile, type, icon, name, desc, onPress}) => {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <IconProfileActive />;
    }
    if (icon === 'edit-riwayat') {
      return <IconHistory />;
    }
    if (icon === 'edit-pengaturan') {
      return <IconSetting />;
    }
    if (icon === 'edit-bantuan') {
      return <IconHelp />;
    }
    return <IconProfile />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={profile} style={styles.avatar} />}
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {type === 'next' && <IconNext />}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {flex: 1, marginLeft: 16},
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 24,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary1,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary1,
  },
});
