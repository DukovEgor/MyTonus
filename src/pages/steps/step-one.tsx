import { Box, Button, Checkbox, Container, Grid, Paper, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { setCurrentStep } from '../../store/app-process';
import { steps } from '../../utils/conts';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export default function StepOne() {

  const dispatch = useAppDispatch();

  const { currentStep } = useAppSelector(({ APP }) => APP);


  const handleNext = () => {
    dispatch(setCurrentStep(currentStep + 1));
  };

  const handleBack = () => {
    dispatch(setCurrentStep(currentStep - 1));
  };

  const { register, formState: { errors } } = useForm({ mode: 'onBlur' });
  useEffect(() => {
    toast.warning(errors.firstName?.message);
  });


  return (
    <Container>
      <Stepper activeStep={currentStep} sx={{ pt: 3, pb: 5, flexWrap: 'wrap' }}>
        {steps.map((label) => (
          <Step color='success' key={label} sx={{ mb: 1 }}>
            <StepLabel sx={{ mt: 1 }}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Paper elevation={4} sx={{ p: 6 }}>
        <Typography variant='h5' component={'h2'} mb={4}>Для получения доступа к сервису необходимо заполнить следующие данные:</Typography>
        <Grid container spacing={3}  >
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('firstName', {
                required: '"Имя" это обязательное поле',
                pattern: {
                  value: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
                  message: '"Имя" не может состоять из цифр и специальных символов',
                },
              })}
              required
              id="firstName"
              name="firstName"
              label="Имя"
              fullWidth
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('lastName', {
                required: '"Фамилия" это обязательное поле',
                pattern: {
                  value: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
                  message: '"Фамилия" не может состоять из цифр и специальных символов',
                },
              })}
              required
              id="lastName"
              name="lastName"
              label="Фамилия"
              fullWidth
              autoComplete="family-name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="email"
              name="email"
              label="Электронная почта"
              fullWidth
              variant="outlined"
              type={'email'}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="tel"
              name="tel"
              label="Мобильный телефон"
              fullWidth
              variant="outlined"
              type={'tel'}
            />
          </Grid>
          <Grid item xs={12}>
            <Checkbox />
            <Typography variant='caption' component={'span'}>Регистрируясь на сайте вы ознакомились и соглашаетесь с <Link to={'/'}>договором оферты</Link>, <Link to={'/'}>политикой конфиденциальности</Link>, <Link to={'/'}>тарифами</Link> и даёте своё <Link to={'/'}>согласие на обработку персональных данных</Link>.</Typography>
          </Grid>
          <Grid item xs={12}>
            <Checkbox />
            <Typography variant='caption' component={'span'}>Соглашаетесь с <Link to={'/'}>тарифами</Link> сервиса и <Link to={'/'}>рекуррентными</Link> платежами. Первое списание в размере 889 ₽ через 72 часа после подписки и далее, согласно тарифу раз в 5 дней 889 ₽</Typography>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', pt: 2 }}>
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
            onClick={handleNext}
            color='primary'
            variant='contained'
            type='submit'

          >
            {currentStep === steps.length - 1
              ? 'Завершить'
              : 'Далее'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
