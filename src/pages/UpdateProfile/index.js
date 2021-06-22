import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Header, InputCustomer, InputPakar} from '../../components';
import {colors} from '../../utils';

const UpdateProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Data Pribadi" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <InputCustomer />
          {/* <InputPakar /> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 25,
    paddingTop: 0,
  },
});
