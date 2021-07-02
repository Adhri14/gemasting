import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {colors, mainColors} from '../../utils';
import {fonts} from '../../utils/fonts';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('AppIntro');
    }, 3000);
  }, []);
  return (
    <View style={styles.page}>
      <StatusBar barStyle="dark-content" backgroundColor={mainColors.white} />
      <ILLogo />
      <Text style={styles.title}>GEMASTING</Text>
      <Text style={styles.textFooter}>PT. Menggapai Indonesia Cerdas</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: mainColors.lightSmoke,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    color: colors.text.primary1,
    marginTop: 10,
    fontFamily: fonts.primary[700],
  },
  textFooter: {
    position: 'absolute',
    bottom: 30,
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    color: mainColors.grey,
  },
});
