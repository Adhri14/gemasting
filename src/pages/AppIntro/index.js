import React from 'react';
import {useState, useRef} from 'react';
import {
  Dimensions,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ImageIntro1, ImageIntro2, ImageIntro3} from '../../assets/Image';

const AppIntro = ({navigation}) => {
  const slides = [
    {
      key: 1,
      title: 'Dummy Text',
      text: 'Geser ke kiri untuk mengenal\nkami lebih lanjut',
      image: <ImageIntro1 style={styles.image} width={350} height={300} />,
    },
    {
      key: 2,
      title: 'Dummy Text',
      text: 'Kami adalah aplikasi posyandu\nterlengkap di Indonesia.',
      image: <ImageIntro2 style={styles.image} width={350} height={300} />,
    },
    {
      key: 3,
      title: 'Dummy Text',
      text: 'Tidak hanya posyandu, kami juga\nmenyediakan berbagai fitur\nuntuk sang buah hati.',
      image: <ImageIntro3 style={styles.image} width={350} height={300} />,
    },
    {
      key: 4,
      title: 'Dummy Text',
      text: 'Aplikasi parenting milennial dengan\nkomunitas dari seluruh Indonesia.',
      image: <ImageIntro3 style={styles.image} width={350} height={300} />,
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const onViewableItemsChanged = useRef(item => {
    const index = item.viewableItems[0].item;
    console.log(index);
    setCurrentSlide(index);
  });
  return (
    <>
      <StatusBar
        translucent={false}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.textBtn}>Prev</Text>
      </TouchableOpacity>
      <Text style={styles.skip}>Lewati</Text>
      <FlatList
        data={slides}
        horizontal
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged.current}
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
      <TouchableOpacity style={styles.btnBig}>
        <Text style={styles.done}>Done</Text>
      </TouchableOpacity>
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
  image: {
    position: 'absolute',
    top: '60%',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    lineHeight: 30,
  },
  indicatorContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: '15%',
    left: '8%',
    width: '40%',
    justifyContent: 'space-between',
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 20,
    borderWidth: 1,
  },
  indicatorActive: {
    width: 30,
    height: 10,
    borderRadius: 20,
    borderWidth: 1,
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
    fontSize: 14,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  btnBig: {
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    zIndex: 999,
    backgroundColor: 'white',
    bottom: '12%',
    justifyContent: 'center',
    alignItems: 'center',
    right: '8%',
  },
});
