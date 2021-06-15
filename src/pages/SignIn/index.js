import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {ILLogo} from '../../assets';
import {TextInput, Link, Button, Gap, Header} from '../../components';
import {colors, fonts} from '../../utils';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const FirstRoute = () => {
  return (
    <View style={styles.container}>
      <TextInput label="Email" />
      <Gap height={24} />
      <TextInput label="Password" />
      <Gap height={40} />
      <Button title="SignIn" />
      <Gap height={10} />
      <Text
        style={{textAlign: 'center', fontSize: 16, color: colors.text.primary}}>
        Atau
      </Text>
      <Gap height={10} />
      <Button type="secondary" title="Masuk dengan Akun Google" />
      <Gap height={30} />
      <Link title="Create New Account" size={16} align="center" />
    </View>
  );
};

const SecondRoute = () => {
  return (
    <View style={styles.container}>
      <TextInput label="Telepon" />
      <Gap height={24} />
      <TextInput label="Password atau Pin" />
      <Gap height={40} />
      <Button title="SignIn" />
      <Gap height={10} />
      <Text
        style={{textAlign: 'center', fontSize: 16, color: colors.text.primary}}>
        Atau
      </Text>
      <Gap height={10} />
      <Button type="secondary" title="Masuk dengan Akun Google" />
      <Gap height={30} />
      <Link title="Create New Account" size={16} align="center" />
    </View>
  );
};

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

const SignIn = ({label}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Login Dengan Email'},
    {key: 'second', title: 'Login Dengan No. Telepon'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  return (
    <View style={styles.page}>
      <Header />
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
  container: {padding: 20},
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
  },
});
