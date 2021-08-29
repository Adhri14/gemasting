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
import {useDispatch} from 'react-redux';
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

  const [data, setData] = useState({
    weight: '',
    height: '',
  });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  });

  useEffect(() => {
    getUser();
  }, []);

  const dispatch = useDispatch();

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

  const onSubmit = () => {
    dispatch({type: 'SET_LOADING', value: true});
    axios
      .post(`${API}kms-online/personal`, data, {
        headers: {Authorization: token.value},
      })
      .then(res => {
        setData({});
        if (res.data.meta.code === 500) {
          showMessage({
            message: res.data.meta.message,
          });
          dispatch({type: 'SET_LOADING', value: false});
        } else if (res.data.meta.code === 200) {
          const result = {
            age: res.data.data.age,
            height_status: {
              height: res.data.data.height_status.height,
              status: res.data.data.height_status.status,
            },
            weight_status: {
              bmi: res.data.data.weight_status.bmi,
              status: res.data.data.weight_status.status,
              weight: res.data.data.weight_status.weight,
            },
            profile: {
              name: res.data.data.profile.name,
              gender: res.data.data.profile.gender,
              user_uid: res.data.data.profile.user_uuid,
            },
          };
          dispatch({type: 'SET_LOADING', value: false});
          console.log(res.data.data);
          navigation.navigate('KmsOutput', {result});
        } else {
          console.log(res.data.data);
          dispatch({type: 'SET_LOADING', value: false});
        }
      })
      .catch(
        err => console.log(err.message),
        dispatch({type: 'SET_LOADING', value: false}),
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
          <TextInput
            label="Berat Badan Saat Ini (Kg)"
            value={data.weight}
            onChangeText={val => setData({...data, weight: val})}
            keyboardType="number-pad"
          />
          <Gap height={20} />
          <TextInput
            label="Panjang / Tinggi Badan Saat Ini (Cm)"
            value={data.height}
            onChangeText={val => setData({...data, height: val})}
            keyboardType="number-pad"
          />
          <Gap height={50} />
          <Button title="Lihat Hasil" onPress={onSubmit} />
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
