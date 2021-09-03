import React from 'react';
import {ScrollView, StyleSheet, useWindowDimensions, Text} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {mainColors} from '../../../utils';
import {ActivityTab} from '../../atoms';
import Chat from '../Chat';
import Janji from '../Janji';
import KMS from '../KMS';
import Rekam from '../Rekam';
import Stunting from '../Stunting';

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
          <ActivityTab key={route} route={route.title} focused={focused} />
        )}
      />
    </ScrollView>
  );
};

const ActivityCustomer = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Chat', title: 'Chat Dokter'},
    {key: 'Janji', title: 'Janji Medis'},
    {key: 'Rekam', title: 'Rekam Medis'},
    {key: 'KMS', title: 'KMS Online'},
    {key: 'Stunting', title: 'Cek Stunting'},
  ]);

  const renderScene = SceneMap({
    Chat,
    Janji,
    Rekam,
    KMS,
    Stunting,
  });
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      swipeEnabled={false}
    />
  );
};

export default ActivityCustomer;

const styles = StyleSheet.create({
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
});
