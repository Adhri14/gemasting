import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  RefreshControl,
} from 'react-native';
import {IconClose} from '../../assets';
import {
  Button,
  Card,
  Gap,
  Header,
  ListName,
  TextInput,
  EmptyFamily,
} from '../../components';
import {API} from '../../config';
import {fonts, getData, mainColors, showMessage} from '../../utils';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const KmsOnline = ({navigation, route}) => {
  const token = route.params;
  const {name, uuid} = route.params;

  const [dataUser, setDataUser] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  });

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get(`${API}family/get-by-user-uuid?user_uuid=${uuid}`, {
        headers: {
          Authorization: token.value,
        },
      })
      .then(res => {
        console.log(res.data.data);
        setDataUser(res.data.data);
      })
      .catch(
        e =>
          showMessage({
            message: e.message,
          }),
        // console.log(e.message),
      );
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }
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
            <ListName name={name} />
            <Gap height={40} />
            <Text style={styles.title}>
              Anggota Keluarga ({!dataUser.length ? '0' : dataUser.length})
            </Text>
            <View style={styles.container}>
              <Gap height={20} />
              {!dataUser.length || refreshing ? (
                <EmptyFamily />
              ) : (
                <View style={{width: '100%'}}>
                  {dataUser.map((item, index) => (
                    <View key={item.uuid}>
                      <ListName name={item.name} />
                      <Gap height={10} />
                    </View>
                  ))}
                </View>
              )}
              <Gap height={20} />
              <View style={styles.button}>
                <Button
                  type="button-no-outline"
                  title="+ Tambah Keluarga"
                  onPress={() => navigation.navigate('AddFamilyKMS')}
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
});
