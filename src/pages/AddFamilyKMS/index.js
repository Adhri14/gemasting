import React from 'react';
import {ScrollView, StyleSheet, Text, View, StatusBar} from 'react-native';
import {
  Button,
  Card,
  DatePicker,
  Gap,
  Header,
  Radio,
  TextInput,
} from '../../components';
import {fonts, mainColors} from '../../utils';

const AddFamilyKMS = ({navigation}) => {
  return (
    <>
      <Header title="Anggota Keluarga" onPress={() => navigation.goBack()} />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor={mainColors.smoke} />
        <View style={styles.page}>
          <Gap height={30} />
          <Text style={styles.title}>Anggota 1</Text>
          <Gap height={10} />
          <Card>
            <TextInput backgroundColor="white" label="Nama" />
            <Gap height={20} />
            <Radio valueItem1="L" valueItem2="P" />
            <Gap height={20} />
            <DatePicker
              backgroundColor="white"
              mode="date"
              label="Tanggal Lahir"
              placeholder="dd-mm-yyyy"
            />
          </Card>
          <Gap height={30} />
          <Text style={styles.title}>Anggota 2</Text>
          <Gap height={10} />
          <Card>
            <TextInput backgroundColor="white" label="Nama" />
            <Gap height={20} />
            <Radio valueItem1="L" valueItem2="P" />
            <Gap height={20} />
            <DatePicker
              backgroundColor="white"
              mode="date"
              label="Tanggal Lahir"
              placeholder="dd-mm-yyyy"
            />
          </Card>
          <Gap height={40} />
          <Button title="Simpan" />
        </View>
      </ScrollView>
    </>
  );
};

export default AddFamilyKMS;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: mainColors.lightSmoke,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: mainColors.black,
  },
});
