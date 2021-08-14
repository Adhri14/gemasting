import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ListCard from '../ListCard';
import {mainColors} from '../../../utils';

const Chat = () => {
  return (
    <View style={{flex: 1}}>
      <ListCard
        colorHeader={mainColors.teal}
        colorsProgress={mainColors.white}
        colorsTime={mainColors.white}
        progress="Sedang Aktif"
        time="15.00"
        name="James Bond"
        desc="3578102110030001"
      />
      <ListCard
        colorHeader={mainColors.green}
        colorsProgress={mainColors.white}
        colorsTime={mainColors.white}
        progress="Sedang Aktif"
        time="15.00"
        name="James Bond"
        desc="3578102110030001"
      />
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
