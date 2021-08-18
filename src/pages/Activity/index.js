import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import {
  Gap,
  ListCard,
  Chat,
  Janji,
  Rekam,
  KMS,
  Stunting,
} from '../../components';
import {mainColors, fonts, colors} from '../../utils';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {
  IconDarkActivity,
  IconDarkChat,
  IconDarkCheck,
  IconDarkPromise,
  IconDarkRecord,
  IconWhiteActivity,
  IconWhiteChat,
  IconWhiteCheck,
  IconWhitePromise,
  IconWhiteRecord,
} from '../../assets'; 

const renderTabBar = props => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <TabBar
        {...props}
        indicatorStyle={styles.indicator}
        indicatorContainerStyle={styles.container}
        style={styles.wrapper}
        tabStyle={styles.tab}
        renderLabel={({route, focused}) => (
        <Tab key={route} route={route.title} focused={focused} />

        )}
      />
    </ScrollView>
  );
};

const Tab = ({focused, route}) => {
  switch (route) {
    case 'Chat':
      return (
        <View style={styles.button(focused)}>
          {focused ? <IconWhiteChat/> : <IconDarkChat/>}
          <Text style={styles.textIndicator(focused)}>{route}</Text>
        </View>
      );
      case 'Janji':
      return (
        <View style={styles.button2(focused)}>
          {focused ? <IconWhiteChat/> : <IconDarkChat/>}
          <Text style={styles.textIndicator(focused)}>{route}</Text>
        </View>
      );
      case 'Rekam':
      return (
        <View style={styles.button3(focused)}>
          {focused ? <IconWhiteChat/> : <IconDarkChat/>}
          <Text style={styles.textIndicator(focused)}>{route}</Text>
        </View>
      );
      case 'KMS':
      return (
        <View style={styles.button4(focused)}>
          {focused ? <IconWhiteChat/> : <IconDarkChat/>}
          <Text style={styles.textIndicator(focused)}>{route}</Text>
        </View>
      );
      case 'Stunting':
      return (
        <View style={styles.button5(focused)}>
          {focused ? <IconWhiteChat/> : <IconDarkChat/>}
          <Text style={styles.textIndicator(focused)}>{route}</Text>
        </View>
      );

    default:
    return (
        <View>
          {focused ? <IconWhiteChat/> : <IconDarkChat/>}

          <Text style={styles.textIndicator(focused)}>{route}</Text>
        </View>
      );
     
  }
};

const Aktivity = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Chat', title: 'Chat'},
    {key: 'Janji', title: 'Janji Medis'},
    {key: 'Rekam', title: 'Rekam Medis'},
    {key: 'KMS', title: 'KMS Online'},
    {key: 'Stunting', title: 'Cek Stunting'},
  ]);

  const renderScene = SceneMap({
    Chat: Chat,
    Janji: Janji,
    Rekam: Rekam,
    KMS: KMS,
    Stunting: Stunting,
  });

  return (
    <ScrollView>
      <View style={styles.page}>
        <StatusBar backgroundColor={mainColors.smoke} barStyle="dark-content" />
        <Gap height={50} />
        <View style={styles.container}>
          <Text style={styles.title}>Aktifitas</Text>
          {/* <ActivityCard /> */}
          <TabView
            renderTabBar={renderTabBar}
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
            // swipeEnabled={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Aktivity;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: mainColors.lightSmoke,
  },
  title: {
    fontSize: 25,
    fontFamily: fonts.primary[600],
  },
  container: {
    paddingHorizontal: 20,
    marginBottom: 150,
  },
  indicator: {
    backgroundColor: mainColors.white,
    padding: 24,
    zIndex: -1,
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    borderRadius: 15,
    left: 10,
    width: '45%',
  },
  wrapper: {
    backgroundColor: mainColors.white,
    elevation: 0,
    // marginHorizontal: 20,
    marginBottom: 30,
    overflow: 'hidden',
    borderRadius: 15,
    // resizeMode: 'cover',
    padding: 10,
    paddingHorizontal: 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textIndicator: focused => ({
    color: focused ? mainColors.white : mainColors.black,
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    marginTop: 3,
    marginLeft: 10,
  }),
  button: focused => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 15,
    backgroundColor: focused ? mainColors.pink : mainColors.smoke,
  }),
  button2: focused => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 15,
    backgroundColor: focused ? mainColors.pink : mainColors.smoke,
  }),
  button3: focused => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 15,
    backgroundColor: focused ? mainColors.pink : mainColors.smoke,
  }),
  button4: focused => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 15,
    backgroundColor: focused ? mainColors.pink : mainColors.smoke,
  }),
  button5: focused => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 15,
    backgroundColor: focused ? mainColors.pink : mainColors.smoke,
  }),
});
