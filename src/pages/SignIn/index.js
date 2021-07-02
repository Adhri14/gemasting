import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {EmailView, Header, TelephoneView} from '../../components';
import {colors, fonts, mainColors} from '../../utils';

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

const SignIn = ({navigation}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Email', title: 'Email'},
    {key: 'Telephone', title: 'Nomor Telepon'},
  ]);

  const renderScene = SceneMap({
    Email: EmailView,
    Telephone: TelephoneView,
  });
  return (
    <View style={styles.page}>
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
      </ScrollView>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    backgroundColor: mainColors.lightSmoke,
    flex: 1,
  },
  title: {
    fontSize: 45,
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
});
