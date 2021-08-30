import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import {Button, Card, Gap, Header, InfoStunting} from '../../components';
import {colors, fonts, mainColors, showMessage, storeData} from '../../utils';
import {LineChart} from 'react-native-chart-kit';
import {IconDiscover, IconInfo, IconShield} from '../../assets';

const InfoChildren = ({children, label}) => {
  return (
    <View style={styles.row}>
      {children}
      <Gap width={10} />
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

const Info = ({label, type}) => {
  switch (type) {
    case 'secondary':
      return <Text style={styles.secondary}>{label}</Text>;
    case 'danger':
      return <Text style={styles.danger}>{label}</Text>;
    case 'success':
      return <Text style={styles.success}>{label}</Text>;
    default:
      return <Text style={styles.secondary}>{label}</Text>;
  }
};

const ListName = ({title, name, info, type}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.listTitle}>{title}</Text>
      <Gap height={10} />
      <View style={styles.row}>
        <Text style={styles.listName}>{name}</Text>
        <Gap width={15} />
        <Info label={info} type={type} />
      </View>
      <Gap height={20} />
      <View style={styles.line} />
    </View>
  );
};

const KmsOutput = ({navigation, route}) => {
  const {result} = route.params;
  const ageForMonth = result.age;

  console.log('hasil lemparan result : ', result);

  let ageNew = ageForMonth.split(' ').map(n => parseFloat(n));

  const convertAge = age => {
    const year = Math.floor(age[0] / 12);
    return `${year} tahun`;
  };

  const onSave = () => {
    showMessage({
      message: 'Data KMS Online berhasil disimpan',
      type: 'success',
    });
    const data = {
      ...result,
      date: new Date(),
    };
    storeData('kmsOnline', data);
    navigation.replace('MainApp', {screen: 'Activity'});
  };
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="dark-content" backgroundColor={mainColors.smoke} />
      <View style={styles.page}>
        <Header title="Hasil KMS Online" onPress={() => navigation.goBack()} />
        <Gap height={30} />
        <View style={styles.content}>
          <Text style={styles.name}>Profile Pasien</Text>
          <Card>
            <ListName title="Nama" name={result.profile.name} />
            <Gap height={20} />
            <ListName
              title="Jenis Kelamin"
              name={result.profile.gender === 'L' ? 'Laki-laki' : 'Perempuan'}
            />
            <Gap height={20} />
            <ListName
              title="Umur"
              name={result.age}
              info={`(${convertAge(ageNew)})`}
              type="secondary"
            />
            <Gap height={20} />
            <ListName
              title="Berat Badan"
              name={result.weight_status.weight}
              info={`(${result.weight_status.status})`}
              type={
                result.weight_status.status === 'Normal' ? 'success' : 'danger'
              }
            />
            <Gap height={20} />
            <ListName
              title="Tinggi Badan"
              name={result.height_status.height}
              info={`(${result.height_status.status})`}
              type={
                result.height_status.status === 'Normal' ? 'success' : 'danger'
              }
            />
          </Card>
          <Gap height={40} />
          <View style={styles.container}>
            <Text style={styles.label2}>Berat Badan Menurut Umur</Text>
            <View style={styles.wrapper}>
              <LineChart
                data={{
                  labels: [0, 10, 20, 30, 40, 50, 60],
                  datasets: [
                    {
                      data: [20, 45, 28, 80, 99, 43],
                    },
                  ],
                }}
                width={354} // from react-native
                height={220}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundGradientFrom: 'white',
                  backgroundGradientTo: 'white',
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(236, 78, 146, 0.2)`,
                  labelColor: (opacity = 1) => `black`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: 'white',
                    fill: mainColors.pink,
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </View>
          </View>
          <Gap height={40} />
          <View style={styles.container}>
            <Text style={styles.label2}>Tinggi Badan Menurut Umur</Text>
            <View style={styles.wrapper}>
              <LineChart
                data={{
                  labels: [0, 10, 20, 30, 40, 50, 60],
                  datasets: [
                    {
                      data: [20, 45, 28, 80, 99, 43],
                    },
                  ],
                }}
                width={354} // from react-native
                height={220}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundGradientFrom: 'white',
                  backgroundGradientTo: 'white',
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(236, 78, 146, 0.2)`,
                  labelColor: (opacity = 1) => `black`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: 'white',
                    fill: mainColors.pink,
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </View>
          </View>
          <Gap height={40} />
          {/* Info untuk anak */}
          <InfoChildren label="Imunisasi Bayi & Baduta">
            <IconInfo width={34} height={34} />
          </InfoChildren>
          <View style={styles.wrapperContent}>
            <Text style={styles.label}>
              Lakukan imunisasi DPT/HB/Hib4 dan Campak-Rubella 2 saat memasuki
              usia 18 bulan sesuai anjuran.
            </Text>
          </View>
          <InfoChildren label="Pemenuhan Gizi Anak">
            <IconDiscover />
          </InfoChildren>
          <View style={styles.wrapperContent}>
            <Text style={styles.label}>
              1. Pemberian MP ASI disertai dengan variasi makanan pokok, lauk
              hewani, lauk nabati, kacang-kacangan, sayur, dan buah-buahan.
            </Text>
            <Text style={styles.label}>
              2. Berikan makanan selingan yang bergizi kepada anak 1-2 kali
              sehari.
            </Text>
            <Text style={styles.label}>
              3. Sebaiknya tidak memberikan makanan manis sebelum waktu makan.
            </Text>
            <Text style={styles.label}>
              4. Lanjutkan pemberian ASI sebagai minuman dengan frekuensi 3-4
              kali sehari.
            </Text>
          </View>
          <InfoChildren label="Tips Perkembangan Bayi">
            <IconShield width={34} height={34} />
          </InfoChildren>
          <View style={styles.wrapperContent}>
            <Text style={styles.label}>
              1. Ajari berjalan di undakan tangga.
            </Text>
            <Text style={styles.label}>2. Ajari menyapu & bersihkan meja.</Text>
            <Text style={styles.label}>3. Ajak memberesikan mainan.</Text>
            <Text style={styles.label}>4. Ajari coret-coret di kertas.</Text>
            <Text style={styles.label}>5. Bacakan cerita anak.</Text>
          </View>
          <Button title="Simpan Hasil KMS" onPress={onSave} />
        </View>
      </View>
    </ScrollView>
  );
};

export default KmsOutput;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: mainColors.lightSmoke,
  },
  content: {
    padding: 20,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    marginBottom: 10,
    color: mainColors.black,
  },
  title: {
    fontSize: 15,
    fontFamily: fonts.primary[500],
    color: mainColors.black,
  },
  listTitle: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: mainColors.grey,
  },
  listName: {
    fontSize: 16,
    fontFamily: fonts.primary[500],
    color: mainColors.black,
  },
  secondary: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: mainColors.grey,
  },
  danger: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: mainColors.salmon,
  },
  success: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: mainColors.green,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    height: 1,
    backgroundColor: mainColors.darkSmoke,
  },
  wrapper: {
    marginLeft: -15,
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: mainColors.pink,
  },
  wrapperContent: {
    marginLeft: 44,
    marginTop: 15,
    marginBottom: 40,
  },
  label: {
    fontSize: 16,
    color: colors.text.primary1,
    fontFamily: fonts.primary[400],
  },
  label2: {
    fontSize: 20,
    color: colors.text.primary1,
    fontFamily: fonts.primary[600],
  },
});
