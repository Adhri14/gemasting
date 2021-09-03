import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getData} from '../../../utils';
import ListCard from '../ListCard';

const KMS = () => {
  const [uuid, setUuid] = useState('');
  const [data, setData] = useState({
    age: '',
    data: '',
    height_status: {
      height: '',
      status: '',
    },
    weight_status: {
      weight: '',
      status: '',
    },
    profile: {
      name: '',
      uuid: '',
    },
  });
  useEffect(() => {
    getData('userProfile').then(res => {
      setUuid(res.profile.user_uuid);
    });
    getData('kmsOnline')
      .then(res => {
        console.log(res);
        setData({
          age: res.age,
          date: res.date,
          height_status: {
            height: res.height_status.height,
            status: res.height_status.status,
          },
          weight_status: {
            weight: res.weight_status.weight,
            status: res.weight_status.status,
          },
          profile: {
            name: res.profile.name,
            uuid: res.profile.user_uid,
          },
        });
      })
      .catch(err => console.log(err.message));
  }, []);

  return (
    <View style={{flex: 1, marginHorizontal: 20}}>
      {uuid === data.profile.uuid ? (
        <ListCard
          type="kms-online"
          name={data.profile.name}
          category="Pribadi"
          date={moment(data.date).format('DD MMMM YYYY')}
          weight={data.weight_status.status}
          statusColor={
            data.weight_status.status === 'Normal' ? 'success' : 'danger'
          }
        />
      ) : (
        <ListCard
          type="kms-online"
          name="John Doe"
          category="Pribadi"
          date=" 17 Agustus 2021"
        />
      )}
    </View>
  );
};

export default KMS;

const styles = StyleSheet.create({});
