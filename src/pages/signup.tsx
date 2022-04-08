import { Box, createTheme, CssBaseline, Grid, Paper, Step, StepLabel, Stepper, ThemeProvider } from '@mui/material';
import { useAppSelector } from './../hooks/storeHooks';
import { steps } from './../utils/conts';
import StepOne from './steps/step-one';
import StepTwo from './steps/step-two';
import './style.css';

const theme = createTheme({
  typography: {
    fontFamily: [
      'FuturaPT',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      light: '#00d4e6',
      main: '#00d4e6',
      dark: '#00d4e699',
      contrastText: '#fff',
    },
  },
});

export default function SignUp() {

  const { currentStep } = useAppSelector(({ APP }) => APP);

  const getStep = () => {
    switch (currentStep) {
      case 0:
        return <StepOne currentStep={currentStep} />;
      case 1:
        return <StepTwo currentStep={currentStep} />;
      default:
        break;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" height={'100vh'}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box sx={{
            my: 4,
            mx: 4,
          }}
          >
            <a href="/" className="logo">
              <img src="/images/logo.svg" alt="" />
            </a>
            <Stepper activeStep={currentStep} sx={{ flexWrap: 'wrap', my: 6 }}>
              {steps.map((label) => (
                <Step color='success' key={label} sx={{ mb: 1 }}>
                  <StepLabel sx={{ mt: 1 }}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {getStep()}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
