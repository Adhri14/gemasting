import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image as ImageBank,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {BankBCA, BankSyariah, Success} from '../../assets';
import {Button, Gap, Header, ListPakar} from '../../components';
import {colors, fonts, mainColors} from '../../utils';

const Image = ({img, name, pakar}) => {
  return (
    <View>
      <ListPakar detail name={name} pakar={pakar} img={img} />
      <View style={styles.row}>
        <View style={styles.search}>
          <TextInput
            placeholder="Masukkan kode promo"
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity style={styles.filter}>
          <Text style={styles.textButtonPink}>Gunakan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Invoice = () => {
  return (
    <View>
      <Text style={styles.title}>Detail Pembayaran</Text>
      <Gap height={10} />
      <View style={styles.row}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: fonts.primary[400],
            color: mainColors.black,
          }}>
          1x konsultasi Chat (30 Menit)
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: fonts.primary[400],
            color: mainColors.pink,
          }}>
          Rp. 30.000
        </Text>
      </View>
      <View style={styles.row}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: fonts.primary[400],
            color: mainColors.black,
          }}>
          Diskon Tambahan
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: fonts.primary[400],
            color: mainColors.pink,
          }}>
          Rp. 30.000
        </Text>
      </View>
      <Gap height={30} />
      <View style={styles.row}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: fonts.primary[600],
            color: mainColors.black,
          }}>
          Total
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: fonts.primary[600],
            color: mainColors.pink,
          }}>
          Rp. 30.000
        </Text>
      </View>
    </View>
  );
};

const Transfer = () => {
  return (
    <View>
      <Text style={styles.title}>Transfer Pembayaran</Text>
      <Gap height={10} />
      <View>
        <ImageBank source={BankSyariah} style={{width: 101, height: 29}} />
        <Gap height={15} />
        <Text
          style={{
            fontSize: 16,
            fontFamily: fonts.primary[500],
            color: mainColors.black,
          }}>
          PT. Menggapai Indonesia Cerdas
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: fonts.primary[600],
            color: mainColors.black,
          }}>
          123456789
        </Text>
        <Gap height={20} />
        <ImageBank source={BankBCA} style={{width: 90, height: 30}} />
        <Gap height={10} />
        <Text
          style={{
            fontSize: 16,
            fontFamily: fonts.primary[600],
            color: mainColors.black,
          }}>
          PT. Menggapai Indonesia Cerdas
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: fonts.primary[500],
            color: mainColors.black,
          }}>
          123456789
        </Text>
      </View>
    </View>
  );
};

const IconSuccess = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 25,
          fontFamily: fonts.primary[600],
          color: mainColors.green,
          textAlign: 'center',
        }}>
        Yeay Success
      </Text>
      <Gap height={30} />
      <Success />
    </View>
  );
};

const DetailTransaction = ({navigation, route}) => {
  const {item} = route.params;
  const slides = [
    {
      key: 1,
      title: <Invoice />,
      image: (
        <Image
          img={{uri: item.profile.photo}}
          name={item.profile.name}
          pakar={item.pakar.name}
        />
      ),
    },
    {
      key: 2,
      title: <Transfer />,
      image: <Invoice />,
    },
    {
      key: 3,
      text: 'Kamu bisa chat dokter sekarang\nuntuk konsultasi kesehatan kamu',
      image: <IconSuccess />,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    const index = viewableItems[0].index;
    setCurrentSlide(index);
  }).current;

  const flatListRef = useRef(null);

  const handleSkip = () => {
    flatListRef.current.scrollToEnd({animated: true});
  };

  const handleNext = () => {
    if (currentSlide >= slides.length - 1) {
      return;
    }
    flatListRef.current.scrollToIndex({index: currentSlide + 1});
  };

  const handleOnDone = () => {
    navigation.replace('MainApp', {screen: 'Activity'});
  };

  const changeNameButton = () => {
    if (currentSlide === 0) {
      return 'Selanjutnya';
    }
    if (currentSlide === 1) {
      return 'Konfirmasi Pembayaran';
    }
    return 'Button';
  };
  return (
    <>
      <Header onPress={() => navigation.goBack()} title="Detail Transaksi" />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
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
          {/* Content Slider */}
          <FlatList
            ref={flatListRef}
            data={slides}
            horizontal
            pagingEnabled
            scrollEnabled={false}
            onViewableItemsChanged={onViewableItemsChanged}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.key.toString()}
            renderItem={({item}) => (
              <View style={styles.slide}>
                <View style={styles.image}>{item.image}</View>
                <Gap height={50} />
                <View
                  style={{
                    width: '86%',
                  }}>
                  {item.title}
                </View>
                <Text style={styles.text}>{item.text}</Text>
              </View>
            )}
          />
          {currentSlide < slides.length - 1 ? (
            <View style={{width: 340, marginHorizontal: 20, marginBottom: 20}}>
              <Button onPress={handleNext} title={changeNameButton()} />
            </View>
          ) : (
            <View style={{width: 340, marginHorizontal: 20, marginBottom: 20}}>
              <Button onPress={handleOnDone} title="Chat Dokter" />
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default DetailTransaction;

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: mainColors.lightSmoke,
    alignItems: 'center',
  },
  slide: {
    width,
    height,
    paddingTop: 10,
    alignItems: 'center',
  },
  image: {
    width: '86%',
    // alignItems: 'center',
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
    fontSize: 25,
    fontFamily: fonts.primary[600],
    color: mainColors.pink,
    marginTop: -10,
  },
  text: {
    fontSize: 18,
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
    width: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  indicator: {
    width: 5,
    height: 5,
    backgroundColor: mainColors.lightPink,
    borderRadius: 15,
  },
  indicatorActive: {
    width: 10,
    height: 10,
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  search: {
    paddingVertical: 2,
    paddingHorizontal: 15,
    backgroundColor: mainColors.smoke,
    justifyContent: 'center',
    flex: 1,
    borderRadius: 10,
  },
  textInput: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    // flex: 1,
    // backgroundColor: mainColors.pink,
  },
  filter: {
    backgroundColor: mainColors.lightPink,
    // padding: 15,
    paddingVertical: 17,
    paddingHorizontal: 20,
    marginLeft: 10,
    borderRadius: 10,
  },
  textButtonPink: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: mainColors.pink,
  },
  invoice: {
    alignItems: 'flex-start',
  },
});
