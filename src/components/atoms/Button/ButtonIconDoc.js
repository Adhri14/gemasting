import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconDoc, IconDocDark} from '../../../assets';
import {colors, mainColors} from '../../../utils';

const ButtonIconDoc = ({disable}) => {
  return (
    <View style={styles.container(disable)}>
      {disable && <IconDocDark />}
      {!disable && <IconDoc />}
    </View>
  );
};

export default ButtonIconDoc;

const styles = StyleSheet.create({
  container: disable => ({
    backgroundColor: disable ? mainColors.smoke : mainColors.lightPink,
    width: 50,
    height: 50,
    borderRadius: 10,
    padding: 13,
  }),
});
