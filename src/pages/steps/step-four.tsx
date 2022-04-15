import { Box, Typography, Button, Grid, CircularProgress, Divider } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../hooks/storeHooks';
import { setCurrentStep } from '../../store/app-process';
import { steps } from '../../utils/conts';
import { useState, useEffect } from 'react';
import Chart from './steps-images/chart';
import { IMT, IMTdesc } from '../../utils/utils';
import Transform from './steps-images/transform';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import Plan from './steps-images/plan';
import dayjs from 'dayjs';

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

    }, 0);
    return () => {
      processingMessage.reverse().pop();
    };
  });


  return (
    <Box component={'form'} onSubmit={handleSubmit(handleNext)}>
      <Typography variant='h6' component={'h2'} mb={2}>
        {processingMessage.length > 0 && <CircularProgress size={22} sx={{ mr: 1 }} />}
        {message}
      </Typography>
      {processingMessage.length === 0 && <Typography variant='h4' component={'h2'} mb={4} sx={{ color: '#8759f2' }} fontWeight='600'>Базируясь на Ваших ответах:</Typography>}
      {processingMessage.length === 0 && (
        <Grid container spacing={3} mb={4} pl={3}>
          <Grid item xs={12}>
            <Typography fontWeight={'600'} variant='h4' textAlign={'center'} sx={{ color: '#00d4e6' }}>30кг</Typography>
            <Typography textAlign={'center'} sx={{ color: '#8759f2' }}>к {dayjs().add(1, 'month')}</Typography>
            <Chart />
            <Divider sx={{ my: 2 }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={'600'} variant='h5' textAlign={'center'} sx={{ color: '#8759f2' }}>87%</Typography>
            <Typography textAlign={'center'} fontWeight={'300'} variant='h6'>Таких же людей как и Вы, добиваются успеха с нашей программой похудения</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography textAlign={'center'} fontWeight={'300'} variant='h6'>Апрель, 10</Typography>
            <Typography fontWeight={'600'} textAlign={'center'} variant='h5' sx={{ color: '#8759f2' }}>-2кг</Typography>
            <Typography textAlign={'center'} fontWeight={'300'} variant='h6'>Уже за первую неделю</Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
            <Typography textAlign={'center'} fontWeight={'300'} variant='h6'>Индекс массы телы</Typography>
            <Typography fontWeight={'600'} textAlign={'center'} variant='h5' sx={{ color: '#8759f2' }}>{IMTdesc(Number(IMT(178, 112)))}</Typography>
            <Typography textAlign={'center'} fontWeight={'300'} variant='h6'>{IMT(178, 112)}</Typography>
            <Divider sx={{ my: 2 }} />
          </Grid>
          <Grid item xs={12}>
            <Transform />
            <Divider sx={{ my: 2 }} />
          </Grid>
          <Grid item xs={12}>
            <Plan />
          </Grid>
          <Grid item xs={12} lg={6} p={2} display='flex'>
            <CheckCircleOutlinedIcon sx={{ fontSize: '30px' }} />
            <Box>
              <Typography variant='h6' component={'h4'}>Персональный 30-ти дневный план по похудению</Typography>
              <Typography variant='body2' component={'p'}>Вы получаете комплексный 30-ти дневный план питания и тренировок, сконструированный специально для Вас и Вашего тела.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} p={2} display='flex'>
            <CheckCircleOutlinedIcon sx={{ fontSize: '30px' }} />
            <Box>
              <Typography variant='h6' component={'h4'}>Добиваемся результата просто и быстро:</Typography>
              <Typography variant='body2' component={'p'}>Нет голодовкам! Нет сверхнагрузкам! Нет невкусной пище! Завтрак, обед и ужин? Да! А еще ланчи, перекусы и полдники!</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} p={2} display='flex'>
            <CheckCircleOutlinedIcon sx={{ fontSize: '30px' }} />
            <Box>
              <Typography variant='h6' component={'h4'}>Мы проделали всю работу за Вас:</Typography>
              <Typography variant='body2' component={'p'}>Сохраните Ваше время и деньги, ведь мы объединились с профессионалами и выполнили всю работу по поиску и приготовлению Наших планов по похудению.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} p={2} display='flex'>
            <CheckCircleOutlinedIcon sx={{ fontSize: '30px' }} />
            <Box>
              <Typography variant='h6' component={'h4'}>Доступ с любого устройства:</Typography>
              <Typography variant='body2' component={'p'}>Получите доступ к вашему индивидуальному плану питания в любом месте и в любое время, на вашем телефоне, планшете или компьютере.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} p={2} display='flex'>
            <CheckCircleOutlinedIcon sx={{ fontSize: '30px' }} />
            <Box>
              <Typography variant='h6' component={'h4'}>Не тренируемся каждый день и не покупаем дорогие ингредиенты:</Typography>
              <Typography variant='body2' component={'p'}>Вы будете использовать только те ингредиенты, которые вам известны, нравятся и легки для вашего кошелька. И хотя мы используем профессионального шеф-повара, чтобы спланировать каждое из вкусных кето-блюд в вашем плане, вам не нужно никаких особых кулинарных навыков, чтобы приготовить их самостоятельно. Инструкции понятны, просты и упрощают подготовку.</Typography>
            </Box>
          </Grid>
        </Grid>)}

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
    </Box >
  );
}
