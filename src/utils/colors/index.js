export const mainColors = {
  salmon: '#FE6675',
  lime: '#9CD161',
  teal: '#1FA0BD',
  ocean: '#D9F4FF',
  grey: '#999999',
  darkSmoke: '#DFDFDF',
  smoke: '#F3F3F3',
  lightSmoke: '#FEFEFF',
  white: '#FFFFFF',
  black: '#404040',
  grey1: '#858585',
};

export const colors = {
  primary: mainColors.lime,
  secondary: mainColors.smoke,
  tertiary: mainColors.teal,
  border: mainColors.darkSmoke,
  white: mainColors.white,
  text: {
    primary1: mainColors.black,
    primary2: mainColors.grey1,
    secondary1: mainColors.smoke,
    secondary2: mainColors.teal,
  },
  button: {
    primary: {
      background: mainColors.lime,
      text: mainColors.white,
      border: mainColors.lime,
    },
    secondary: {
      background: 'transparent',
      text: mainColors.black,
      border: mainColors.lime,
    },
  },
};
