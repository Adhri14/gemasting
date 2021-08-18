import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {
  EmailViewPakar,
  Header,
  TelephoneViewPakar,
  Line,
  Gap,
  Button,
  Link,
} from '../../components';
import {colors, fonts, mainColors, showMessage, storeData} from '../../utils';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import Axios from 'axios';
import {API} from '../../config';

const renderTabBar = props => {
  return (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      indicatorContainerStyle={styles.container}
      style={styles.wrapper}
      tabStyle={styles.tab}
      renderLabel={({route, focused}) => (
        <Text
          style={{
            color: focused ? mainColors.black : colors.text.primary2,
            fontSize: 16,
            fontFamily: fonts.primary.normal,
            textAlign: 'center',
          }}>
          {route.title}
        </Text>
      )}
    />
  );
};

const SignInPakar = ({navigation}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Email', title: 'Email'},
    {key: 'Telephone', title: 'Nomor Telepon'},
  ]);

  const renderScene = SceneMap({
    Email: EmailViewPakar,
    Telephone: TelephoneViewPakar,
  });

  const onSubmitGoogle = async () => {
    // Sign-in the user with the credential
    try {
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      auth()
        .signInWithCredential(googleCredential)
        .then(res => {
          const data = {
            email: res.user.email,
          };

          Axios.post(`${API}pakar/login-by-gmail`, data)
            .then(result => {
              if (result.data.meta.code === 500) {
                showMessage({
                  message: result.data.meta.message,
                });
              } else if (result.data.meta.code === 200) {
                storeData('token', {value: `Bearer ${result.data.data.token}`});
                storeData('userProfile', result.data.data);
                storeData('provider', {value: res.user.providerId});
                navigation.reset({
                  index: 0,
                  routes: [{name: 'MainApp'}],
                });
              } else {
                console.log(result.data.data);
              }
            })
            .catch(e => {
              showMessage({
                message: e.message,
              });
            });
        })
        .catch(e =>
          showMessage({
            message: e,
          }),
        );
    } catch (error) {
      if (error.message === 'Sign in action cancelled') {
        showMessage({
          message: 'Anda membatalkan pilihan akun',
        });
      }
    }
  };

  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={mainColors.smoke} />
      <Header onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Masuk Akun</Text>
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
          swipeEnabled={false}
        />
        <View style={styles.content}>
          <Gap height={10} />
          <Line />
          <Gap height={20} />
          <Button
            google
            type="secondary"
            title="Masuk dengan Google"
            onPress={onSubmitGoogle}
          />
          <Gap height={30} />
          <Link
            title="Belum punya akun?"
            action="Daftar"
            size={16}
            align="center"
            onPress={() => navigation.navigate('SignUpPakar')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignInPakar;

const styles = StyleSheet.create({
  page: {
    backgroundColor: mainColors.lightSmoke,
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  // container: {
  //   padding: 10,
  //   borderWidth: 1,
  //   backgroundColor: 'yellow',
  // },
  indicator: {
    backgroundColor: mainColors.white,
    padding: 24,
    zIndex: -1,
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    borderRadius: 15,
    left: 8,
    width: '45%',
  },
  wrapper: {
    backgroundColor: mainColors.smoke,
    elevation: 0,
    marginHorizontal: 20,
    overflow: 'hidden',
    borderRadius: 15,
    resizeMode: 'cover',
    padding: 10,
    paddingHorizontal: 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    marginHorizontal: 20,
  },
});
