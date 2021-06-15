import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils';
import IconOnly from './IconOnly';

const Button = ({type, title, onPress, icon, display, ...props}) => {
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container(type, display)}
      onPress={onPress}
      {...props}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type, display) => ({
    backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
    borderWidth: type === 'secondary' ? 1 : 0,
    borderColor: type === 'secondary' ? '#112340' : '#0BCAD4',
    paddingVertical: 10,
    borderRadius: 10,
    display,
  }),
  text: type => ({
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: type === 'secondary' ? '#112340' : 'white',
    fontFamily: 'Nunito',
  }),
});
