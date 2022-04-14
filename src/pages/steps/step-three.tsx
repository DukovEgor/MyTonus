import { Box, Typography, Button, Grid, Checkbox, FormControlLabel } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../hooks/storeHooks';
import { setCurrentStep } from '../../store/app-process';
import { steps } from '../../utils/conts';
import EmojiFoodBeverageOutlinedIcon from '@mui/icons-material/EmojiFoodBeverageOutlined';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import styled from '@emotion/styled';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import FastfoodIcon from '@mui/icons-material/FastfoodOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import CakeIcon from '@mui/icons-material/Cake';
import EggIcon from '@mui/icons-material/Egg';
import EggOutlinedIcon from '@mui/icons-material/EggOutlined';
import SetMealOutlinedIcon from '@mui/icons-material/SetMealOutlined';
import SetMealIcon from '@mui/icons-material/SetMeal';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import SoupKitchenOutlinedIcon from '@mui/icons-material/SoupKitchenOutlined';
import EggAltOutlinedIcon from '@mui/icons-material/EggAltOutlined';
import EggAltIcon from '@mui/icons-material/EggAlt';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  fontSize: 100,
}));
const StyledLabel = styled(FormControlLabel)(({ theme }) => ({
  flexDirection: 'column',
  alignItems: 'center',
}));


export default function StepThree({ currentStep }: { currentStep: number }) {

  const dispatch = useAppDispatch();

  const handleNext = () => {

    dispatch(setCurrentStep(currentStep + 1));
  };

  const handleBack = () => {

    dispatch(setCurrentStep(currentStep - 1));
  };

  const { handleSubmit } = useForm({ mode: 'onSubmit' });


  return (
    <Box component={'form'} onSubmit={handleSubmit(handleNext)}>
      <Typography variant='h5' component={'h2'} mb={4}>Выберите то, без чего не сможете обойтись:</Typography>
      <Grid container spacing={3} mb={4} pl={3}>
        <Grid item md={6} lg={3}>
          <StyledLabel control={<StyledCheckbox icon={<EmojiFoodBeverageOutlinedIcon fontSize='inherit' />} checkedIcon={<EmojiFoodBeverageIcon fontSize='inherit' />} />} label="Чай/Кофе" />
        </Grid>
        <Grid item md={6} lg={3}>
          <StyledLabel control={<StyledCheckbox icon={<FastfoodOutlinedIcon fontSize='inherit' />} checkedIcon={<FastfoodIcon fontSize='inherit' />} />} label="Фастфуд" />
        </Grid>
        <Grid item md={6} lg={3}>
          <StyledLabel control={<StyledCheckbox icon={<CakeOutlinedIcon fontSize='inherit' />} checkedIcon={<CakeIcon fontSize='inherit' />} />} label="Сладости" />
        </Grid>
        <Grid item md={6} lg={3}>
          <StyledLabel control={<StyledCheckbox icon={<EggOutlinedIcon fontSize='inherit' />} checkedIcon={<EggIcon fontSize='inherit' />} />} label="Белковая пища" />
        </Grid>
        <Grid item md={6} lg={3}>
          <StyledLabel control={<StyledCheckbox icon={<SetMealOutlinedIcon fontSize='inherit' />} checkedIcon={<SetMealIcon fontSize='inherit' />} />} label="Морепродукты" />
        </Grid>
        <Grid item md={6} lg={3}>
          <StyledLabel control={<StyledCheckbox icon={<SoupKitchenIcon fontSize='inherit' />} checkedIcon={<SoupKitchenOutlinedIcon fontSize='inherit' />} />} label="Супы и пюре" />
        </Grid>
        <Grid item md={6} lg={3}>
          <StyledLabel control={<StyledCheckbox icon={<EggAltOutlinedIcon fontSize='inherit' />} checkedIcon={<EggAltIcon fontSize='inherit' />} />} label="Жареное" />
        </Grid>
        <Grid item md={6} lg={3}>
          <StyledLabel control={<StyledCheckbox icon={<DinnerDiningOutlinedIcon fontSize='inherit' />} checkedIcon={<DinnerDiningIcon fontSize='inherit' />} />} label="Макароны" />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', pt: 2, pb: 1 }} >
        <Button
          color="error"
          variant={'outlined'}
          disabled={currentStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Назад
        </Button>
        <Button
          color='primary'
          variant='contained'
          type='submit'
        >
          {currentStep === steps.length - 1
            ? 'Завершить'
            : 'Далее'}
        </Button>
      </Box>
    </Box>
  );
}
