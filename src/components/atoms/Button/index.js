import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';
import {IconGoogle} from '../../../assets';
import {colors, fonts, mainColors} from '../../../utils';
import IconOnly from './IconOnly';
import ButtonIconSend from './ButtonIconSend';
import ButtonIconDoc from './ButtonIconDoc';

const Button = ({
  type,
  title,
  onPress,
  google,
  plus,
  icon,
  display,
  disable,
  ...props
}) => {
  if (type === 'button-icon-send') {
    return <ButtonIconSend disable={disable} />;
  }
  if (type === 'button-icon-doc') {
    return <ButtonIconDoc disable={disable} />;
  }

  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }

  if (type === 'button-danger') {
    return (
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={onPress}>
        <Text style={styles.textButton}>{title}</Text>
      </TouchableOpacity>
    );
  }

  if (type === 'button-no-outline') {
    return (
      <TouchableOpacity
        style={styles.button2}
        activeOpacity={0.8}
        onPress={onPress}>
        <Text style={styles.textButton2}>{title}</Text>
      </TouchableOpacity>
    );
  }

  if (type === 'button-small') {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.containerSmall(type, display)}
        onPress={onPress}
        {...props}>
        <Text style={styles.textSmall(type)}>{title}</Text>
      </TouchableOpacity>
    );
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
  containerSmall: (type, display) => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    borderWidth: type === 'secondary' ? 1 : 0,
    borderColor: colors.button.primary.border,
    paddingVertical: 7,
    borderRadius: 8,
    display,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  }),
  textSmall: type => ({
    fontSize: 12,
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
    fontFamily: fonts.primary[600],
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
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: mainColors.salmon,
    paddingVertical: 20,
    borderRadius: 15,
  },
  button2: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 20,
    borderRadius: 15,
  },
  textButton: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: mainColors.white,
  },
  textButton2: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: mainColors.pink,
  },
});
