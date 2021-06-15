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
import {colors, fonts} from '../../utils';

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
            color: focused ? colors.white : colors.text.secondary,
            fontSize: 14,
            fontFamily: fonts.primary.normal,
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
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  indicator: {
    backgroundColor: colors.primary,
    height: 48,
    zIndex: -1,
  },
  wrapper: {
    backgroundColor: colors.white,
    elevation: 0,
    borderWidth: 0.5,
    borderColor: colors.secondary,
    marginHorizontal: 20,
    overflow: 'hidden',
    borderRadius: 5,
    resizeMode: 'cover',
  },
});
