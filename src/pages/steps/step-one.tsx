import { Box, Button, Checkbox, Container, Grid, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { setCurrentStep } from '../../store/app-process';
import { steps } from '../../utils/conts';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import './steps.css';

export default function StepOne() {

  const dispatch = useAppDispatch();

  const { currentStep } = useAppSelector(({ APP }) => APP);


  const handleNext = () => {
    dispatch(setCurrentStep(currentStep));
  };

  const handleBack = () => {
    dispatch(setCurrentStep(currentStep - 1));
  };

  const { register, formState: { errors, isDirty, isValid, isSubmitting } } = useForm({ mode: 'onBlur' });
  useEffect(() => {
    toast.warning(errors.firstName?.message);
    toast.warning(errors.lastName?.message);
    toast.warning(errors.email?.message);
    toast.warning(errors.tel?.message);
    toast.warning(errors.secondCheckbox?.message);
    toast.warning(errors.firstCheckbox?.message);
  });

  return (
    <Box className='form__background' sx={{ height: '100%', width: '100%' }} component='main'>
      <Container>
        <Stepper activeStep={currentStep} sx={{ pt: 3, pb: 5, flexWrap: 'wrap' }}>
          {steps.map((label) => (
            <Step color='success' key={label} sx={{ mb: 1 }}>
              <StepLabel sx={{ mt: 1 }}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <form>
          <Typography variant='h5' component={'h2'} mb={4}>Для получения доступа к сервису необходимо заполнить следующие данные:</Typography>
          <Grid container spacing={3} xs={6} >
            <Grid item xs={12} >
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
            <Grid item xs={12} >
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
            <Grid item xs={12} >
              <TextField
                {...register('email',
                  {
                    required: '"E-mail" это обязательное поле',
                    minLength: 4,
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Пожалуйста, введите корректный адрес электронной почты',
                    },
                  },
                )}
                required
                id="email"
                name="email"
                label="Электронная почта"
                fullWidth
                variant="outlined"
                type={'email'}
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                {...register('tel',
                  {
                    required: '"Телефон" это обязательное поле',
                    minLength: 4,
                    pattern: {
                      value:
                        /^\+?[78][-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/,
                      message: 'Пожалуйста, введите корректный номер мобильного телефона',
                    },
                  },
                )}
                required
                id="tel"
                name="tel"
                label="Мобильный телефон"
                fullWidth
                variant="outlined"
                type={'tel'}
              />
            </Grid>
            <Grid item xs={12} display='flex' alignItems='flex-start' flexDirection='row' >
              <Checkbox
                id='firstCheckbox'
                {...register('firstCheckbox',
                  {
                    required: 'Пожалуйста, примите пользовательские соглашения, нажав на галочки в конце формы',
                  },
                )}
              />
              <Typography variant='caption' component={'p'}>Регистрируясь на сайте вы ознакомились и соглашаетесь с <Link to={'/'}>договором оферты</Link>, <Link to={'/'}>политикой конфиденциальности</Link>, <Link to={'/'}>тарифами</Link> и даёте своё <Link to={'/'}>согласие на обработку персональных данных</Link>.</Typography>
            </Grid>
            <Grid item xs={12} display='flex' alignItems='flex-start' flexDirection='row' >
              <Checkbox
                id='secondCheckbox'
                {...register('secondCheckbox',
                  {
                    required: 'Пожалуйста, примите пользовательские соглашения, нажав на галочки в конце формы',
                  },
                )}
              />
              <Typography variant='caption' component={'p'}>Соглашаетесь с <Link to={'/'}>тарифами</Link> сервиса и <Link to={'/'}>рекуррентными</Link> платежами. Первое списание в размере 889 ₽ через 72 часа после подписки и далее, согласно тарифу раз в 5 дней 889 ₽</Typography>
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', pt: 2 }} >
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
              disabled={!isDirty || !isValid || isSubmitting}

            >
              {currentStep === steps.length - 1
                ? 'Завершить'
                : 'Далее'}
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
}
