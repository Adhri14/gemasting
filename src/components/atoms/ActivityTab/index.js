import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {mainColors, fonts} from '../../../utils';
import {
  IconDarkActivity,
  IconDarkChat,
  IconDarkCheck,
  IconDarkPromise,
  IconDarkRecord,
  IconWhiteActivity,
  IconWhiteChat,
  IconWhiteCheck,
  IconWhitePromise,
  IconWhiteRecord,
} from '../../../assets';

const ActivityTab = ({focused, route}) => {
  switch (route) {
    case 'Chat Pasien':
      return (
        <View style={styles.button(focused)}>
          {focused ? <IconWhiteChat /> : <IconDarkChat />}
          <Text style={styles.textIndicator(focused)}>{route}</Text>
        </View>
      );
    case 'Chat Dokter':
      return (
        <View style={styles.button(focused)}>
          {focused ? <IconWhiteChat /> : <IconDarkChat />}
          <Text style={styles.textIndicator(focused)}>{route}</Text>
        </View>
      );
    case 'Janji Medis':
      return (
        <View style={styles.button(focused)}>
          {focused ? <IconWhitePromise /> : <IconDarkPromise />}
          <Text style={styles.textIndicator(focused)}>{route}</Text>
        </View>
      );
    case 'Rekam Medis':
      return (
        <View style={styles.button(focused)}>
          {focused ? <IconWhiteRecord /> : <IconDarkRecord />}
          <Text style={styles.textIndicator(focused)}>{route}</Text>
        </View>
      );
    case 'KMS Online':
      return (
        <View style={styles.button(focused)}>
          {focused ? <IconWhiteActivity /> : <IconDarkActivity />}
          <Text style={styles.textIndicator(focused)}>{route}</Text>
        </View>
      );
    case 'Cek Stunting':
      return (
        <View style={styles.button(focused)}>
          {focused ? <IconWhiteCheck /> : <IconDarkCheck />}
          <Text style={styles.textIndicator(focused)}>{route}</Text>
        </View>
      );

    default:
      return (
        <View>
          {focused ? <IconWhiteChat /> : <IconDarkChat />}

          <Text style={styles.textIndicator(focused)}>{route}</Text>
        </View>
      );
  }
};

export default ActivityTab;

const styles = StyleSheet.create({
  textIndicator: focused => ({
    color: focused ? mainColors.white : mainColors.black,
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    marginTop: 3,
    marginLeft: 20,
  }),
  button: focused => ({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 168,
    height: 60,
    borderRadius: 15,
    backgroundColor: focused ? mainColors.pink : mainColors.smoke,
    marginLeft: 10,
  }),
});
