import { Box, Typography, Button, Grid, CircularProgress } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../hooks/storeHooks';
import { setCurrentStep } from '../../store/app-process';
import { steps } from '../../utils/conts';
import { useState, useEffect } from 'react';

const processingMessage = ['Анализ данных...', 'Прогнозируем результат...', 'Осталось немного...', 'Рассчет сроков...', 'Запускаем конфигурацию рациона...'];

export default function StepFour({ currentStep }: { currentStep: number }) {

  const dispatch = useAppDispatch();

  const handleNext = () => {

    dispatch(setCurrentStep(currentStep + 1));
  };

  const handleBack = () => {

    dispatch(setCurrentStep(currentStep - 1));
  };

  const { handleSubmit } = useForm({ mode: 'onSubmit' });

  const [message, setMessage] = useState<string>('Загрузка...');

  useEffect(() => {
    setTimeout(() => {
      setMessage(processingMessage[0]);

    }, 1000);
    return () => {
      processingMessage.reverse().pop();
    };
  });


  return (
    <Box component={'form'} onSubmit={handleSubmit(handleNext)}>
      <Typography variant='h5' component={'h2'} mb={4}>{processingMessage.length > 0 && <CircularProgress size={22} sx={{mr: 1}} />}{message}</Typography>
      <Grid container spacing={3} mb={4} pl={3}>
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
