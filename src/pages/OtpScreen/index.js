import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header} from '../../components';

const OtpScreen = () => {
  return (
    <View>
      <ScrollView>
        <Header />
        <View>Kode Verifikasi</View>
      </ScrollView>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({});
