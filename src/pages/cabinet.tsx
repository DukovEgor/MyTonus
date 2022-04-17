import { Box, CssBaseline, List, Paper, BottomNavigation, BottomNavigationAction, createTheme, ThemeProvider, Typography } from '@mui/material';
import { useState } from 'react';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import Program from './cabinet-tabs/program';
import { Link } from 'react-router-dom';
import Meal from './cabinet-tabs/meal';
import MFR from './cabinet-tabs/MFR';
import Workout from './cabinet-tabs/workout';

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
      light: '#8659f2',
      main: '#8659f2',
      dark: '#8659f2',
      contrastText: '#fff',
    },
  },
});


const getTab = (tab: number) => {
  switch (tab) {
    case 0:
      return <Program />;
    case 1:
      return <Meal />;
    case 2:
      return <MFR />;
    case 3:
      return <Workout />;
  }
};


export default function Cabinet() {

  const [tab, setTab] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ pt: 4, pb: 8, px: 4 }}>
        <Link to="/" className="logo">
          <img src="/images/logo.svg" alt="" />
        </Link>
        <Typography variant='h4' component={'h1'} my={4}>Добро пожаловать, Евгений!
        </Typography>
        <CssBaseline />
        <List>
          {getTab(tab)}
        </List>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={tab}
            onChange={(event) => {
              setTab(Number(event.currentTarget.getAttribute('data-tab')));
            }}
          >
            <BottomNavigationAction data-tab='0' label="Программа" icon={<FactCheckIcon />} />
            <BottomNavigationAction data-tab='1' label="Питание" icon={<DinnerDiningIcon />} />
            <BottomNavigationAction data-tab='2' label="МФР" icon={<SportsGymnasticsIcon />} />
            <BottomNavigationAction data-tab='3' label="Тренировки" icon={<FitnessCenterIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}
