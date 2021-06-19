import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ImageIntro1, ImageIntro2, ImageIntro3, ImageIntro4} from '../../assets';
import {Gap} from '../../components';
import {colors, mainColors} from '../../utils';
import {fonts} from '../../utils/fonts';

const slides = [
  {
    key: 1,
    title: 'Selamat Datang di \nGEMASTING',
    text: 'Geser ke kiri untuk mengenal\nkami lebih lanjut',
    image: <ImageIntro1 width="100%" height="100%" />,
  },
  {
    key: 2,
    title: 'Gerakan Masyarakat \nSadar Stunting',
    text: 'Aplikasi yang dikembangkan untuk\npermasalahan stunting',
    image: <ImageIntro2 width="100%" height="100%" />,
  },
  {
    key: 3,
    title: 'Konsultasi Masalah\nKesehatan Anda',
    text: 'Konsultasi kesehatan anda\ndengan pakar kami yang terverifikasi',
    image: <ImageIntro3 width="100%" height="100%" />,
  },
  {
    key: 4,
    title: 'Berbagi dan Terhubung\nDengan Pengguna Lain',
    text: 'Platform dengan komunitas pengguna\ndari seluruh Indonesia',
    image: <ImageIntro4 width="100%" height="100%" />,
  },
];
const AppIntro = ({navigation}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    const index = viewableItems[0].index;
    setCurrentSlide(index);
  }).current;

  const flatListRef = useRef(null);

  const handleSkip = () => {
    flatListRef.current.scrollToEnd({animated: true});
  };

  const handlePrev = () => {
    if (currentSlide === 0) {
      return false;
    }
    // console.log(currentSlide >= slides.length - 1);
    flatListRef.current.scrollToIndex({index: currentSlide - 1});
  };

  const handleOnDone = () => {
    navigation.replace('GetStarted');
  };

  return (
    <>
      <StatusBar
        translucent={false}
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <View style={styles.header}>
        {/* Previouse */}
        {currentSlide >= 1 && (
          <TouchableOpacity
            activeOpacity={1}
            onPress={handlePrev}
            style={styles.btn}>
            <Icon name="arrow-left" size={20} color={mainColors.lightSmoke} />
          </TouchableOpacity>
        )}

        <Gap width="9%" />

        {/* Skip */}
        <View style={styles.wrapper}>
          {currentSlide === 3 ? (
            <Text style={styles.skip}>{''}</Text>
          ) : (
            <Text onPress={handleSkip} style={styles.skip}>
              Lewati
            </Text>
          )}
        </View>
      </View>

      {/* Content Slider */}
      <FlatList
        ref={flatListRef}
        data={slides}
        style={styles.page}
        horizontal
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.key.toString()}
        renderItem={({item}) => (
          <View style={styles.slide}>
            <View style={styles.image}>{item.image}</View>
            <View style={styles.content}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.text}>{item.text}</Text>
            </View>
          </View>
        )}
      />

      <View style={styles.footer}>
        {/* Indicator */}
        <View style={styles.indicatorContainer}>
          {slides.map((item, index) => (
            <View
              key={item.key.toString()}
              style={
                index === currentSlide
                  ? styles.indicatorActive
                  : styles.indicator
              }
            />
          ))}
        </View>

        {/* Button Done */}
        {currentSlide >= 3 && (
          <TouchableOpacity style={styles.btnBig} onPress={handleOnDone}>
            <Icon name="arrow-right" size={20} color={mainColors.white} />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default AppIntro;

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: mainColors.white,
  },
  slide: {
    width,
    height,
    alignItems: 'center',
  },
  image: {
    alignSelf: 'center',
    marginTop: -10,
    marginBottom: 20,
    width: width - 40,
    height: height * 0.4,
  },
  content: {
    alignSelf: 'flex-start',
    paddingVertical: 15,
    paddingHorizontal: 20,
    flex: 1,
    width,
    // alignItems: 'center',
  },
  title: {
    fontSize: 25,
    marginBottom: 10,
    fontFamily: fonts.primary[700],
    color: colors.text.primary1,
  },
  text: {
    fontSize: 16,
    lineHeight: 30,
    fontFamily: fonts.primary[300],
    color: mainColors.lightSmoke,
  },
  indicatorContainer: {
    flexDirection: 'row',
    width: '35%',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center',
  },
  indicator: {
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: mainColors.smoke,
  },
  indicatorActive: {
    width: 30,
    height: 15,
    borderRadius: 20,
    backgroundColor: mainColors.teal,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: mainColors.white,
    paddingVertical: 10,
  },
  wrapper: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  btn: {
    width: 50,
    height: 50,
    zIndex: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    letterSpacing: 1,
    fontSize: 14,
    color: 'white',
  },
  skip: {
    zIndex: 999,
    letterSpacing: 1,
    fontSize: 15,
    textDecorationLine: 'underline',
    fontFamily: fonts.primary[300],
  },
  btnBig: {
    width: 50,
    height: 50,
    borderRadius: 30,
    zIndex: 999,
    backgroundColor: colors.button.primary.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: mainColors.white,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
});
