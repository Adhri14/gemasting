import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getData} from '../../../utils';
import EmptyFamily from '../EmptyFamily';
import ListCard from '../ListCard';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {API} from '../../../config';
import {Gap} from '../../atoms';

const Stunting = () => {
  const [data, setData] = useState([]);
  const authorization = useSelector(state => state.authorization);

  useEffect(() => {
    getInfoStunting();
  }, []);

  const getInfoStunting = () => {
    axios
      .get(
        `${API}medical-records/check-stunting?user_uuid=${authorization.uuid}`,
        {
          headers: {Authorization: authorization.token},
        },
      )
      .then(res => {
        setData(res.data.data);
      })
      .catch(err => console.log(err.message));
  };

  console.log('ini data uuid dari redux ', authorization.uuid);
  return (
    <View style={{flex: 1, marginHorizontal: 20}}>
      {data.map((item, index) => {
        return (
          <View key={index}>
            <ListCard
              type="stunting"
              name={
                item.family_uuid === null ? item.user.email : item.family.name
              }
              category={
                item.family_uuid === null ? 'Pribadi' : 'Anggota Keluarga'
              }
              date={moment(item.created_at).format('DD MMMM YYYY')}
              status={item.user.email}
            />
            <Gap height={20} />
          </View>
        );
      })}
    </View>
  );
};

export default Stunting;

const styles = StyleSheet.create({});
