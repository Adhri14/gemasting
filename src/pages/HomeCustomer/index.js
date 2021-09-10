import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {
  IconImage,
  IlChatPakar,
  IlJanji,
  IlKMS,
  IlKomunitas,
  IlRekamMedis,
  IlStunting,
} from '../../assets';
import {CardButton, Gap, HeaderHome, Skeleton} from '../../components';
import {fonts, getData, mainColors, removeData} from '../../utils';
import {useDispatch} from 'react-redux';

const HomeCustomer = ({navigation}) => {
  const dispatch = useDispatch();
  const [dataProfile, setDataProfile] = useState({
    profile: '',
    name: '',
    role: 0,
    uuid: '',
    uid: '',
  });

  const [token, setToken] = useState('');

  const data = {
    token: token.value,
    uuid: dataProfile.uuid,
  };

  dispatch({type: 'SET_AUTHORIZATION', value: data});

  useEffect(() => {
    let unmounted = false;
    getData('token').then(res => {
      if (!unmounted) {
        setToken(res);
      }
    });
    // setTimeout(() => {

    // }, 2000);
    getData('userProfile').then(resProfile => {
      if (!unmounted) {
        setDataProfile({
          name: resProfile.profile.name,
          role: resProfile.role_id,
          profile: resProfile.profile.photo,
          uuid: resProfile.profile.user_uuid,
          uid: resProfile.profile.uuid,
        });
      }
    });
    return () => {
      unmounted = true;
    };
  }, []);

  const Role = () => {
    if (dataProfile.role === 2) {
      return (
        <View style={styles.content}>
          <Text style={styles.title}>Fitur Kami</Text>
          <View style={styles.wrapper}>
            <CardButton
              label="Chat Pakar"
              onPress={() => {
                dispatch({type: 'SET_LOADING', value: true});
                navigation.navigate('ChatPakar');
              }}>
              <IlChatPakar />
            </CardButton>
            <CardButton
              label="Buat Janji"
              onPress={() => navigation.navigate('Appointment')}>
              <IlJanji />
            </CardButton>
            <CardButton
              label="KMS Online"
              onPress={() =>
                navigation.navigate('KmsOnline', {...dataProfile, ...token})
              }>
              <IlKMS />
            </CardButton>
            <CardButton
              label="Cek Stunting"
              onPress={() =>
                navigation.navigate('Stunting', {...dataProfile, ...token})
              }>
              <IlStunting />
            </CardButton>
            <CardButton label="Rekam Medis">
              <IlRekamMedis />
            </CardButton>
            <CardButton label="Komunitas">
              <IlKomunitas />
            </CardButton>
          </View>
        </View>
      );
    }
    if (dataProfile.role === 3) {
      return (
        <View style={styles.content}>
          <Text style={styles.title}>Fitur Kami</Text>
          <View style={styles.wrapper}>
            <CardButton
              label="Chat Pakar"
              onPress={() => {
                dispatch({type: 'SET_LOADING_MAIN', value: true});
                navigation.navigate('ChatPakar');
              }}>
              <IlChatPakar />
            </CardButton>
            <CardButton label="Buat Janji">
              <IlJanji />
            </CardButton>
            <CardButton
              label="KMS Online"
              onPress={() => {
                // dispatch({type: 'SET_LOADING_MAIN', value: true});
                navigation.navigate('KmsOnline', {...dataProfile, ...token});
              }}>
              <IlKMS />
            </CardButton>
          </View>
          <Gap height={30} />
          <Text style={styles.title}>Dashboard Pakar</Text>
          <View style={styles.wrapper}>
            <CardButton
              label="KMS Online"
              type="card-big"
              onPress={() => navigation.navigate('KmsOnline')}
            />
            <CardButton
              label="KMS Online"
              type="card-big"
              onPress={() => navigation.navigate('KmsOnline')}
            />
          </View>
        </View>
      );
    }
    if (dataProfile.role === 4) {
      return (
        <View style={styles.content}>
          <Text style={styles.title}>Fitur Kami</Text>
          <View style={styles.wrapper}>
            <CardButton
              label="Chat Pakar"
              onPress={() => navigation.navigate('ChatPakar')}>
              <IlChatPakar />
            </CardButton>
            <CardButton label="Buat Janji">
              <IlJanji />
            </CardButton>
            <CardButton
              label="KMS Online"
              onPress={
                (() => navigation.navigate('KmsOnline'),
                {...dataProfile, ...token})
              }>
              <IlKMS />
            </CardButton>
          </View>
          <Gap height={30} />
          <Text>Dashboard Posyandu</Text>
          <View style={styles.wrapper}>
            <CardButton
              label="KMS Online"
              type="card-big"
              onPress={() => navigation.navigate('KmsOnline')}
            />
            <CardButton
              label="KMS Online"
              type="card-big"
              onPress={() => navigation.navigate('KmsOnline')}
            />
          </View>
        </View>
      );
    }
    if (dataProfile.role === 5) {
      return (
        <View style={styles.content}>
          <Text style={styles.title}>Fitur Kami</Text>
          <View
            style={styles.wrapper}
            onPress={() => navigation.navigate('ChatPakar')}>
            <CardButton label="Chat Pakar">
              <IlChatPakar />
            </CardButton>
            <CardButton label="Buat Janji">
              <IlJanji />
            </CardButton>
            <CardButton
              label="KMS Online"
              onPress={
                (() => navigation.navigate('KmsOnline'),
                {...dataProfile, ...token})
              }>
              <IlKMS />
            </CardButton>
          </View>
          <Gap height={30} />
          <Text>Dashboard Home Baby Spa</Text>
          <View style={styles.wrapper}>
            <CardButton
              label="KMS Online"
              type="card-big"
              onPress={() => navigation.navigate('KmsOnline')}
            />
            <CardButton
              label="KMS Online"
              type="card-big"
              onPress={() => navigation.navigate('KmsOnline')}
            />
          </View>
        </View>
      );
    }

    return (
      <View>
        <Skeleton type="home" />
      </View>
    );
  };
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <StatusBar backgroundColor={mainColors.smoke} barStyle="dark-content" />
        <HeaderHome
          img={{
            uri: dataProfile.profile !== '' ? dataProfile.profile : null,
          }}
          name={dataProfile.name}
        />
        <View style={styles.container}>
          <View style={styles.banner}>
            <IconImage />
          </View>
          <View>
            <Role />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeCustomer;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: mainColors.white,
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  container: {
    marginBottom: 120,
    marginTop: 40,
  },
  banner: {
    backgroundColor: mainColors.smoke,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    height: 150,
  },
  content: {
    marginTop: 40,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: mainColors.pink,
  },
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});
