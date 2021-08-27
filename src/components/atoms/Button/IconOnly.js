import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IconBackDark,
  IconBackPink,
  IconDoc,
  IconMore,
  IconSend,
} from '../../../assets';
import {mainColors} from '../../../utils';

const IconOnly = ({onPress, icon}) => {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <IconBackDark />;
    }
    if (icon === 'back-pink') {
      return <IconBackPink />;
    }
    if (icon === 'more') {
      return <IconMore />;
    }
    if (icon === 'send') {
      return <IconSend />;
    }
    if (icon === 'doc') {
      return <IconDoc />;
    }
    return <IconBackDark />;
  };
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: mainColors.lightPink,
  },
});
