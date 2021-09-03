import React, {useEffect, useState} from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {
  ActivityCustomer,
  ActivityPakar,
  ActivityPosyandu,
  ActivityHBS,
  Gap,
} from '../../components';
import {fonts, getData, mainColors} from '../../utils';

const Aktivity = () => {
  const [user, setUser] = useState({
    role: '',
  });
  useEffect(() => {
    let unmounted = false;
    getData('userProfile').then(res => {
      if (!unmounted) {
        setUser({
          role: res.role_id,
        });
      }
    });
    return () => {
      unmounted = true;
    };
  }, []);

  const Role = () => {
    if (user.role === 2) {
      return <ActivityCustomer />;
    }
    if (user.role === 3) {
      return <ActivityPakar />;
    }
    if (user.role === 4) {
      return <ActivityPosyandu />;
    }
    if (user.role === 5) {
      return <ActivityHBS />;
    }
    return <ActivityPakar />;
  };

  return (
    <>
      <ScrollView>
        <StatusBar backgroundColor={mainColors.smoke} barStyle="dark-content" />
        <View style={styles.page}>
          <Gap height={50} />
          <Text style={styles.title}>Aktifitas</Text>
          <Role />
        </View>
      </ScrollView>
    </>
  );
};

export default Aktivity;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: mainColors.lightSmoke,
    paddingBottom: 150,
  },
  title: {
    fontSize: 25,
    fontFamily: fonts.primary[600],
    marginLeft: 20,
  },
  container: {
    paddingHorizontal: 20,
    marginBottom: 150,
  },
  indicator: {
    backgroundColor: mainColors.white,
    padding: 24,
    zIndex: -1,
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    borderRadius: 15,
    left: 10,
    width: '45%',
  },
  wrapper: {
    backgroundColor: mainColors.white,
    elevation: 0,
    // marginHorizontal: 20,
    marginBottom: 30,
    overflow: 'hidden',
    borderRadius: 15,
    // resizeMode: 'cover',
    padding: 10,
    paddingHorizontal: 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
