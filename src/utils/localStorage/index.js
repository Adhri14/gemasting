import AsyncStorage from '@react-native-async-storage/async-storage';
import showMessage from '../showMessage';

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    showMessage({
      message: e.message,
    });
  }
};

export const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    showMessage({
      message: e.message,
    });
  }
};

export const removeValue = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    showMessage({
      message: e.message,
    });
  }
};
