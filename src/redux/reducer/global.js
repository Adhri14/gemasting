const initGlobalState = {
  isError: false,
  message: '',
};

export const globalReducer = (state = initGlobalState, action) => {
  if (action.type === 'SET_GLOBAL') {
    return {
      ...state,
      isError: action.value,
      message: action.value.message,
    };
  }
  return state;
};
