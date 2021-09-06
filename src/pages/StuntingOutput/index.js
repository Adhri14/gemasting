import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {IconInfo, IconShield} from '../../assets';
import {Button, Gap, Header, InfoStunting} from '../../components';
import {colors, fonts, mainColors, storeData} from '../../utils';

const Info = ({children, label}) => {
  return (
    <View style={styles.row}>
      {children}
      <Gap width={10} />
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

const StuntingOutput = ({navigation, route}) => {
  const {data} = route.params;
  console.log(data);

  const infoStunting = () => {
    if (data.status === 'Normal') {
      return 'normal';
    } else if (data.status === 'Stunting Parah') {
      return 'stunting';
    } else {
      return null;
    }
  };

  const onSave = () => {
    navigation.replace('MainApp', {screen: 'Activity'});
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <StatusBar backgroundColor={mainColors.smoke} barStyle="dark-content" />
      <Header onPress={() => navigation.goBack()} title="Status Stunting" />
      <View style={styles.page}>
        <InfoStunting type={infoStunting()} />
        <Info label="Imunisasi Bayi & Baduta">
          <IconInfo width={34} height={34} />
        </Info>
        <View style={styles.content}>
          <Text style={styles.desc}>
            Lakukan imunisasi DPT/HB/Hib4 dan Campak-Rubella 2 saat memasuki
            usia 18 bulan sesuai anjuran.
          </Text>
        </View>
        <Info label="Tips Perkembangan Bayi">
          <IconShield width={34} height={34} />
        </Info>
        <View style={styles.content}>
          <Text style={styles.desc}>1. Ajari berjalan di undakan tangga.</Text>
          <Text style={styles.desc}>2. Ajari menyapu & bersihkan meja.</Text>
          <Text style={styles.desc}>3. Ajak memberesikan mainan.</Text>
          <Text style={styles.desc}>4. Ajari coret-coret di kertas.</Text>
          <Text style={styles.desc}>5. Bacakan cerita anak.</Text>
        </View>
      </View>
      <View style={styles.button}>
        <Button title="Simpan Hasil Cek Stunting" onPress={onSave} />
      </View>
    </ScrollView>
  );
};

export default StuntingOutput;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: mainColors.lightSmoke,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: mainColors.pink,
  },
  content: {
    marginLeft: 44,
    marginTop: 15,
    marginBottom: 40,
  },
  desc: {
    fontSize: 16,
    color: colors.text.primary1,
    fontFamily: fonts.primary[400],
  },
  button: {
    padding: 20,
    backgroundColor: mainColors.lightSmoke,
  },
});
