import React, {useRef, useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {fonts, mainColors, useForm} from '../../utils';
import {CardButton, Gap, HeaderHome} from '../../components';
import {IconImage} from '../../assets';

const HomeCustomer = () => {
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <StatusBar backgroundColor={mainColors.smoke} barStyle="dark-content" />
        <HeaderHome />
        <View style={styles.container}>
          <View style={styles.banner}>
            <IconImage />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>Fitur Kami</Text>
            <View style={styles.wrapper}>
              <CardButton label="Chat Pakar" />
              <CardButton label="Buat Janji" />
              <CardButton label="KMS Online" />
              <CardButton label="Cek Stunting" />
              <CardButton label="Rekam Medis" />
              <CardButton label="Komunitas" />
            </View>
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
