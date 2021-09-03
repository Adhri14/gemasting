import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View, StatusBar} from 'react-native';
import {
  Button,
  Card,
  DatePicker,
  Gap,
  Header,
  Radio,
  TextInput,
} from '../../components';
import {fonts, getData, mainColors, showMessage} from '../../utils';
import moment from 'moment';
import axios from 'axios';
import {API} from '../../config';

const AddFamily = ({navigation}) => {
  const [form1, setForm1] = useState({
    name: '',
    gender: '',
  });
  const [form2, setForm2] = useState({
    name: '',
    gender: '',
  });

  const [date1, setDate1] = useState(new Date());
  const [mode1, setMode1] = useState('date');
  const [show1, setShow1] = useState(false);

  const [date2, setDate2] = useState(new Date());
  const [mode2, setMode2] = useState('date');
  const [show2, setShow2] = useState(false);

  const [token, setToken] = useState('');

  useEffect(() => {
    getData('token').then(res => {
      setToken(res);
    });
  }, []);

  const onChange1 = (event, selectedDate) => {
    const currentDate = selectedDate || date1;
    setShow1(Platform.OS === 'ios');
    setDate1(currentDate);
  };

  const showMode1 = currentMode => {
    setShow1(true);
    setMode1(currentMode);
  };

  const showDatepicker1 = () => {
    showMode1('date');
  };

  const onChange2 = (event, selectedDate) => {
    const currentDate = selectedDate || date2;
    setShow2(Platform.OS === 'ios');
    setDate2(currentDate);
  };

  const showMode2 = currentMode => {
    setShow2(true);
    setMode2(currentMode);
  };

  const showDatepicker2 = () => {
    showMode2('date');
  };

  const onSubmit = () => {
    if (form2.name === '' || form2.gender === '') {
      const data = [
        {
          ...form1,
          birth: moment(date1).format('DD-MM-YYYY'),
        },
      ];
      axios
        .post(`${API}family/add-members`, data, {
          headers: {
            Authorization: token.value,
          },
        })
        .then(res => {
          if (res.data.meta.code === 200) {
            navigation.replace('MainApp');
          } else if (res.data.meta.code === 500) {
            showMessage({
              message: res.data.meta.message,
            });
          } else {
            showMessage({
              message: res.data.meta.message,
            });
          }
        })
        .catch(e =>
          showMessage({
            message: e.message,
          }),
        );
    } else {
      const data = [
        {
          ...form1,
          birth: moment(date1).format('DD-MM-YYYY'),
        },
        {
          ...form2,
          birth: moment(date2).format('DD-MM-YYYY'),
        },
      ];
      axios
        .post(`${API}family/add-members`, data, {
          headers: {
            Authorization: token.value,
          },
        })
        .then(res => {
          if (res.data.meta.code === 200) {
            navigation.replace('MainApp');
          } else if (res.data.meta.code === 500) {
            showMessage({
              message: res.data.meta.message,
            });
          } else {
            showMessage({
              message: res.data.meta.message,
            });
          }
        })
        .catch(e =>
          showMessage({
            message: e.message,
          }),
        );
    }
  };
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={mainColors.darkSmoke}
      />
      <Header title="Anggota Keluarga" onPress={() => navigation.goBack()} />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor={mainColors.smoke} />
        <View style={styles.page}>
          <Gap height={30} />
          <Text style={styles.title}>Anggota 1</Text>
          <Gap height={10} />
          <Card>
            <TextInput
              backgroundColor="white"
              label="Nama"
              value={form1.name}
              onChangeText={val =>
                setForm1({
                  ...form1,
                  name: val,
                })
              }
            />
            <Gap height={20} />
            <Radio
              valueItem1="L"
              valueItem2="P"
              valueGroup={form1.gender}
              onValueChange={val =>
                setForm1({
                  ...form1,
                  gender: val,
                })
              }
            />
            <Gap height={20} />
            <DatePicker
              backgroundColor="white"
              mode="date"
              label="Tanggal Lahir"
              value={date1}
              onValueChange={onChange1}
              type={mode1}
              show={show1}
              placeholder={moment(date1).format('DD-MM-YYYY')}
              onPress={showDatepicker1}
            />
          </Card>
          <Gap height={30} />
          <Text style={styles.title}>Anggota 2</Text>
          <Gap height={10} />
          <Card>
            <TextInput
              backgroundColor="white"
              label="Nama"
              value={form2.name}
              onChangeText={val =>
                setForm2({
                  ...form2,
                  name: val,
                })
              }
            />
            <Gap height={20} />
            <Radio
              valueItem1="L"
              valueItem2="P"
              valueGroup={form2.gender}
              onValueChange={val =>
                setForm2({
                  ...form2,
                  gender: val,
                })
              }
            />
            <Gap height={20} />
            <DatePicker
              backgroundColor="white"
              mode="date"
              label="Tanggal Lahir"
              value={date2}
              onValueChange={onChange2}
              type={mode2}
              show={show2}
              placeholder={moment(date2).format('DD-MM-YYYY')}
              onPress={showDatepicker2}
            />
          </Card>
          <Gap height={40} />
          <Button title="Simpan" onPress={onSubmit} />
        </View>
      </ScrollView>
    </>
  );
};

export default AddFamily;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: mainColors.lightSmoke,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: mainColors.black,
  },
});
