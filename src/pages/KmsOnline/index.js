import React from 'react';
import {ScrollView, StyleSheet, Text, View, StatusBar} from 'react-native';
import {IconClose} from '../../assets';
import {Button, Card, Gap, Header, ListName, TextInput} from '../../components';
import {fonts, mainColors} from '../../utils';

const KmsOnline = ({navigation}) => {
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="dark-content" backgroundColor={mainColors.smoke} />
      <View style={styles.page}>
        <Header title="KMS Online" onPress={() => navigation.goBack()} />
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
                <Button
                  type="button-no-outline"
                  title="+ Tambah Keluarga"
                  onPress={() => navigation.navigate('AddFamily')}
                />
              </View>
            </View>
          </Card>
          <Gap height={40} />
          <Text style={styles.name}>Data Pasien</Text>
          <TextInput label="Berat Badan Saat Ini (Kg)" />
          <Gap height={20} />
          <TextInput label="Panjang / Tinggi Badan Saat Ini (Cm)" />
          <Gap height={50} />
          <Button
            title="Lihat Hasil"
            onPress={() => navigation.navigate('KmsOutput')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default KmsOnline;

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
