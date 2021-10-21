import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';
import { alpha } from '@mui/material/styles';
import { color } from '@mui/system';

// Create a theme instance.
const customTheme = createTheme({
  palette: {
    primary: {
      main: '#00AB55',
      light: '#5BE584',
      lighter: '#C8FACD',
      dark: '#007B55',
      darker: '#005249',
      contrastText: '#fff',
    },
    secondary: {
      main: '#3366FF',
      light: '#84A9FF',
      lighter: '#D6E4FF',
      dark: '#1939B7',
      darker: '#091A7A',
      contrastText: '#fff',
    },
    info: {
      main: '#1890FF',
      light: '#74CAFF',
      lighter: '#D0F2FF',
      dark: '#0C53B7',
      darker: '#04297A',
      contrastText: '#fff',
    },
    success: {
      main: '#54D62C',
      light: '#AAF27F',
      lighter: '#E9FCD4',
      dark: '#229A16',
      darker: '#08660D',
      contrastText: '#fff',
    },
    warning: {
      main: '#FFC107',
      light: '#FFE16A',
      lighter: '#FFF7CD',
      dark: '#B78103',
      darker: '#7A4F01',
      contrastText: '#fff',
    },
    error: {
      main: '#FF4842',
      light: '#FFA48D',
      lighter: '#FFE7D9',
      dark: '#B72136',
      darker: '#7A0C2E',
      contrastText: '#fff',
    },
    grey: {
      100: '#F9FAFB',
      200: '#F4F6F8',
      300: '#DFE3E8',
      400: '#C4CDD5',
      500: '#919EAB',
      600: '#637381',
      700: '#454F5B',
      800: '#212B36',
      900: '#161C24',
    },
  },
});

export const colorShadows = {
  primary: `0 8px 16px 0 ${alpha(customTheme.palette.primary.main, 0.24)}`,
  info: `0 8px 16px 0 ${alpha(customTheme.palette.info.main, 0.24)}`,
  success: `0 8px 16px 0 ${alpha(customTheme.palette.success.main, 0.24)}`,
  warning: `0 8px 16px 0 ${alpha(customTheme.palette.warning.main, 0.24)}`,
  error: `0 8px 16px 0 ${alpha(customTheme.palette.error.main, 0.24)}`,
};

export const tcssShadow = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  s: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  xxl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  xxxl: '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  none: '0 0 #0000',
};

const createShadow = (color) => {
  const transparent1 = alpha(color, 0.2);
  const transparent2 = alpha(color, 0.14);
  const transparent3 = alpha(color, 0.12);
  return [
    'none',
    `0px 2px 1px -1px ${transparent1},0px 1px 1px 0px ${transparent2},0px 1px 3px 0px ${transparent3}`,
    `0px 3px 1px -2px ${transparent1},0px 2px 2px 0px ${transparent2},0px 1px 5px 0px ${transparent3}`,
    `0px 3px 3px -2px ${transparent1},0px 3px 4px 0px ${transparent2},0px 1px 8px 0px ${transparent3}`,
    `0px 2px 4px -1px ${transparent1},0px 4px 5px 0px ${transparent2},0px 1px 10px 0px ${transparent3}`,
    `0px 3px 5px -1px ${transparent1},0px 5px 8px 0px ${transparent2},0px 1px 14px 0px ${transparent3}`,
    `0px 3px 5px -1px ${transparent1},0px 6px 10px 0px ${transparent2},0px 1px 18px 0px ${transparent3}`,
    `0px 4px 5px -2px ${transparent1},0px 7px 10px 1px ${transparent2},0px 2px 16px 1px ${transparent3}`,
    `0px 5px 5px -3px ${transparent1},0px 8px 10px 1px ${transparent2},0px 3px 14px 2px ${transparent3}`,
    `0px 5px 6px -3px ${transparent1},0px 9px 12px 1px ${transparent2},0px 3px 16px 2px ${transparent3}`,
    `0px 6px 6px -3px ${transparent1},0px 10px 14px 1px ${transparent2},0px 4px 18px 3px ${transparent3}`,
    `0px 6px 7px -4px ${transparent1},0px 11px 15px 1px ${transparent2},0px 4px 20px 3px ${transparent3}`,
    `0px 7px 8px -4px ${transparent1},0px 12px 17px 2px ${transparent2},0px 5px 22px 4px ${transparent3}`,
    `0px 7px 8px -4px ${transparent1},0px 13px 19px 2px ${transparent2},0px 5px 24px 4px ${transparent3}`,
    `0px 7px 9px -4px ${transparent1},0px 14px 21px 2px ${transparent2},0px 5px 26px 4px ${transparent3}`,
    `0px 8px 9px -5px ${transparent1},0px 15px 22px 2px ${transparent2},0px 6px 28px 5px ${transparent3}`,
    `0px 8px 10px -5px ${transparent1},0px 16px 24px 2px ${transparent2},0px 6px 30px 5px ${transparent3}`,
    `0px 8px 11px -5px ${transparent1},0px 17px 26px 2px ${transparent2},0px 6px 32px 5px ${transparent3}`,
    `0px 9px 11px -5px ${transparent1},0px 18px 28px 2px ${transparent2},0px 7px 34px 6px ${transparent3}`,
    `0px 9px 12px -6px ${transparent1},0px 19px 29px 2px ${transparent2},0px 7px 36px 6px ${transparent3}`,
    `0px 10px 13px -6px ${transparent1},0px 20px 31px 3px ${transparent2},0px 8px 38px 7px ${transparent3}`,
    `0px 10px 13px -6px ${transparent1},0px 21px 33px 3px ${transparent2},0px 8px 40px 7px ${transparent3}`,
    `0px 10px 14px -6px ${transparent1},0px 22px 35px 3px ${transparent2},0px 8px 42px 7px ${transparent3}`,
    `0px 11px 14px -7px ${transparent1},0px 23px 36px 3px ${transparent2},0px 9px 44px 8px ${transparent3}`,
    `0px 11px 15px -7px ${transparent1},0px 24px 38px 3px ${transparent2},0px 9px 46px 8px ${transparent3}`,
  ];
};

export const customShadow = {
  primary: createShadow(customTheme.palette.primary.main),
  secondary: createShadow(customTheme.palette.secondary.main),
  info: createShadow(customTheme.palette.info.main),
  success: createShadow(customTheme.palette.success.main),
  error: createShadow(customTheme.palette.error.main),
  warning: createShadow(customTheme.palette.warning.main),
  gray: createShadow('#637381'),
};

export default customTheme;
