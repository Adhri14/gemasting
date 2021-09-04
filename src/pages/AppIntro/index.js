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
import {
  IconBackPink,
  ImageIntro1,
  ImageIntro2,
  ImageIntro3,
  ImageIntro4,
} from '../../assets';
import {Gap} from '../../components';
import {colors, fonts, mainColors} from '../../utils';

const slides = [
  {
    key: 1,
    title: 'Selamat Datang di \nGEMASTING',
    text: 'Geser ke kiri untuk mengenal\nkami lebih lanjut',
    image: (
      <ImageIntro1
        width={width <= 360 ? '80%' : '100%'}
        height={width <= 360 ? '80%' : '100%'}
      />
    ),
  },
  {
    key: 2,
    title: 'Gerakan Masyarakat \nSadar Stunting',
    text: 'Aplikasi yang dikembangkan untuk\npermasalahan stunting',
    image: (
      <ImageIntro2
        width={width <= 360 ? '80%' : '100%'}
        height={width <= 360 ? '80%' : '100%'}
      />
    ),
  },
  {
    key: 3,
    title: 'Konsultasi Masalah\nKesehatan Anda',
    text: 'Konsultasi kesehatan anda\ndengan pakar kami yang terverifikasi',
    image: (
      <ImageIntro3
        width={width <= 360 ? '80%' : '100%'}
        height={width <= 360 ? '80%' : '100%'}
      />
    ),
  },
  {
    key: 4,
    title: 'Berbagi dan Terhubung\nDengan Pengguna Lain',
    text: 'Platform dengan komunitas pengguna\ndari seluruh Indonesia',
    image: (
      <ImageIntro4
        width={width <= 360 ? '80%' : '100%'}
        height={width <= 360 ? '80%' : '100%'}
      />
    ),
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
    flatListRef.current.scrollToIndex({index: currentSlide - 1});
  };

  const handleOnDone = () => {
    navigation.replace('GetStarted');
  };

  return (
    <View style={styles.page}>
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
            style={styles.buttonBack}>
            <IconBackPink style={styles.icon} />
          </TouchableOpacity>
        )}

        <Gap width="10%" height={50} />

        {/* Skip */}
        <View style={styles.wrapper}>
          {currentSlide === 2 ? (
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
        horizontal
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.key.toString()}
        renderItem={({item}) => (
          <View style={styles.slide}>
            <View style={styles.image}>{item.image}</View>
            <Gap height={50} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
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

        <Gap height={10} />

        {/* Button Done */}
        {currentSlide >= 2 && (
          <TouchableOpacity style={styles.buttonDone} onPress={handleOnDone}>
            <Text style={styles.textButton}>Mulai</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AppIntro;

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: mainColors.lightSmoke,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width,
    height,
    alignItems: 'center',
    paddingTop: 10,
  },
  image: {
    width: width - 70,
    height: width - 110,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width,
    paddingHorizontal: 30,
    marginTop: 15,
    zIndex: 99,
  },
  buttonBack: {
    backgroundColor: mainColors.lightPink,
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  skip: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: mainColors.pink,
  },
  title: {
    fontSize: width <= 360 ? 18 : 25,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color: colors.text.primary1,
    marginTop: -40,
  },
  text: {
    fontSize: width <= 360 ? 14 : 18,
    fontFamily: fonts.primary[500],
    textAlign: 'center',
    color: colors.text.secondary2,
    marginTop: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
  },
  indicatorContainer: {
    width: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  indicator: {
    width: 8,
    height: 8,
    backgroundColor: mainColors.lightPink,
    borderRadius: 15,
  },
  indicatorActive: {
    width: 24,
    height: 8,
    backgroundColor: mainColors.pink,
    borderRadius: 15,
  },
  buttonDone: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: mainColors.pink,
    borderRadius: 10,
  },
  textButton: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    paddingVertical: 21,
    paddingHorizontal: 53,
    color: colors.white,
  },
});
