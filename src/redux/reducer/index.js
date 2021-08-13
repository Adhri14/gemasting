import {combineReducers} from 'redux';
import {registerReducer, photoReducer, documentReducer} from './auth';
import {globalReducer, loadingReducer} from './global';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  photoReducer,
  loadingReducer,
  documentReducer,
});
export default reducer;
