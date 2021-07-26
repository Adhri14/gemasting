import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import {Card, Gap, Header} from '../../components';
import {fonts, mainColors} from '../../utils';
import {LineChart} from 'react-native-chart-kit';

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

const KmsOutput = ({navigation}) => {
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
            <ListName title="Nama" name="Jhone Dae" />
            <Gap height={20} />
            <ListName title="Jenis Kelamin" name="Laki-laki" />
            <Gap height={20} />
            <ListName
              title="Umur"
              name="30 Bulan"
              info="(2 Tahun 5 Bulan 28 Hari)"
              type="secondary"
            />
            <Gap height={20} />
            <ListName
              title="Berat Badan"
              name="15 Kg"
              info="(Resiko Berat Berlebih)"
              type="danger"
            />
            <Gap height={20} />
            <ListName
              title="Tinggi Badan"
              name="Jhone Dae"
              info="(Normal)"
              type="success"
            />
          </Card>
          <View>
            <Text>Bezier Line Chart</Text>
            <LineChart
              // formatXLabel={() => <Text>Testing</Text>}
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
              // yAxisLabel="$"
              // yAxisSuffix="k"
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
      </View>
    </ScrollView>
  );
};

export default KmsOutput;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: mainColors.white,
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
});
