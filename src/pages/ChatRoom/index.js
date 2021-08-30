import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ChatItem, Header, InputChat, Button} from '../../components';
import {fonts, mainColors} from '../../utils';

const ChatRoom = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.page}>
      <Modal
        // animationType="slide"
        statusBarTranslucent
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Profile Dokter</Text>
            <Text style={styles.modalText}>Cari Pesan</Text>
            <Text style={styles.modalText}>Butuh Bantuan</Text>
            <Button title="Akhiri Konsultasi" />
          </View>
        </TouchableOpacity>
      </Modal>

      <Header
        title="Dr. John Doe"
        more
        onPressMore={() => setModalVisible()}
        onPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.welcome}>Selamat Berkonsultasi!</Text>
          <Text style={styles.time}>
            Halo John! Sekarang anda bisa konsultasi keluhan anda selama 30
            menit kedepan.
          </Text>
          <ChatItem />
          <ChatItem isMe />
          <ChatItem />
          <ChatItem isMe />
          <ChatItem />
          <ChatItem isMe />
          <ChatItem />
          <ChatItem isMe />
        </View>
      </ScrollView>
      <InputChat />
    </View>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({
  page: {
    backgroundColor: mainColors.white,
    flex: 1,
  },
  welcome: {
    fontSize: 18,
    fontFamily: fonts.primary[500],
    color: mainColors.pink,
    textAlign: 'center',
    justifyContent: 'center',
  },
  time: {
    fontSize: 12,
    color: mainColors.grey,
    textAlign: 'center',
    fontFamily: fonts.primary[400],
    paddingHorizontal: 37,
    marginBottom: 30,
  },
  content: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,.3)',
    // opacity: 0.3,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'absolute',
    top: 0,
    right: 0,
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
