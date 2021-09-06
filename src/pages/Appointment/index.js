import React, {useRef, useMemo, useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';

import {
  HospitalDummy1,
  HospitalDummy2,
  HospitalDummy3,
  HospitalDummy4,
  IconEditPink,
  IconFilter,
  IconLocation,
  IconSearch,
} from '../../assets';
import {fonts, mainColors} from '../../utils';
import {
  Button,
  Gap,
  Header,
  HealthCard,
  ListPakar,
  Picker,
} from '../../components';

const Title = ({label}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{label}</Text>
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.textButton}>Lainnya</Text>
      </TouchableOpacity>
    </View>
  );
};
const Filter = ({onPressFilter}) => {
  return (
    <View style={styles.row}>
      <View style={styles.search}>
        <IconSearch />
        <TextInput
          placeholder="Cari Dokter Spesialis atau RS"
          style={styles.textInput}
        />
      </View>
      <TouchableOpacity style={styles.filter} onPress={onPressFilter}>
        <IconFilter />
      </TouchableOpacity>
    </View>
  );
};

const Appointment = ({navigation}) => {
  const [filter, setFilter] = useState('');

  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['32%', '38%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);
  return (
    <BottomSheetModalProvider>
      <View style={[styles.page, {}]}>
        <Header onPress={() => navigation.goBack()} title="Appointment" />
        <Gap height={20} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.content}>
            <View style={styles.row}>
              <View style={styles.location}>
                <IconLocation />
                <Text style={styles.textLocation}>Palembang, Indonesia</Text>
              </View>
              <View>
                <IconEditPink />
              </View>
            </View>
            <Gap height={20} />
            <Filter onPressFilter={handlePresentModalPress} />
            <Gap height={30} />

            <Title label="Faskes Terdekat" />
            <Gap height={20} />
            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.healthCardContainer}>
                  <Gap width={20} />
                  <HealthCard
                    image={HospitalDummy1}
                    name="RS. Siti Fatimah"
                    address="Jalan Kolpurlian"
                  />
                  <Gap width={10} />
                  <HealthCard
                    image={HospitalDummy2}
                    name="RS. Siti Fatimah"
                    address="Jalan Kolpurlian"
                  />
                  <Gap width={10} />
                  <HealthCard
                    image={HospitalDummy3}
                    name="RS. Siti Fatimah"
                    address="Jalan Kolpurlian"
                  />
                  <Gap width={10} />
                  <HealthCard
                    image={HospitalDummy4}
                    name="RS. Siti Fatimah"
                    address="Jalan Kolpurlian"
                  />
                  <Gap width={10} />
                  <HealthCard
                    image={HospitalDummy1}
                    name="RS. Siti Fatimah"
                    address="Jalan Kolpurlian"
                  />
                  <Gap width={20} />
                </View>
              </ScrollView>
            </View>

            <Gap height={30} />

            <Title label="Layanan Kesehatan" />
            <Gap height={20} />
            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.healthCardContainer}>
                  <Gap width={20} />
                  <HealthCard
                    image={HospitalDummy1}
                    name="RS. Siti Fatimah"
                    address="Jalan Kolpurlian"
                  />
                  <Gap width={10} />
                  <HealthCard
                    image={HospitalDummy2}
                    name="RS. Siti Fatimah"
                    address="Jalan Kolpurlian"
                  />
                  <Gap width={10} />
                  <HealthCard
                    image={HospitalDummy3}
                    name="RS. Siti Fatimah"
                    address="Jalan Kolpurlian"
                  />
                  <Gap width={10} />
                  <HealthCard
                    image={HospitalDummy1}
                    name="RS. Siti Fatimah"
                    address="Jalan Kolpurlian"
                  />
                  <Gap width={10} />
                  <HealthCard
                    image={HospitalDummy4}
                    name="RS. Siti Fatimah"
                    address="Jalan Kolpurlian"
                  />
                  <Gap width={20} />
                </View>
              </ScrollView>
            </View>

            <Gap height={30} />
            <Title label="Rekomendasi Dokter" />
            <Gap height={30} />
            <View style={{paddingHorizontal: 20}}>
              <ListPakar
                onPress={() => navigation.navigate('Transaction')}
                pakar="Dokter Umum"
                name="Dr. Muh. Nasrul Fattah"
                address="RSUD Jakarta"
              />
              <ListPakar
                onPress={() => navigation.navigate('Transaction')}
                pakar="Dokter Anak"
                name="Dr. Muh. Nasrul Qarib"
                address="RSUD Jakarta"
              />
              <ListPakar
                onPress={() => navigation.navigate('Transaction')}
                pakar="Ahli Gizi"
                name="Dr. Azis Iqbal"
                address="RSUD Jakarta"
              />
              <ListPakar
                onPress={() => navigation.navigate('Transaction')}
                pakar="Dokter Umum"
                name="Dr. Ade Suhada"
                address="RSUD Jakarta"
              />
            </View>

            <Gap height={20} />
          </View>
        </ScrollView>
      </View>
      <BottomSheetModal
        backdropComponent={props => (
          <BottomSheetBackdrop {...props} opacity={0.5} />
        )}
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View style={styles.content}>
          <Gap height={20} />
          <Picker
            label="Filter Spesialis"
            type="pakar"
            value={filter}
            onValueChange={val => setFilter(val)}
          />
          <Gap height={30} />
          <Button title="Konfirmasi" />
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default Appointment;

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: mainColors.lightSmoke,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textLocation: {
    fontFamily: fonts.primary[500],
    fontSize: 14,
    color: mainColors.black,
    marginLeft: 8,
  },
  title: {
    fontSize: width <= 360 ? 18 : 20,
    fontFamily: fonts.primary[600],
    color: mainColors.pink,
  },
  button: {
    backgroundColor: mainColors.smoke,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  textButton: {
    fontSize: width <= 360 ? 12 : 14,
    fontFamily: fonts.primary[500],
    color: mainColors.pink,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 0,
    paddingHorizontal: 15,
    backgroundColor: mainColors.smoke,
    flex: 1,
    borderRadius: 10,
  },
  textInput: {
    fontSize: width <= 360 ? 12 : 14,
    fontFamily: fonts.primary[400],
    flex: 1,
    marginLeft: 10,
    marginTop: 3,
  },
  filter: {
    backgroundColor: mainColors.lightPink,
    padding: 14,
    marginLeft: 24,
    borderRadius: 10,
  },
  // content: {
  //   padding: 20,
  // },
  healthCardContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
});
