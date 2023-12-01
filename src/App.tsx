import './App.css';
import { SnackbarProvider } from 'notistack';
import { HashRouter as Router } from 'react-router-dom';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import AppRoutes from './AppRoutes';
import theme from './muiTheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Router>
        <SnackbarProvider maxSnack={3} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
          <AppRoutes />
        </SnackbarProvider>
      </Router>
    </LocalizationProvider>
  </ThemeProvider>
  )
}

export default App
