const initGlobalState = {
  isError: false,
  message: '',
  loading: false,
  loadingMain: false,
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

export const loadingReducer = (state = initGlobalState, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.value,
    };
  }
  if (action.type === 'SET_LOADING_MAIN') {
    return {
      ...state,
      loadingMain: action.value,
    };
  }
  return state;
};
