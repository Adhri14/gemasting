import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconSend, IconSendDark} from '../../../assets';
import {colors, mainColors} from '../../../utils';

const ButtonIconSend = ({disable}) => {
  return (
    <View style={styles.container(disable)}>
      {disable && <IconSendDark />}
      {!disable && <IconSend />}
    </View>
  );
};

export default ButtonIconSend;

const styles = StyleSheet.create({
  container: disable => ({
    backgroundColor: disable ? mainColors.smoke : mainColors.lightPink,
    width: 50,
    height: 50,
    borderRadius: 10,
    padding: 13,
  }),
});
