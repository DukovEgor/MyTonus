import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Root from '../../pages/root';
import StepOne from '../../pages/steps/step-one';
import StepTwo from '../../pages/steps/step-two';
import { AppRoutes } from '../../utils/conts';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00cba9',
      light: '#A7F0BA',
      contrastText: '#fff',
    },
    error: {
      main: '#e7008a',
    },
    tonalOffset: -1,
  },
});
function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoutes.Root}
            element={<Root />}
          />
          <Route
            path={AppRoutes.SignUp}
          >
            <Route path='first' element={<StepOne />} />
            <Route path='second' element={<StepTwo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
