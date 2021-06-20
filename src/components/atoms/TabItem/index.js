import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconHome, IconInbox, IconProfile, IconChat} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title}) => {
  const Icon = () => {
    if (title === 'Home') {
      return <IconHome />;
    }
    if (title === 'Inbox') {
      return <IconInbox />;
    }
    if (title === 'Chat') {
      return <IconChat />;
    }
    if (title === 'Profile') {
      return <IconProfile />;
    }
    return <IconHome />;
  };

  return (
    <View style={styles.container}>
      <Icon />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: {
    fontSize: 11,
    color: colors.tertiary,
    fontFamily: fonts.primary[400],
    marginTop: 4,
  },
});
