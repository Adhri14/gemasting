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
import {CardButton, HeaderHome} from '../../components';
import {fonts, getData, mainColors, removeData} from '../../utils';

const HomeCustomer = ({navigation}) => {
  const [dataProfile, setDataProfile] = useState({
    profile: '',
    name: '',
    role: 0,
  });

  useEffect(() => {
    let unmounted = false;
    getData('userProfile').then(resProfile => {
      if (!unmounted) {
        setDataProfile({
          name: resProfile.profile.name,
          role: resProfile.role_id,
          profile: resProfile.profile.photo,
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
            onPress={() => navigation.navigate('KmsOnline')}>
            <IlKMS />
          </CardButton>
          <CardButton
            label="Cek Stunting"
            onPress={() => navigation.navigate('Stunting', {...dataProfile})}>
            <IlStunting />
          </CardButton>
          <CardButton label="Rekam Medis">
            <IlRekamMedis />
          </CardButton>
          <CardButton label="Komunitas">
            <IlKomunitas />
          </CardButton>
        </View>
      );
    }
    if (dataProfile.role === 3) {
      return (
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
            onPress={() => navigation.navigate('KmsOnline')}>
            <IlKMS />
          </CardButton>
        </View>
      );
    }
    if (dataProfile.role === 4) {
      return (
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
            onPress={() => navigation.navigate('KmsOnline')}>
            <IlKMS />
          </CardButton>
        </View>
      );
    }
    if (dataProfile.role === 5) {
      return (
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
            onPress={() => navigation.navigate('KmsOnline')}>
            <IlKMS />
          </CardButton>
        </View>
      );
    }

    return (
      <View style={styles.wrapper}>
        <CardButton label="Chat Pakar">
          <IlChatPakar />
        </CardButton>
        <CardButton label="Buat Janji">
          <IlJanji />
        </CardButton>
        <CardButton
          label="KMS Online"
          onPress={() => navigation.navigate('KmsOnline')}>
          <IlKMS />
        </CardButton>
        <CardButton
          label="Cek Stunting"
          onPress={() => navigation.navigate('Stunting')}>
          <IlStunting />
        </CardButton>
        <CardButton label="Rekam Medis">
          <IlRekamMedis />
        </CardButton>
        <CardButton label="Komunitas">
          <IlKomunitas />
        </CardButton>
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
          <View style={styles.content}>
            <Text style={styles.title}>Fitur Kami</Text>
            <View>
              <Role />
            </View>
          </View>
        </View>
        {/* {!loading ? (
          <View
            style={{
              flex: 1,
              backgroundColor: mainColors.black,
              opacity: 0.4,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <>
            <HeaderHome
              img={
                dataProfile.profile === null
                  ? DummyUser
                  : {uri: `${dataProfile.profile}`}
              }
              name={dataProfile.name}
            />
            <View style={styles.container}>
              <View style={styles.banner}>
                <IconImage />
              </View>
              <View style={styles.content}>
                <Text style={styles.title}>Fitur Kami</Text>
                <View>
                  <Role />
                </View>
              </View>
            </View>
          </>
        )} */}
      </View>
    </ScrollView>
  );
};

export default HomeCustomer;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: mainColors.lightSmoke,
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
