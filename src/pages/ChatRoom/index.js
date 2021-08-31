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
import {ChatItem, Header, InputChat, Button, Gap, Menu} from '../../components';
import {MenuItem} from '../../components/atoms/Menu';
import {fonts, mainColors} from '../../utils';
import {IconProfileDark, IconSearchNormal, IconInfoCircle} from '../../assets';

// const TabIcon = () => {
//   ret
// }

const ChatRoom = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.page}>
      <Menu
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
        onPress={() => setModalVisible(!modalVisible)}>
        <MenuItem
          title="Profile Pakar"
          icon={<IconProfileDark />}
          onPress={() => {
            setModalVisible(!modalVisible);
            navigation.navigate('ProfileDoctor');
          }}
        />
        <Gap height={20} />
        <MenuItem title="Cari Pesan" icon={<IconSearchNormal />} />
        <Gap height={20} />
        <MenuItem title="Butuh Bantuan?" icon={<IconInfoCircle />} />
        <Gap height={30} />
        <Button type="button-small" title="Akhiri Konsultasi" />
      </Menu>

      <Header
        title="Dr. John Doe"
        more
        onPressMore={() => setModalVisible(true)}
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
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
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
