import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ListCard from '../ListCard';
import {mainColors} from '../../../utils';
import {Gap} from '../../../components';
import {useNavigation} from '@react-navigation/native';

const Chat = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, marginHorizontal: 20}}>
      <ListCard
        colorHeader={mainColors.teal}
        colorsProgress={mainColors.white}
        colorsTime={mainColors.white}
        progress="Sedang Aktif"
        time="15.00"
        name="James Bond"
        desc="3578102110030001"
        onPress={() => navigation.navigate('ChatRoom')}
      />
      <Gap height={20} />
      <ListCard
        colorHeader={mainColors.green}
        colorsProgress={mainColors.white}
        colorsTime={mainColors.white}
        progress="Sedang Aktif"
        time="15.00"
        name="James Bond"
        desc="3578102110030001"
      />
      <Gap height={20} />
      <ListCard
        colorHeader={mainColors.darkSmoke}
        colorsProgress={mainColors.grey}
        colorsTime={mainColors.grey}
        progress="Sedang Aktif"
        time="15.00"
        name="James Bond"
        desc="3578102110030001"
      />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
