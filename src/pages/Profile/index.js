import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ProfilePhoto, List, Gap, Button, ListProfile} from '../../components';
import {colors, fonts, mainColors} from '../../utils';

const Profile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={mainColors.smoke} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={50} />
        <View style={styles.container}>
          <Text style={styles.title}>Profile</Text>
          <Gap height={30} />
          <ListProfile />
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    // marginTop: 40,
    backgroundColor: mainColors.lightSmoke,
  },
  container: {paddingHorizontal: 20, marginBottom: 150},
  title: {
    fontSize: 25,
    fontFamily: fonts.primary[600],
  },
});
