import React, {useState} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {fonts, mainColors} from '../../../utils';
import moment from 'moment';
import {IconCalender, IconTime} from '../../../assets';

const DatePicker = ({
  placeholder,
  label,
  value,
  type,
  onValueChange,
  show,
  onPress,
  mode,
  backgroundColor,
}) => {
  // const [date, setDate] = useState(new Date());
  // const [mode, setMode] = useState('date');
  // const [show, setShow] = useState(false);

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(Platform.OS === 'ios');
  //   setDate(currentDate);
  // };

  // const showMode = currentMode => {
  //   setShow(true);
  //   setMode(currentMode);
  // };

  // const showDatepicker = () => {
  //   showMode('date');
  // };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        style={styles.container(backgroundColor)}
        onPress={onPress}>
        <View style={styles.row}>
          <Text style={styles.placeholder}>{placeholder}</Text>
          {mode === 'date' && <IconCalender />}
          {mode === 'time' && <IconTime />}
        </View>
        {show && (
          <DateTimePicker
            value={value}
            mode={type}
            display="default"
            is24Hour={false}
            onChange={onValueChange}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  container: backgroundColor => ({
    backgroundColor:
      backgroundColor === 'white' ? mainColors.white : mainColors.smoke,
    height: 65,
    borderRadius: 15,
    justifyContent: 'center',
  }),
  label: {
    fontSize: 16,
    color: mainColors.black,
    marginBottom: 10,
    fontFamily: fonts.primary[600],
  },
  placeholder: {
    fontSize: 16,
    fontFamily: fonts.primary[500],
    color: mainColors.black,
    zIndex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
