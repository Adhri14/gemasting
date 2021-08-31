import React, {useState} from 'react';
import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import Gap from '../Gap';
import Button from '../Button';
import MenuItem from './MenuItem';
export {MenuItem};

const Menu = ({children, visible, onRequestClose, onPress}) => {
  // props yg dipakai
  // 1. visible
  // 2. onRequestClose
  // 3. onPressClose
  // 4. onPress
  // 5. children
  return (
    <View>
      <Modal
        animationType="fade"
        statusBarTranslucent
        transparent={true}
        visible={visible}
        onRequestClose={onRequestClose}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={onPress}
          style={styles.centeredView}>
          <View style={styles.modalView}>{children}</View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // marginTop: 22,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    position: 'absolute',
    top: 16,
    right: 0,
    width: 190,
    height: 214,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
