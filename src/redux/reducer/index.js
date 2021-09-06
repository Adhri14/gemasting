import {combineReducers} from 'redux';
import {registerReducer, photoReducer, documentReducer} from './auth';
import {globalReducer, loadingReducer} from './global';
import {authorization} from './authorization';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  photoReducer,
  loadingReducer,
  documentReducer,
  authorization,
});
export default reducer;
