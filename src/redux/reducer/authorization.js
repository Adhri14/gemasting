const initAuthorization = {
  token: '',
  uuid: '',
};

export const authorization = (state = initAuthorization, action) => {
  if (action.type === 'SET_AUTHORIZATION') {
    return {
      ...state,
      token: action.value.token,
      uuid: action.value.uuid,
    };
  }
  return state;
};
