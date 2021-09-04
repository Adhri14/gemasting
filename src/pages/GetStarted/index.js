import React from 'react';
import {
  Dimensions,
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
import * as Animatable from 'react-native-animatable';

const GetStarted = ({navigation}) => {
  return (
    // <ImageBackground source={ILGetStarted} style={styles.page}>

    <View style={styles.page}>
      <StatusBar backgroundColor={mainColors.smoke} barStyle="dark-content" />
      <Animatable.View duration={1000} animation="fadeInDown">
        <Welcome />
      </Animatable.View>
      <View style={styles.container}>
        <Animatable.Text
          duration={1000}
          animation="zoomIn"
          style={styles.title}>
          Bergabung Sebagai
        </Animatable.Text>
        <View style={styles.row}>
          <Animatable.View duration={800} animation="fadeInLeft">
            <CardButton
              label="Pasien"
              type="card-big"
              onPress={() => navigation.navigate('SignUpCustomer')}>
              <IlPasien width={width <= 360 ? 80 : 100} />
            </CardButton>
          </Animatable.View>
          <Animatable.View duration={800} animation="fadeInRight">
            <CardButton
              label="Partner"
              type="card-big"
              onPress={() => navigation.navigate('SignUpPartner')}>
              <IlPartner width={width <= 360 ? 80 : 100} />
            </CardButton>
          </Animatable.View>
        </View>
      </View>
    </View>
    // </ImageBackground>
  );
};

export default GetStarted;

const {width} = Dimensions.get('window');

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
    fontSize: width <= 360 ? 18 : 25,
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
