import {combineReducers} from 'redux';
import {registerReducer, photoReducer} from './auth';
import {globalReducer, loadingReducer} from './global';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  photoReducer,
  loadingReducer,
});
export default reducer;
