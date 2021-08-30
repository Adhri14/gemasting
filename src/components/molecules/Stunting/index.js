import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getData} from '../../../utils';
import EmptyFamily from '../EmptyFamily';
import ListCard from '../ListCard';

const Stunting = () => {
  const [checkStunting, setCheckStunting] = useState({
    date: '',
    profile: {
      name: '',
      uuid: '',
    },
    status: '',
    stunting: false,
  });

  const [uuid, setUuid] = useState('');
  useEffect(() => {
    getData('userProfile').then(res => {
      setUuid(res.profile.user_uuid);
    });
    getData('cekStunting').then(res => {
      setCheckStunting({
        date: res.date,
        profile: {
          name: res.profile.name,
          uuid: res.profile.user_uuid,
        },
        status: res.status,
        stunting: res.stunting,
      });
    });
  }, []);
  return (
    <View style={{flex: 1, marginHorizontal: 20}}>
      {checkStunting.profile.uuid === uuid ? (
        <ListCard
          type="stunting"
          date={moment(checkStunting.date).format('DD MMMM YYYY')}
          name={checkStunting.profile.name}
          status={
            checkStunting === 'Normal'
              ? `Kondisi ${checkStunting.status}`
              : `Indikasi ${checkStunting.status}`
          }
        />
      ) : (
        <EmptyFamily />
      )}
    </View>
  );
};

export default Stunting;

const styles = StyleSheet.create({});
