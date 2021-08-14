import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import {Gap, ListCard} from '../../components';
import {mainColors, fonts, colors} from '../../utils';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';

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
          <Text style={styles.textIndicator(focused)}>{route.title}</Text>
        )}
      />
    </ScrollView>
  );
};

const Chat = () => {
  return (
    <View style={{flex: 1}}>
      <ListCard
        colorHeader={mainColors.green}
        colorsProgress={mainColors.white}
        colorsTime={mainColors.white}
        progress="Sedang Aktif"
        time="15.00"
        name="James Bond"
        desc="3578102110030001"
      />
      <ListCard
        colorHeader={mainColors.green}
        colorsProgress={mainColors.white}
        colorsTime={mainColors.white}
        progress="Sedang Aktif"
        time="15.00"
        name="James Bond"
        desc="3578102110030001"
      />
      <ListCard
        colorHeader={mainColors.green}
        colorsProgress={mainColors.white}
        colorsTime={mainColors.white}
        progress="Sedang Aktif"
        time="15.00"
        name="James Bond"
        desc="3578102110030001"
      />
    </View>
  );
};
const Janji = () => {
  return (
    <View style={{flex: 1}}>
      <ListCard type="janji-medis" />
    </View>
  );
};
const Rekam = () => {
  return (
    <View style={{flex: 1}}>
      <ListCard type="rekam-medis" />
    </View>
  );
};
const KMS = () => {
  return (
    <View style={{flex: 1}}>
      <ListCard type="kms-online" />
    </View>
  );
};
const Stunting = () => {
  return (
    <View style={{flex: 1}}>
      <ListCard type="stunting" />
    </View>
  );
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
  textIndicator: focused => ({
    color: focused ? mainColors.black : colors.text.primary2,
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
  }),
});
