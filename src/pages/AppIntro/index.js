import React, {useState, useRef} from 'react';
import {
  Dimensions,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {ImageIntro1, ImageIntro2, ImageIntro3, ImageIntro4} from '../../assets';
import {colors, mainColors} from '../../utils';
import {fonts} from '../../utils/fonts';
import Icon from 'react-native-vector-icons/FontAwesome5';

const slides = [
  {
    key: 1,
    title: 'Selamat Datang di \nGEMASTING',
    text: 'Geser ke kiri untuk mengenal\nkami lebih lanjut',
    image: (
      <ImageIntro1
        style={{
          position: 'absolute',
          top: '60%',
        }}
        width={350}
        height={300}
      />
    ),
  },
  {
    key: 2,
    title: 'Gerakan Masyarakat \nSadar Stunting',
    text: 'Aplikasi yang dikembangkan untuk\npermasalahan stunting',
    image: (
      <ImageIntro2
        style={{
          position: 'absolute',
          top: '60%',
        }}
        width={350}
        height={300}
      />
    ),
  },
  {
    key: 3,
    title: 'Konsultasi Masalah\nKesehatan Anda',
    text: 'Konsultasi kesehatan anda\ndengan pakar kami yang terverifikasi',
    image: (
      <ImageIntro3
        style={{
          position: 'absolute',
          top: '60%',
        }}
        width={350}
        height={300}
      />
    ),
  },
  {
    key: 4,
    title: 'Berbagi dan Terhubung\nDengan Pengguna Lain',
    text: 'Platform dengan komunitas pengguna\ndari seluruh Indonesia',
    image: (
      <ImageIntro4
        style={{
          position: 'absolute',
          top: '60%',
        }}
        width={350}
        height={300}
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
    // console.log(currentSlide >= slides.length - 1);
    flatListRef.current.scrollToIndex({index: currentSlide - 1});
  };

  const handleOnDone = () => {
    navigation.navigate('GetStarted');
  };

  return (
    <>
      <StatusBar
        translucent={false}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      {currentSlide >= 1 && (
        <TouchableOpacity
          activeOpacity={1}
          onPress={handlePrev}
          style={styles.btn}>
          <Icon name="arrow-left" size={20} color={mainColors.lightSmoke} />
        </TouchableOpacity>
      )}
      {currentSlide === 3 ? (
        <Text style={styles.skip}>{''}</Text>
      ) : (
        <Text onPress={handleSkip} style={styles.skip}>
          Lewati
        </Text>
      )}
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
            <View style={styles.header}>{item.image}</View>
            <View style={styles.body}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.text}>{item.text}</Text>
            </View>
          </View>
        )}
      />
      <View style={styles.indicatorContainer}>
        {slides.map((item, index) => (
          <View
            key={item.key.toString()}
            style={
              index === currentSlide ? styles.indicatorActive : styles.indicator
            }
          />
        ))}
      </View>
      {currentSlide >= 3 && (
        <TouchableOpacity style={styles.btnBig} onPress={handleOnDone}>
          <Icon name="arrow-right" size={20} color={mainColors.white} />
        </TouchableOpacity>
      )}
    </>
  );
};

export default AppIntro;

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: mainColors.white,
  },
  body: {
    height,
    backgroundColor: mainColors.white,
    width,
    padding: 20,
  },
  header: {
    height: height / 0.9,
    width,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    fontFamily: fonts.primary[700],
    color: colors.text.primary1,
  },
  text: {
    fontSize: 20,
    lineHeight: 30,
    fontFamily: fonts.primary[300],
    color: mainColors.lightSmoke,
  },
  indicatorContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: '5%',
    left: '5.5%',
    width: '30%',
    justifyContent: 'space-between',
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
  btn: {
    position: 'absolute',
    left: '5.5%',
    width: 50,
    height: 50,
    zIndex: 999,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 14,
  },
  textBtn: {
    letterSpacing: 1,
    fontSize: 14,
    color: 'white',
  },
  skip: {
    position: 'absolute',
    right: '5.5%',
    zIndex: 999,
    marginTop: 30,
    letterSpacing: 1,
    fontSize: 15,
    textDecorationLine: 'underline',
    fontFamily: fonts.primary[300],
  },
  btnBig: {
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    zIndex: 999,
    backgroundColor: colors.button.primary.background,
    bottom: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    right: '5.5%',
  },
});
