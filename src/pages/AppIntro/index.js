import React from 'react';
import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import {ImageIntro1, ImageIntro2, ImageIntro3} from '../../assets/Image';

const AppIntro = ({navigation}) => {
  const slides = [
    {
      key: 'one',
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      image: <ImageIntro1 width={350} height={300} />,
    },
    {
      key: 'two',
      title: 'Title 2',
      text: 'Other cool stuff',
      image: <ImageIntro2 width={350} height={300} />,
    },
    {
      key: 'three',
      title: 'Rocket guy',
      text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
      image: <ImageIntro3 width={350} height={300} />,
    },
  ];
  return (
    <FlatList
      data={slides}
      horizontal
      keyExtractor={item => item.key.toString()}
      renderItem={({item}) => (
        <View style={styles.slide}>
          {item.image}
          <Text>{item.title}</Text>
          <Text>{item.text}</Text>
        </View>
      )}
    />
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
  },
  body: {
    height: height * 0.5,
    backgroundColor: 'grey',
    width,
  },
  image: {
    width: width * 0.7,
    height: 350,
  },
  paginationContainer: {
    position: 'absolute',
  },
  paginationDots: {
    height: 16,
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 15,
    marginHorizontal: 4,
  },
  dotActive: {
    width: 30,
    height: 15,
    borderRadius: 15,
    marginHorizontal: 4,
  },
});
