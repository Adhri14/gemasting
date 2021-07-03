import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IconGoogle} from '../../../assets';
import {colors, fonts} from '../../../utils';
import IconOnly from './IconOnly';

const Button = ({type, title, onPress, google, icon, display, ...props}) => {
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container(type, display)}
      onPress={onPress}
      {...props}>
      {/* {google ? <IconGoogle /> : <Text style={styles.text(type)}>{title}</Text>} */}
      {google && <IconGoogle style={styles.google} />}
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type, display, backgroundColor) => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    borderWidth: type === 'secondary' ? 1 : 0,
    borderColor: colors.button.primary.border,
    paddingVertical: 20,
    borderRadius: 15,
    display,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  }),
  text: type => ({
    fontSize: 16,
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
    fontFamily: fonts.primary[600],
  }),
  google: {
    marginRight: 20,
  },
});
