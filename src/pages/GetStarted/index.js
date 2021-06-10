import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILGetStarted, ILLogo} from '../../assets';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';
import {fonts} from '../../utils/fonts';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>Bergabung dan Bermanfaat Bagi Sekitar</Text>
      </View>
      <View>
        <Button text="Gabung Sebagai User" onPress={() => alert('Hello')} />
        <Gap height={12} />
        <Button
          text="Gabung Sebagai Partner"
          onPress={() => navigation.navigate('SignUp')}
        />
        <Gap height={12} />
        <Button
          text="Gabung dengan Lembaga"
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 35,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 25,
    color: 'black',
    marginTop: 91,
    fontFamily: fonts.primary[600],
    color: 'white',
  },
});
