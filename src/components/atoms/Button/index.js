import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {color} from 'react-native-reanimated';

const Button = ({text, color = '#0BCAD4', textColor = 'white', onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container(color)}
      onPress={onPress}>
      <Text style={styles.text(textColor)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: color => ({
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: color,
    fontFamily: 'Nunito',
  }),
});
