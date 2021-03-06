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
  IconChatActive,
} from '../../../assets';
import {colors, fonts, mainColors} from '../../../utils';
import * as Animatable from 'react-native-animatable';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <IconHomeActive /> : <IconHome />;
    }
    if (title === 'Activity') {
      return active ? <IconActivityActive /> : <IconActivity />;
    }
    if (title === 'Chat') {
      return active ? <IconChatActive /> : <IconChat />;
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
    color: active ? colors.text.primary2 : mainColors.darkSmoke,
    fontFamily: active ? fonts.primary[600] : fonts.primary[400],
    marginTop: 4,
    textAlign: 'center',
  }),
  line: {
    width: 30,
    height: 5,
    borderRadius: 10,
    backgroundColor: mainColors.pink,
    alignSelf: 'center',
    position: 'absolute',
    top: -28,
  },
});
