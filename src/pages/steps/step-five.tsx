import { Box, Button, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../hooks/storeHooks';
import { setCurrentStep } from '../../store/app-process';
import { steps } from '../../utils/conts';

export default function StepFive({ currentStep }: { currentStep: number }) {

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
      <Grid container spacing={3} mb={4} pl={3}>
        <Grid xs={12}></Grid>
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
            ? 'Личный кабинет'
            : 'Далее'}
        </Button>
      </Box>
    </Box>
  );
}
