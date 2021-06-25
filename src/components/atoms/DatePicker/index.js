import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {fonts, mainColors} from '../../../utils';

const DatePicker = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(!show);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={showDatepicker}>
      <Text style={styles.label}>Tanggal lahir</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          display="default"
          onChange={onChange}
        />
      )}
    </TouchableOpacity>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  container: {
    width: '45%',
    backgroundColor: mainColors.smoke,
    height: 55,
    borderRadius: 5,
    justifyContent: 'center',
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    paddingLeft: 10,
    color: mainColors.grey,
  },
});
