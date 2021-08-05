import React from 'react';
import {ScrollView, StyleSheet, Text, View, StatusBar} from 'react-native';
import {Header} from '../../components';
import {mainColors} from '../../utils';

const AddFamily = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <StatusBar backgroundColor={mainColors.smoke} />
      <View style={styles.page}>
        <Header title="Anggota Keluarga" />
        <Text>Page Add Family</Text>
      </View>
    </ScrollView>
  );
};

export default AddFamily;

const styles = StyleSheet.create({});
