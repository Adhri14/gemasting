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
import {colors, fonts, mainColors, showMessage} from '../../utils';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {API} from '../../config';

const OtpScreen = ({navigation}) => {
  let textInput = useRef(null);
  const lengthInput = 4;
  const [otp, setOtp] = useState('');
  const [displayButton, setDisplayButton] = useState('flex');
  const [colorInput, setColorInput] = useState(mainColors.lightPink);

  const {registerReducer} = useSelector(state => state);

  const data = {
    email: registerReducer.email,
    otp,
  };

  console.log(data);
  useEffect(() => {
    textInput.focus();
  }, []);

  const onSubmit = () => {
    axios
      .put(`${API}otp-verification`, data)
      .then(res => {
        console.log(res.data);
        if (res.data.meta.code === 200) {
          navigation.reset({
            index: 0,
            routes: [{name: 'MainApp'}],
          });
        } else if (res.data.meta.code === 500) {
          showMessage({
            message: res.data.meta.message,
          });
          return false;
        } else {
          return true;
        }
      })
      .catch(e =>
        showMessage({
          message: e.message,
        }),
      );
  };

  const resendOtp = () => {
    axios
      .post(`${API}resend-otp`, {
        email: registerReducer.email,
      })
      .then(res => {
        showMessage({
          message: `${registerReducer.email} ${res.data.data}`,
          type: 'success',
        });
      })
      .catch(e => {
        showMessage({
          message: e.message,
        });
      });
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
              placeholder="2"
              maxLength={lengthInput}
              value={otp}
              onFocus={() => {
                setDisplayButton('none');
                setColorInput(mainColors.pink);
              }}
              onBlur={() => {
                setDisplayButton('flex');
                setColorInput(mainColors.lightPink);
              }}
              onChangeText={val => setOtp(val)}
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
                          index === otp.length
                            ? mainColors.pink
                            : mainColors.lightPink,
                      },
                    ]}>
                    <Text style={styles.cellText}>
                      {otp && otp.length > 0 ? otp[index] : ''}
                    </Text>
                  </View>
                ))}
            </View>
            {/* <TextInput
              placeholder="Number OTP"
              value={otp}
              onChangeText={val => setOtp(val)}
            /> */}
            <Gap height={29} />
            <Text style={styles.sendCode}>
              Belum menerima kode?{' '}
              <Text style={styles.bold} onPress={resendOtp}>
                Kirim ulang
              </Text>
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
    width: 57,
    height: 50,
    borderWidth: 1,
    opacity: 0,
    position: 'absolute',
    left: 9,
    // top: 20,
    textAlign: 'center',
    zIndex: 999,
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
