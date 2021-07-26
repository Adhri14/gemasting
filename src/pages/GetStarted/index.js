import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IlPartner, IlPasien, Welcome} from '../../assets';
import {CardButton} from '../../components';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';
import {colors, fonts, mainColors} from '../../utils';

const GetStarted = ({navigation}) => {
  return (
    // <ImageBackground source={ILGetStarted} style={styles.page}>
    <View style={styles.page}>
      <StatusBar backgroundColor={mainColors.smoke} barStyle="dark-content" />
      <View>
        <Welcome />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Bergabung Sebagai</Text>
        <View style={styles.row}>
          <CardButton
            label="User"
            type="card-big"
            onPress={() => navigation.navigate('SignUpCustomer')}>
            <IlPasien />
          </CardButton>
          <CardButton
            label="Partner"
            type="card-big"
            onPress={() => navigation.navigate('SignUpLembaga')}>
            <IlPartner />
          </CardButton>
        </View>
      </View>
    </View>
    // </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 20,
    justifyContent: 'space-evenly',
    backgroundColor: mainColors.lightSmoke,
    flex: 1,
    alignItems: 'center',
  },
  container: {
    width: '100%',
  },
  title: {
    fontSize: 25,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
