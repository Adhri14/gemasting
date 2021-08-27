import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button, Gap} from '../../atoms';

const Header = ({onPress, title, more}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-pink" onPress={onPress} />
      <Text style={styles.text}>{title}</Text>
      {more ? (
        <Button type="icon-only" icon="more" onPress={onPress} />
      ) : (
        <Gap width={24} />
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    textAlign: 'center',
    flex: 1,
    fontSize: 25,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
