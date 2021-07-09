import React, {useState, useEffect, useRef} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Header, Button, Gap} from '../../components';
import {colors, fonts, mainColors} from '../../utils';

const OtpScreen = ({navigation}) => {
  let textInput = useRef(null);
  const lengthInput = 4;
  const [codeOtp, setCodeOtp] = useState('');
  const [displayButton, setDisplayButton] = useState('flex');
  const [colorInput, setColorInput] = useState(mainColors.lightPink);

  useEffect(() => {
    textInput.focus();
  }, []);

  const onSubmit = () => {
    navigation.replace('MainApp');
    console.log(codeOtp);
  };

  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={mainColors.smoke} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header onPress={() => navigation.goBack()} />
        <View style={styles.container}>
          <Text style={styles.title}>Kode Verifikasi</Text>
          <Text style={styles.subtitle}>
            Kami sudah mengirimkan kode verifikasi kepada email dan nomor
            telepon anda.
          </Text>
          <Text style={styles.link}>Bukan milik anda?</Text>
          <Gap height={60} />
          <View>
            <TextInput
              ref={input => (textInput = input)}
              style={[styles.input, {borderBottomColor: colorInput}]}
              keyboardType="number-pad"
              maxLength={lengthInput}
              value={codeOtp}
              onFocus={() => {
                setDisplayButton('none');
                setColorInput(mainColors.pink);
              }}
              onBlur={() => {
                setDisplayButton('flex');
                setColorInput(mainColors.lightPink);
              }}
              onChangeText={val => setCodeOtp(val)}
            />
            <View style={styles.containerInput}>
              {Array(lengthInput)
                .fill()
                .map((data, index) => (
                  <View
                    key={index}
                    style={[
                      styles.cellView,
                      {
                        borderBottomColor:
                          index === codeOtp.length
                            ? mainColors.pink
                            : mainColors.lightPink,
                      },
                    ]}>
                    <Text style={styles.cellText}>
                      {codeOtp && codeOtp.length > 0 ? codeOtp[index] : ''}
                    </Text>
                  </View>
                ))}
            </View>
            <Gap height={29} />
            <Text style={styles.sendCode}>
              Belum menerima kode? <Text style={styles.bold}>Kirim ulang</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={[styles.button]}>
        <Button
          // type={codeLength.type}
          display={displayButton}
          title="Kirimkan"
          // disabled={codeLength.disabled}
          onPress={onSubmit}
        />
      </View>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: mainColors.lightSmoke,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontFamily: fonts.primary[600],
    marginBottom: 10,
    color: colors.text.primary,
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: fonts.primary[400],
    marginBottom: 20,
    lineHeight: 20,
    paddingHorizontal: 50,
    color: '#B0B0B0',
  },
  link: {
    fontSize: 15,
    fontFamily: fonts.primary[400],
    color: colors.text.primary1,
    textDecorationLine: 'underline',
  },
  input: {
    width: 0,
    height: 0,
  },
  sendCode: {
    fontSize: 15,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary1,
    textAlign: 'center',
  },
  bold: {
    fontFamily: fonts.primary[700],
    color: colors.text.primary1,
  },
  button: {
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: '100%',
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellView: {
    paddingVertical: 11,
    width: 57,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  cellText: {
    textAlign: 'center',
    fontSize: 16,
  },
});
