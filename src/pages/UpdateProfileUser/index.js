import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Header, InputCustomer} from '../../components';
import {colors} from '../../utils';

const UpdateProfileUser = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Data Pribadi" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <InputCustomer />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfileUser;

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
