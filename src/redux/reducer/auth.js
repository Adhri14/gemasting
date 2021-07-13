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
  role_id: 2,
  sub_role: 1,
};

export const registerReducer = (state = initStateRegister, action) => {
  if (action.type === 'SET_REGISTER_CUSTOMER') {
    return {
      ...state,
      email: action.value.email,
      email_recovery: action.value.email_recovery,
      name: action.value.name,
      phone_number: action.value.phone_number,
      password: action.value.password,
      password_confirmation: action.value.password_confirmation,
    };
  }
  if (action.type === 'SET_REGISTER_PAKAR') {
    return {
      ...state,
      email: action.value.email,
      phone_number: action.value.phone_number,
      name: action.value.name,
      gender: action.value.gender,
      birth: action.value.birth,
      role_id: action.value.role_id,
      sub_role: action.value.sub_role,
      password: action.value.password,
      password_confirmation: action.value.password_confirmation,
    };
  }
  return state;
};
