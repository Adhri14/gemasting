import React, {useRef, useMemo, useCallback, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconFilter, IconSearch} from '../../assets';
import {Button, Gap, Header, ListPakar, Picker} from '../../components';
import {fonts, mainColors} from '../../utils';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';

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
          placeholder="Cari Pakar atau Spesialis"
          style={styles.textInput}
        />
      </View>
      <TouchableOpacity style={styles.filter} onPress={onPressFilter}>
        <IconFilter />
      </TouchableOpacity>
    </View>
  );
};

const ChatPakar = ({navigation}) => {
  const [filter, setFilter] = useState('');

  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['30%', '30%'], []);

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
        <Header onPress={() => navigation.goBack()} title="Chat Pakar" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.content}>
            <Gap height={20} />
            <Filter onPressFilter={handlePresentModalPress} />
            <Gap height={40} />
            <Title label="Rekomendasi Pakar" />
            <Gap height={30} />
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
            <Gap height={20} />
            <Title label="Pakar Terdekat" />
            <ListPakar
              onPress={() => navigation.navigate('Transaction')}
              pakar="Dokter Anak"
              name="Dr. Adhri"
              address="RSUD Lamaddukelleng"
            />
            <ListPakar
              onPress={() => navigation.navigate('Transaction')}
              pakar="Dokter Kandungan"
              name="Dr. Arya Rizky"
              address="RSUD Jakarta"
            />
            <ListPakar
              onPress={() => navigation.navigate('Transaction')}
              pakar="Ahli Gizi"
              name="Dr. Jhordan"
              address="Jakarta"
            />
            <ListPakar
              onPress={() => navigation.navigate('Transaction')}
              pakar="Dokter Kandungan"
              name="Dr. Agus Salim"
              address="RSUD Palembang"
            />
            <ListPakar
              onPress={() => navigation.navigate('Transaction')}
              pakar="Ahli Gizi"
              name="Dr. Muh. Irfanzidni"
              address="RSUD Jakarta"
            />
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

export default ChatPakar;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: mainColors.lightSmoke,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
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
    fontSize: 14,
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
    fontSize: 14,
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
  content: {
    padding: 20,
  },
});
