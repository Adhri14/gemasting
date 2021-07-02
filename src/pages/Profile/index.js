import React from 'react';
import {
  ScrollView,
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={20} />
        <View style={styles.container}>
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
    backgroundColor: mainColors.lightSmokes,
  },
  container: {paddingHorizontal: 20, paddingTop: 60},
});
