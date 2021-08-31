import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconChatActive} from '../../../../assets';
import {fonts, mainColors} from '../../../../utils';

const MenuItem = ({title, icon, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <View style={styles.container}>
        {icon}
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    fontFamily: fonts.primary[500],
    color: mainColors.black,
    marginLeft: 10,
  },
});
