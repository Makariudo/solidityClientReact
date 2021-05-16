import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Roboto',
  },
  palette: {
    primary: {
      light: '#f6685e',
      main: '#e53935',
      dark: '#aa2e25',
      contrastText: '#fff',
    },
    secondary: {
      light: '#337066',
      main: '#004d40',
      dark: '#00352c',
      contrastText: '#FFF',
    },
  },
});

export default theme