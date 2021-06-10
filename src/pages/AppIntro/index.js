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
import {fonts} from '../../utils/fonts';

const slides = [
  {
    key: 1,
    title: 'Dummy Text',
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
    title: 'Dummy Text',
    text: 'Kami adalah aplikasi posyandu\nterlengkap di Indonesia.',
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
    title: 'Dummy Text',
    text: 'Selain itu, kami menyediakan\nberbagai fitur untuk \nsang buah hati.',
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
  // {
  //   key: 4,
  //   title: 'Dummy Text',
  //   text: 'Selain itu, kami menyediakan\nberbagai fitur untuk \nsang buah hati.',
  //   image: (
  //     <ImageIntro4
  //       style={{
  //         position: 'absolute',
  //         top: '60%',
  //       }}
  //       width={350}
  //       height={300}
  //     />
  //   ),
  // },
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
    Alert.alert('Ok bang Selesai');
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
          <Text style={styles.textBtn}>Prev</Text>
        </TouchableOpacity>
      )}
      {currentSlide === 2 ? (
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
      {currentSlide >= 2 && (
        <TouchableOpacity style={styles.btnBig} onPress={handleOnDone}>
          <Text style={styles.done}>Done</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default AppIntro;

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  body: {
    height,
    backgroundColor: 'grey',
    width,
    padding: 30,
  },
  header: {
    height: height / 0.9,
    // backgroundColor: 'blueviolet',
    width,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: fonts.primary[600],
  },
  text: {
    fontSize: 20,
    lineHeight: 30,
  },
  indicatorContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: '5%',
    left: '8%',
    width: '40%',
    justifyContent: 'space-between',
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },
  indicatorActive: {
    width: 30,
    height: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  btn: {
    backgroundColor: 'grey',
    position: 'absolute',
    left: '8%',
    width: 50,
    height: 50,
    borderRadius: 25,
    zIndex: 999,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  textBtn: {
    letterSpacing: 1,
    fontSize: 14,
    color: 'white',
  },
  skip: {
    position: 'absolute',
    right: '8%',
    zIndex: 999,
    marginTop: 30,
    letterSpacing: 1,
    fontSize: 15,
    fontWeight: '700',
    textDecorationLine: 'underline',
    fontFamily: fonts.primary.normal,
  },
  btnBig: {
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    zIndex: 999,
    backgroundColor: 'white',
    bottom: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    right: '8%',
  },
});
