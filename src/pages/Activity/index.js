import React, {useEffect, useState} from 'react';
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
  ActivityTab,
} from '../../components';
import {mainColors, fonts, getData} from '../../utils';
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
          <ActivityTab key={route} route={route.title} focused={focused} />
        )}
      />
    </ScrollView>
  );
};

const Aktivity = () => {
  const layout = useWindowDimensions();
  const [user, setUser] = useState({
    role: '',
  });
  useEffect(() => {
    // getRole();
    getData('userProfile').then(res => {
      console.log(res);
      setUser({
        role: res.role_id,
      });
    });
  }, []);

  // const getRole = routes => {
  //   if (user.role === 2) {
  //     const [routes] = React.useState([
  //       {key: 'Chat', title: 'Chat Dokter'},
  //       {key: 'Janji', title: 'Janji Medis'},
  //       {key: 'Rekam', title: 'Rekam Medis'},
  //       {key: 'KMS', title: 'KMS Online'},
  //       {key: 'Stunting', title: 'Cek Stunting'},
  //     ]);
  //   }
  //   if (user.role === 3) {
  //     const [routes] = React.useState([
  //       {key: 'Chat', title: 'Chat Pasien'},
  //       {key: 'Janji', title: 'Janji Medis'},
  //       {key: 'KMS', title: 'KMS Online'},
  //       {key: 'Stunting', title: 'Cek Stunting'},
  //     ]);
  //   }
  //   if (user.role === 4) {
  //     const [routes] = React.useState([
  //       {key: 'Janji', title: 'Janji Medis'},
  //       {key: 'Rekam', title: 'Rekam Medis'},
  //       {key: 'KMS', title: 'KMS Online'},
  //       {key: 'Stunting', title: 'Cek Stunting'},
  //     ]);
  //   }
  //   if (user.role === 5) {
  //     const [routes] = React.useState([
  //       {key: 'Chat', title: 'Chat'},
  //       {key: 'Janji', title: 'Janji Medis'},
  //       {key: 'Rekam', title: 'Rekam Medis'},
  //       {key: 'KMS', title: 'KMS Online'},
  //       {key: 'Stunting', title: 'Cek Stunting'},
  //     ]);
  //   }
  //   return true;
  // };

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
    <>
      <ScrollView>
        <StatusBar backgroundColor={mainColors.smoke} barStyle="dark-content" />
        <View style={styles.page}>
          <Gap height={50} />
          <Text style={styles.title}>Aktifitas</Text>
          <TabView
            renderTabBar={renderTabBar}
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
            swipeEnabled={false}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Aktivity;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: mainColors.lightSmoke,
    paddingBottom: 150,
  },
  title: {
    fontSize: 25,
    fontFamily: fonts.primary[600],
    marginLeft: 20,
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
});
