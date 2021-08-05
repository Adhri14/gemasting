import React from 'react';
import {StyleSheet, Text, View, ScrollView, StatusBar} from 'react-native';
import {Header, TextInput, Gap, Button, ListName, Card} from '../../components';
import {mainColors, fonts} from '../../utils';
import {IconClose} from '../../assets';

const Stunting = ({navigation}) => {
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="dark-content" backgroundColor={mainColors.smoke} />
      <View style={styles.page}>
        <Header title="Cek Stunting" onPress={() => navigation.goBack()} />
        <Gap height={30} />
        <View style={styles.content}>
          <Text style={styles.name}>Pilih Pasien</Text>
          <Card>
            <Text style={styles.title}>Pribadi</Text>
            <Gap height={32} />
            <ListName name="Jhone Dae" />
            <Gap height={40} />
            <Text style={styles.title}>Anggota Keluarga (0)</Text>
            <View style={styles.container}>
              <Gap height={20} />
              <IconClose />
              <Gap height={10} />
              <Text style={styles.desc}>
                Anda belum menambahkan daftar{'\n'}anggota keluarga
              </Text>
              <Gap height={20} />
              <View style={styles.button}>
                <Button type="button-no-outline" title="+ Tambah Keluarga" />
              </View>
            </View>
          </Card>
          <Gap height={40} />
          <Text style={styles.name}>Data Pasien</Text>
          <Gap height={20} />
          <TextInput label="Panjang/Tinggi Badan (Cm)" />
          <Gap height={60} />
          <Button
            title="Lihat Hasil"
            onPress={() => navigation.navigate('StuntingOutput')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Stunting;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: mainColors.lightSmoke,
  },
  content: {
    padding: 20,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    marginBottom: 10,
    color: mainColors.black,
  },
  title: {
    fontSize: 15,
    fontFamily: fonts.primary[500],
    color: mainColors.black,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
  },
  desc: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: mainColors.grey,
    lineHeight: 20,
  },
});
