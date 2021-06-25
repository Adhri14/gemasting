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
      style={styles.wrapper}
      tabStyle={styles.tab}
      renderLabel={({route, focused}) => (
        <Text
          style={{
            color: focused ? mainColors.white : colors.text.primary1,
            fontSize: 13,
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
    {key: 'Email', title: 'Login Dengan Email'},
    {key: 'Telephone', title: 'Login Dengan No. Telepon'},
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
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontSize: 45,
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  indicator: {
    backgroundColor: mainColors.teal,
    height: 70,
    zIndex: -1,
  },
  wrapper: {
    backgroundColor: mainColors.ocean,
    elevation: 0,
    marginHorizontal: 20,
    overflow: 'hidden',
    borderRadius: 30,
    resizeMode: 'cover',
  },
});
