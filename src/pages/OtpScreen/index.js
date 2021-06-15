import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {Header, Button} from '../../components';
import {colors, fonts} from '../../utils';

const OtpScreen = ({navigation}) => {
  const [codeOtp, setCodeOtp] = useState('');
  // const [displayButton, setDisplayButton] = useState('flex');
  const [codeLength, setCodeLength] = useState({
    type: 'secondary',
    disabled: true,
  });

  return (
    <View style={styles.page}>
      <ScrollView>
        <Header onPress={() => navigation.goBack()} />
        <View style={styles.container}>
          <Text style={styles.title}>Kode Verifikasi</Text>
          <Text style={styles.subtitle}>
            Kami sudah mengirimkan kode verifikasi kepada email dan nomor
            telepon anda.
          </Text>
          <Text style={styles.link}>Bukan milik anda?</Text>
          <View>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              value={codeOtp}
              onChangeText={val => {
                setCodeOtp(val);

                if (val.length >= 3 && !isNaN(val)) {
                  if (val.length < 7) {
                    setCodeLength({
                      disabled: false,
                    });
                    return true;
                  }
                  setCodeLength({
                    type: '#0BCAD4',
                    disabled: true,
                  });
                  return true;
                } else {
                  setCodeLength({
                    type: 'secondary',
                    disabled: true,
                  });
                }
              }}
            />
            <Text style={styles.sendCode}>
              Belum menerima kode? <Text style={styles.bold}>Kirim ulang</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={[styles.button]}>
        <Button
          type={codeLength.type}
          // display={displayButton}
          title="Kirimkan"
          disabled={codeLength.disabled}
          onPress={() => navigation.replace('AppIntro')}
        />
      </View>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    fontFamily: fonts.primary[800],
    marginBottom: 10,
    color: colors.text.primary,
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: fonts.primary[400],
    marginBottom: 20,
    lineHeight: 20,
    paddingHorizontal: 72,
    color: colors.text.secondary,
  },
  link: {
    fontSize: 15,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary,
    marginTop: 50,
    marginBottom: 30,
    textAlign: 'center',
  },
  sendCode: {
    fontSize: 15,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textAlign: 'center',
  },
  bold: {
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
  },
  button: {
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: '100%',
  },
});
