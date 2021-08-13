const initStateRegister = {
  email: '',
  email_recovery: '',
  name: '',
  phone_number: '',
  password: '',
  password_confirmation: '',
  gender: '',
  birth: '',
  education: '',
  address: '',
  pakar: 1,
};

export const registerReducer = (state = initStateRegister, action) => {
  if (action.type === 'SET_REGISTER_CUSTOMER') {
    return {
      ...state,
      email: action.value.email,
      email_recovery: action.value.email_recovery,
      phone_number: action.value.phone_number,
      name: action.value.name,
      gender: action.value.gender,
      birth: action.value.birth,
      address: action.value.address,
      password: action.value.password,
      password_confirmation: action.value.password_confirmation,
    };
  }
  if (action.type === 'SET_REGISTER_PAKAR') {
    return {
      ...state,
      email: action.value.email,
      email_recovery: action.value.email_recovery,
      phone_number: action.value.phone_number,
      name: action.value.name,
      gender: action.value.gender,
      birth: action.value.birth,
      pakar: action.value.pakar,
      password: action.value.password,
      password_confirmation: action.value.password_confirmation,
    };
  }
  if (action.type === 'SET_REGISTER_POSYANDU') {
    return {
      ...state,
      email: action.value.email,
      email_recovery: action.value.email_recovery,
      name: action.value.name,
      phone_number: action.value.phone_number,
      address: action.value.address,
      password: action.value.password,
      password_confirmation: action.value.password_confirmation,
    };
  }
  if (action.type === 'SET_REGISTER_HBS') {
    return {
      ...state,
      email: action.value.email,
      email_recovery: action.value.email_recovery,
      name: action.value.name,
      phone_number: action.value.phone_number,
      address: action.value.address,
      password: action.value.password,
      password_confirmation: action.value.password_confirmation,
    };
  }
  return state;
};

const initPhoto = {
  uri: '',
  type: '',
  name: '',
};

export const photoReducer = (state = initPhoto, action) => {
  if (action.type === 'SET_PHOTO') {
    return {
      ...state,
      uri: action.value.uri,
      type: action.value.type,
      name: action.value.name,
    };
  }
  return state;
};

const initDocument = {
  uri: '',
  type: '',
  name: '',
};

export const documentReducer = (state = initDocument, action) => {
  if (action.type === 'SET_DOCUMENT') {
    return {
      ...state,
      uri: action.value.uri,
      type: action.value.type,
      name: action.value.name,
    };
  }
  return state;
};
