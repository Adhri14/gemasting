import axios from 'axios';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {API} from '../../../config';
import {getData} from '../../../utils';
import ListCard from '../ListCard';
import {Gap} from '../../atoms';
import {useSelector} from 'react-redux';

const KMS = () => {
  const [data, setData] = useState([]);
  const authorization = useSelector(state => state.authorization);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    getKMS();
    getData('userProfile').then(res => setUserName(res.profile.name));
  }, []);

  const getKMS = () => {
    axios
      .get(`${API}medical-records/kms?user_uuid=${authorization.uuid}`, {
        headers: {Authorization: authorization.token},
      })
      .then(res => {
        setData(res.data.data);
      })
      .catch(err => console.log(err.message));
  };

  return (
    <View style={{flex: 1, marginHorizontal: 20}}>
      {data.map((item, index) => {
        console.log(item.user.uuid);
        return (
          <View key={index}>
            <ListCard
              type="kms-online"
              name={item.family_uuid === null ? userName : item.family.name}
              category={
                item.family_uuid === null ? 'Pribadi' : 'Anggota Keluarga'
              }
              date={moment(item.created_at).format('DD MMMM YYYY')}
              weight={item.weight_status.status}
              height={item.height_status.status}
              status={item.height_status.status}
              statusColor={
                item.weight_status.status === 'Normal' ? 'success' : 'danger'
              }
            />
            <Gap height={20} />
          </View>
        );
      })}
    </View>
  );
};

export default KMS;

const styles = StyleSheet.create({});
