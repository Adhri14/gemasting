import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  IconHome,
  IconHomeActive,
  IconInbox,
  IconProfile,
  IconProfileActive,
  IconChat,
  IconActivity,
  IconActivityActive,
} from '../../../assets';
import {colors, fonts, mainColors} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <IconHomeActive /> : <IconHome />;
    }
    if (title === 'Inbox') {
      return active ? <IconActivityActive /> : <IconActivity />;
    }
    if (title === 'Chat') {
      return <IconChat />;
    }
    if (title === 'Profile') {
      return active ? <IconProfileActive /> : <IconProfile />;
    }
    return <IconHome />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={0.8}>
      {active && <View style={styles.line} />}
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center', flex: 1},
  text: active => ({
    fontSize: 11,
    color: active ? colors.text.secondary2 : '#b0b0b0',
    fontFamily: fonts.primary[400],
    marginTop: 4,
  }),
  line: {
    width: 30,
    height: 5,
    borderRadius: 10,
    backgroundColor: mainColors.teal,
    alignSelf: 'center',
    position: 'absolute',
    top: -28,
  },
});
