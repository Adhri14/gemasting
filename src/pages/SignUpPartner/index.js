import DateTimePicker from '@react-native-community/datetimepicker';
import Axios from 'axios';
import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Keyboard,
} from 'react-native';
import {IconCalender} from '../../assets';
import {
  Button,
  Checkbox,
  Gap,
  Header,
  HomeBabySpaInput,
  Line,
  Link,
  PakarInput,
  Picker,
  PosyanduInput,
  Radio,
  TextInput,
} from '../../components';
import {colors, fonts, mainColors, storeData, useForm} from '../../utils';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const SignUpPartner = ({navigation}) => {
  const isDisplay = 'none';
  const [pakar, setPakar] = useState(null);

  const Input = () => {
    if (
      pakar === 1 ||
      pakar === 2 ||
      pakar === 3 ||
      pakar === 4 ||
      pakar === 5
    ) {
      return <PakarInput pakar={pakar} />;
    }
    if (pakar === 6) {
      return <PosyanduInput />;
    }
    if (pakar === 7) {
      return <HomeBabySpaInput />;
    }
    return <View />;
  };

  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={mainColors.smoke} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header onPress={() => navigation.goBack()} />
        <View style={styles.content}>
          <Gap height={10} />
          <Text style={styles.title}>Daftar Akun</Text>
          <Gap height={15} />
          <Picker
            label="Pilih Profesi"
            value={pakar}
            onValueChange={val => setPakar(val)}
          />
          <Gap height={30} />
          <View style={styles.line} />
          <Gap height={30} />
          <View style={styles.wrapper(isDisplay)}>
            <Input />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpPartner;

const styles = StyleSheet.create({
  page: {
    backgroundColor: mainColors.lightSmoke,
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
  },
  content: {
    padding: 20,
    paddingTop: 0,
    backgroundColor: colors.white,
    flex: 1,
  },
  line: {
    height: 1,
    backgroundColor: mainColors.smoke,
    borderRadius: 10,
  },
  wrapper: isDisplay => ({
    display: isDisplay === null ? 'none' : 'flex',
  }),
  container: {
    backgroundColor: mainColors.smoke,
    height: 65,
    borderRadius: 15,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    color: mainColors.black,
    marginBottom: 10,
    fontFamily: fonts.primary[600],
  },
  placeholder: {
    fontSize: 16,
    fontFamily: fonts.primary[500],
    color: mainColors.black,
    zIndex: 1,
  },
  rowDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
