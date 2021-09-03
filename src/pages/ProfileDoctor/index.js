import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DummyUser, IconStarOff, IconStarOn} from '../../assets';
import {Gap, Header, ProfilePhoto, Button} from '../../components';
import {colors, fonts, mainColors} from '../../utils';
import {ProgressBar, Colors} from 'react-native-paper';

const FirstRoute = () => (
  <View style={{flex: 1}}>
    <Gap height={30} />
    <Text style={styles.h1}>Biografi</Text>
    <Text style={styles.textNormal}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus
      sit amet luctus venenatis, lectus magna fringilla urna. Read more
    </Text>
    <Gap height={30} />
    <Text style={styles.h1}>Pendidikan</Text>
    <Gap height={10} />
    <View style={styles.unorderlist}>
      <View style={styles.wrapper} />
      <Text style={styles.education}>S1 Kedokteran</Text>
    </View>
    <View style={styles.unorderlist}>
      <View style={styles.wrapper} />
      <Text style={styles.education}>
        S3 Kedokteran di Universitas Indonesia
      </Text>
    </View>
    <View style={styles.unorderlist}>
      <View style={styles.wrapper} />
      <Text style={styles.education}>
        S2 Kedokteran di Universitas Indonesia
      </Text>
    </View>
  </View>
);

const SecondRoute = () => (
  <View style={{flex: 1}}>
    <Gap height={30} />
    <Text style={styles.h1}>Alamat</Text>
    <Text style={styles.textNormal}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus
      sit amet luctus venenatis, lectus magna fringilla urna. Read more
    </Text>
    <Gap height={30} />
    <Text style={styles.h1}>Maps</Text>
    <Gap height={20} />
    <Button title="Buka di Maps" />
  </View>
);

const ThirdRoute = () => (
  <View style={{flex: 1}}>
    <Gap height={30} />
    <View style={styles.mainReview}>
      <View style={styles.review}>
        <Text style={styles.reviewNumber}>4.7</Text>
        <View style={styles.starContainer}>
          <IconStarOn />
          <IconStarOn />
          <IconStarOn />
          <IconStarOn />
          <IconStarOff />
        </View>
      </View>
      <View style={styles.reviewProgress}>
        <View style={styles.progress}>
          <Text style={styles.rating}>5</Text>
          <View style={styles.progressBar}>
            <ProgressBar progress={0.5} color={mainColors.yellow} />
          </View>
        </View>
        <View style={styles.progress}>
          <Text style={styles.rating}>4</Text>
          <View style={styles.progressBar}>
            <ProgressBar progress={0.4} color={mainColors.yellow} />
          </View>
        </View>
        <View style={styles.progress}>
          <Text style={styles.rating}>3</Text>
          <View style={styles.progressBar}>
            <ProgressBar progress={0.3} color={mainColors.yellow} />
          </View>
        </View>
        <View style={styles.progress}>
          <Text style={styles.rating}>2</Text>
          <View style={styles.progressBar}>
            <ProgressBar progress={0.2} color={mainColors.yellow} />
          </View>
        </View>
        <View style={styles.progress}>
          <Text style={styles.rating}>1</Text>
          <View style={styles.progressBar}>
            <ProgressBar progress={0.1} color={mainColors.yellow} />
          </View>
        </View>
      </View>
    </View>

    <Gap height={30} />
    <Text style={styles.h1review}>Ulasan</Text>
    <Gap height={10} />
    <View style={styles.reviewContainer}>
      <Text style={styles.textNormal}>Pelayanan yang sangat baik</Text>
      <Gap height={10} />
      <View style={styles.starContainer}>
        <IconStarOn />
        <IconStarOn />
        <IconStarOn />
        <IconStarOn />
        <IconStarOn />
      </View>
    </View>
    <Gap height={40} />
    <View style={styles.reviewContainer}>
      <Text style={styles.textNormal}>Dokter sangat ahli dalam bidangnya</Text>
      <Gap height={10} />
      <View style={styles.starContainer}>
        <IconStarOn />
        <IconStarOn />
        <IconStarOn />
        <IconStarOn />
        <IconStarOn />
      </View>
    </View>
    <Gap height={30} />
  </View>
);

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.tabBar}
    renderLabel={({route, focused}) => (
      <Text style={styles.titleTab(focused)}>{route.title}</Text>
    )}
  />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const ProfileDoctor = ({navigation}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Tentang'},
    {key: 'second', title: 'Alamat'},
    {key: 'third', title: 'Review'},
  ]);
  return (
    <>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Header onPress={() => navigation.goBack()} />

        <View style={styles.page}>
          <Text style={styles.profile}>Profile</Text>
          <Gap height={20} />
          <View>
            <ProfilePhoto
              img={DummyUser}
              type="profile"
              name="Dr Jhon Doe"
              desc="Dokter Spesialis Anak"
              color="green"
            />
          </View>
          <Gap height={20} />
          <View style={styles.row}>
            <View style={styles.info}>
              <Text style={styles.text}>100+</Text>
              <Text style={styles.desc}>PASIEN</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.text}>4.7</Text>
              <Text style={styles.desc}>RATE</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.text}>5+</Text>
              <Text style={styles.desc}>TAHUN</Text>
            </View>
          </View>
          <Gap height={30} />
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
            renderTabBar={renderTabBar}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default ProfileDoctor;

const styles = StyleSheet.create({
  titleTab: focused => ({
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: focused ? mainColors.pink : mainColors.darkSmoke,
  }),
  indicator: {
    backgroundColor: mainColors.pink,
  },
  tabBar: {
    backgroundColor: 'transparent',
    elevation: 0,
  },
  unorderlist: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapper: {
    width: 8,
    height: 8,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: mainColors.pink,
  },
  education: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: mainColors.black,
  },
  page: {
    flex: 1,
    backgroundColor: mainColors.lightSmoke,
    padding: 20,
  },
  profile: {
    fontFamily: fonts.primary[600],
    color: mainColors.pink,
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#FAFAFA',
    paddingVertical: 24,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: mainColors.smoke,
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: fonts.primary[700],
    fontSize: 16,
    color: mainColors.black,
    textAlign: 'center',
  },
  desc: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
    color: mainColors.pink,
    textAlign: 'center',
  },
  info: {
    flex: 1,
  },
  mainReview: {
    flexDirection: 'row',
  },
  review: {
    paddingHorizontal: 30,
  },
  reviewNumber: {
    fontFamily: fonts.primary[700],
    fontSize: 45,
  },
  h1: {
    fontFamily: fonts.primary[600],
    fontSize: 18,
    color: mainColors.black,
  },
  h1review: {
    fontFamily: fonts.primary[600],
    fontSize: 18,
    color: mainColors.pink,
  },
  textNormal: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: mainColors.black,
  },
  rating: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
  },
  reviewContainer: {
    paddingHorizontal: 25,
  },
  reviewProgress: {
    paddingHorizontal: 30,
    paddingRight: 20,
  },
  starContainer: {
    flexDirection: 'row',
  },
  progress: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    width: Dimensions.get('window').width,
    marginTop: -2,
    marginLeft: 10,
  },
});
