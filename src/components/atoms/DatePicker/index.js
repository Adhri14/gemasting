import React, {useState} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {fonts, mainColors} from '../../../utils';

const DatePicker = ({placeholder, label}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow();
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.container} onPress={showDatepicker}>
        <Text style={styles.placeholder}>{placeholder}</Text>
        {show && (
          <DateTimePicker
            value={new Date()}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: mainColors.smoke,
    height: 65,
    borderRadius: 15,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    color: mainColors.black,
    marginBottom: 10,
    fontFamily: fonts.primary[600],
  },
  placeholder: {
    fontSize: 16,
    fontFamily: fonts.primary[300],
    paddingLeft: 20,
    color: mainColors.grey,
  },
});
