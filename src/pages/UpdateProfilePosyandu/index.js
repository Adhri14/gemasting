import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Header, InputPosyandu} from '../../components';
import {colors} from '../../utils';

const UpdateProfilePosyandu = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Data Pribadi" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <InputPosyandu />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfilePosyandu;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 20,
    paddingTop: 0,
  },
});
