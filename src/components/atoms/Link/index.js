import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts, mainColors} from '../../../utils';

const Link = ({title, size, align, action, onPress}) => {
  return (
    <View>
      <Text style={styles.link(size, align)}>
        {title}{' '}
        <Text style={styles.bold} onPress={onPress}>
          {action}
        </Text>
      </Text>
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({
  link: (size, align) => ({
    fontSize: size,
    color: mainColors.lightSmoke,
    fontFamily: fonts.primary.normal,
    textAlign: align,
  }),
  bold: {
    fontFamily: fonts.primary[600],
    color: colors.text.primary1,
  },
});
