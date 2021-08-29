import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {fonts, mainColors} from '../../../utils';

const ListName = ({name}) => {
  const [isColor, setIsColor] = useState({
    backgroundColor: mainColors.pink,
    color: mainColors.white,
  });

  return (
    <TouchableOpacity activeOpacity={1} style={styles.container}>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default ListName;

const styles = StyleSheet.create({
  container: {
    backgroundColor: mainColors.pink,
    borderWidth: 1,
    borderColor: mainColors.pink,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 15,
    fontFamily: fonts.primary[500],
    color: mainColors.white,
  },
});
