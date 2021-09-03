import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {fonts, mainColors} from '../../../utils';
import {IconEdit} from '../../../assets';

const ListName = ({name, backgroundColor, color, onPress, edit, onEdit}) => {
  // const [selectedList, setSelectedList] = useState(0);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container(backgroundColor)}>
      <Text style={styles.name(color)}>{name}</Text>
      {edit && (
        <TouchableOpacity activeOpacity={1} onPress={onEdit}>
          <IconEdit />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default ListName;

const styles = StyleSheet.create({
  container: backgroundColor => ({
    backgroundColor,
    borderWidth: 1,
    borderColor: mainColors.pink,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  name: color => ({
    fontSize: 15,
    fontFamily: fonts.primary[500],
    color,
  }),
});
