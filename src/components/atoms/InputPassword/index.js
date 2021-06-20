import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput as TextInputRN,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {colors, fonts, mainColors} from '../../../utils';
import Icon from 'react-native-vector-icons/Feather';

const InputPassword = ({label}) => {
  const [data, setData] = useState({
    secureTextEntry: true,
  });

  const showHide = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        <TextInputRN
          style={styles.input}
          secureTextEntry={data.secureTextEntry ? true : false}
        />
        <TouchableOpacity onPress={showHide}>
          {data.secureTextEntry ? (
            <Icon name="eye-off" size={18} color="#777" />
          ) : (
            <Icon name="eye" size={18} color="#777" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputPassword;

const styles = StyleSheet.create({
  row: {
    borderRadius: 10,
    // padding: 12,
    backgroundColor: mainColors.smoke,
    color: colors.text.primary1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
    paddingVertical: 3,
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
  },
  label: {
    fontSize: 16,
    color: colors.text.primary1,
    marginBottom: 6,
    fontFamily: fonts.primary.normal,
  },
});
