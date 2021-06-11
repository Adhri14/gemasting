import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILGetStarted, ILLogo} from '../../assets';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';
import {colors} from '../../utils';
import {fonts} from '../../utils/fonts';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>Bergabung dan Bermanfaat Bagi Sekitar</Text>
      </View>
      <View>
        <Button title="Sign In" onPress={() => navigation.navigate('SignIn')} />
        <Gap height={12} />
        <Button
          type="secondary"
          title="Sign Up"
          onPress={() => navigation.navigate('SignUp')}
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
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontSize: 25,
    color: 'black',
    marginTop: 91,
    fontFamily: fonts.primary[600],
    color: colors.white,
  },
});
