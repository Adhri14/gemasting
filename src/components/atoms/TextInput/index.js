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

const TextInput = ({
  label,
  placeholder,
  type,
  isTextArea,
  isPassword,
  backgroundColor,
  ...props
}) => {
  const [data, setData] = useState({
    secureTextEntry: true,
  });

  const showHide = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  if (isTextArea) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <TextInputRN
          {...props}
          numberOfLines={5}
          style={styles.textArea}
          multiline={true}
          placeholder={placeholder}
          spellCheck={false}
          autoCorrect={false}
        />
      </View>
    );
  } else if (isPassword) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.row}>
          <TextInputRN
            {...props}
            style={styles.password}
            secureTextEntry={data.secureTextEntry ? true : false}
            placeholder={placeholder}
            spellCheck={false}
            autoCorrect={false}
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
  }
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN
        style={styles.input(backgroundColor)}
        {...props}
        placeholder={placeholder}
        spellCheck={false}
        autoCorrect={false}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: backgroundColor => ({
    borderRadius: 15,
    padding: 20,
    backgroundColor:
      backgroundColor === 'white' ? mainColors.white : mainColors.smoke,
    color: colors.text.primary1,
    fontSize: 16,
    fontFamily: fonts.primary[400],
  }),
  textArea: {
    textAlignVertical: 'top',
    borderRadius: 15,
    padding: 20,
    backgroundColor: mainColors.smoke,
    color: colors.text.primary1,
    fontSize: 16,
    fontFamily: fonts.primary[400],
  },
  label: {
    fontSize: 16,
    color: mainColors.black,
    marginBottom: 10,
    fontFamily: fonts.primary[600],
  },
  row: {
    borderRadius: 15,
    // padding: 12,
    backgroundColor: mainColors.smoke,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
    paddingVertical: 9,
    overflow: 'hidden',
  },
  password: {
    flex: 1,
    paddingHorizontal: 20,
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary1,
  },
});
