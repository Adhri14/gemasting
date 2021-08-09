import {showMessage as showToast} from 'react-native-flash-message';
import {mainColors} from '../colors';

const showMessage = ({message, type}) => {
  showToast({
    message,
    type: type === 'success' ? 'success' : 'danger',
    backgroundColor: type === 'success' ? mainColors.green : mainColors.salmon,
  });
};

export default showMessage;
