import moment from 'moment';
import React, {useState} from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {
  Button,
  DatePicker,
  Gap,
  Header,
  ListPakar,
  TextInput,
} from '../../components';
import {fonts, mainColors} from '../../utils';

const Transaction = ({navigation}) => {
  // Pengelola data dari state tanggal lahir
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [modeDate, setModeDate] = useState('date');
  const [modeTime, setModeTime] = useState('time');
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [note, setNote] = useState('');

  // Fungsi untuk merubah value lama menjadi value baru
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDate(Platform.OS === 'ios');
    setDate(currentDate);
  };

  // Fungsi untuk merubah value lama menjadi value baru
  const onChangeTime = (event, selectedDate) => {
    const currentDate = selectedDate || time;
    setShowTime(Platform.OS === 'ios');
    setTime(currentDate);
  };

  // Fungsi untuk merubah mode ui dan menculkan dan menghide popup
  const showModeDate = currentMode => {
    setShowDate(true);
    setModeDate(currentMode);
  };

  const showModeTime = currentMode => {
    setShowTime(true);
    setModeTime(currentMode);
  };

  // Fungsi untuk memunculkan mode ui berupa tanggal
  const showDatepicker = () => {
    showModeDate('date');
  };

  // Fungsi untuk memunculkan mode ui berupa tanggal
  const showTimepicker = () => {
    showModeTime('time');
  };

  const data = {
    date: `${moment(date).format('DD-MM-YYYY')}`,
    time: `${moment(time).format('hh:mm a')}`,
    note,
  };

  const onSubmit = () => {
    console.log('Data', data);
    navigation.replace('DetailTransaction');
  };
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={mainColors.smoke} />
      <Header title="Transaksi" onPress={() => navigation.goBack()} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.page}>
          <Gap height={10} />
          <ListPakar
            name="Dr. Adhri"
            pakar="Dokter Umum"
            address="RSUD Lamaddukelleng"
          />
          <Gap height={30} />
          <View>
            <Text style={styles.label}>Nomor STR</Text>
            <Text style={styles.str}>123345678910</Text>
            <Gap height={20} />
            <DatePicker
              value={date}
              onValueChange={onChangeDate}
              onPress={showDatepicker}
              type={modeDate}
              mode="date"
              show={showDate}
              placeholder={moment(date).format('DD-MM-YYYY')}
              label="Tanggal Konsultasi"
            />
            <Gap height={20} />
            <DatePicker
              value={date}
              onValueChange={onChangeTime}
              onPress={showTimepicker}
              type={modeTime}
              mode="time"
              show={showTime}
              placeholder={moment(time).format('hh:mm a')}
              label="Waktu Mulai"
            />
            <Gap height={20} />
            <TextInput
              label="Catatan"
              value={note}
              onChangeText={val => setNote(val)}
            />
            <Gap height={50} />
            <Button title="Konfirmasi" onPress={onSubmit} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: mainColors.lightSmoke,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: mainColors.black,
  },
  str: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: mainColors.pink,
  },
});
