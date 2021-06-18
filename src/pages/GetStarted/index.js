import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Welcome} from '../../assets';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';
import {colors, mainColors} from '../../utils';
import {fonts} from '../../utils/fonts';

const GetStarted = ({navigation}) => {
  return (
    // <ImageBackground source={ILGetStarted} style={styles.page}>
    <View style={styles.page}>
      <View>
        <Welcome />
      </View>
      <View style={styles.container}>
        <Button
          title="Gabung Sebagai User"
          onPress={() => navigation.navigate('SignIn')}
        />
        <Gap height={12} />
        <Button
          title="Gabung Sebagai Pakar"
          onPress={() => navigation.navigate('SignUp')}
        />
        <Gap height={12} />
        <Button
          title="Gabung Sebagai Lembaga"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
    // </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 35,
    justifyContent: 'space-between',
    backgroundColor: mainColors.white,
    flex: 1,
    alignItems: 'center',
  },
  container: {
    width: '100%',
  },
});
