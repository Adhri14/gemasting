import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  RefreshControl,
} from 'react-native';
import {
  Header,
  TextInput,
  Gap,
  Button,
  ListName,
  Card,
  EmptyFamily,
} from '../../components';
import {mainColors, fonts, getData, showMessage} from '../../utils';
import {IconClose} from '../../assets';
import axios from 'axios';
import {API} from '../../config';
import {useDispatch} from 'react-redux';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Stunting = ({navigation, route}) => {
  const profile = route.params;
  const token = route.params;
  const [height, setHeight] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [dataUser, setDataUser] = useState([]);
  const [selectedList, setSelectedList] = useState({
    index: 0,
    uuid: '',
  });
  const [selectedListPersonal, setSelectedListPersonal] = useState(0);

  useEffect(() => {
    getUser();
  }, []);

  const dispatch = useDispatch();

  const getUser = () => {
    axios
      .get(`${API}family/get-by-user-uuid?user_uuid=${profile.uuid}`, {
        headers: {Authorization: token.value},
      })
      .then(res => {
        console.log(res.data.data);
        setDataUser(res.data.data);
      })
      .catch(e => console.log(e.message));
  };

  const onRefresh = () => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  };

  const onSubmit = () => {
    dispatch({type: 'SET_LOADING', value: true});
    if (selectedList.uuid) {
      axios
        .post(
          `${API}check-stunting/family`,
          {height, family_uuid: selectedList.uuid},
          {
            headers: {
              Authorization: token.value,
            },
          },
        )
        .then(res => {
          dispatch({type: 'SET_LOADING', value: false});
          setHeight('');
          if (res.data.meta.code === 200) {
            if (
              res.data.meta.message ===
              'Check Status Stunting Personal Successfull'
            ) {
              showMessage({
                message: 'Cek stunting berhasil',
                type: 'success',
              });
            }
            const data = res.data.data;
            navigation.navigate('StuntingOutput', {data});
          } else if (res.data.meta.code === 500) {
            showMessage({
              message: res.data.meta.message,
            });
          } else {
            console.log(res.data.data);
          }
        })
        .catch(e => {
          dispatch({type: 'SET_LOADING', value: false});
          setHeight('');
          showMessage({
            message: e.message,
          });
        });
    } else {
      axios
        .post(
          `${API}check-stunting/personal`,
          {height},
          {
            headers: {
              Authorization: token.value,
            },
          },
        )
        .then(res => {
          dispatch({type: 'SET_LOADING', value: false});
          setHeight('');
          if (res.data.meta.code === 200) {
            if (
              res.data.meta.message ===
              'Check Status Stunting Personal Successfull'
            ) {
              showMessage({
                message: 'Cek stunting berhasil',
                type: 'success',
              });
            }
            const data = res.data.data;
            navigation.navigate('StuntingOutput', {data});
            console.log(res.data.data);
          } else if (res.data.meta.code === 500) {
            showMessage({
              message: res.data.meta.message,
            });
          } else {
            console.log(res.data.data);
          }
        })
        .catch(e => {
          dispatch({type: 'SET_LOADING', value: false});
          setHeight('');
          showMessage({
            message: e.message,
          });
        });
    }
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
        <Header title="Cek Stunting" onPress={() => navigation.goBack()} />
        <Gap height={30} />
        <View style={styles.content}>
          <Text style={styles.name}>Pilih Pasien</Text>
          <Card
            onPress={() => {
              setSelectedListPersonal(-1);
              setSelectedList({
                ...selectedList,
                index: -1,
              });
            }}>
            <Text style={styles.title}>Pribadi</Text>
            <Gap height={32} />
            <ListName
              name={profile.name}
              onPress={() => setSelectedListPersonal(0)}
              backgroundColor={
                selectedListPersonal === 0 ? mainColors.pink : 'transparent'
              }
              color={
                selectedListPersonal === 0 ? mainColors.white : mainColors.pink
              }
            />
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
                  {dataUser.map((item, index) => {
                    return (
                      <View key={item.uuid}>
                        <ListName
                          onEdit={() => navigation.navigate('UpdateFamily')}
                          edit={selectedList.index === index ? true : false}
                          name={item.name}
                          onPress={() =>
                            setSelectedList({
                              ...selectedList,
                              index,
                              uuid: item.uuid,
                            })
                          }
                          backgroundColor={
                            selectedList.index === index
                              ? mainColors.pink
                              : 'transparent'
                          }
                          color={
                            selectedList.index === index
                              ? mainColors.white
                              : mainColors.pink
                          }
                        />
                        <Gap height={10} />
                      </View>
                    );
                  })}
                </View>
              )}
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
          <Gap height={20} />
          <TextInput
            label="Panjang/Tinggi Badan (Cm)"
            value={height}
            onChangeText={val => setHeight(val)}
            keyboardType="number-pad"
          />
          <Gap height={60} />
          <Button title="Lihat Hasil" onPress={onSubmit} />
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
