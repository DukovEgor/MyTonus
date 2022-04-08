import { Box, Typography, TextField, FormControlLabel, Checkbox, Button, Grid, Link } from '@mui/material';
import { useEffect } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../hooks/storeHooks';
import { startRegistration } from '../../store/api-actions';
import { steps } from '../../utils/conts';


export default function StepOne({ currentStep }: { currentStep: number }) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleNext: SubmitHandler<FieldValues> = (data) => {
    dispatch(startRegistration(data));
  };


  const { register, handleSubmit, formState: { errors, isDirty, isValid, isSubmitting } } = useForm({ mode: 'onBlur' });

  useEffect(() => {
    toast.warning(errors.firstName?.message);
    toast.warning(errors.lastName?.message);
    toast.warning(errors.email?.message);
    toast.warning(errors.tel?.message);
    toast.warning(errors.secondCheckbox?.message);
    toast.warning(errors.firstCheckbox?.message);
  });

  return (


    <Box component={'form'} onSubmit={handleSubmit(handleNext)}>
      <Typography variant='h5' component={'h2'} mb={4}>Для получения доступа к сервису необходимо заполнить следующие данные:</Typography>
      <Grid container spacing={3} >
        <Grid item xs={12} md={6}>
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
            error={!!errors.firstName}
          />
        </Grid>
        <Grid item xs={12} md={6}>
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
            autoComplete="family-name"
            fullWidth
            variant="outlined"
            error={!!errors.lastName}
          />
        </Grid>
        <Grid item xs={12} md={6}>
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
            autoComplete="email"
            fullWidth
            variant="outlined"
            type={'email'}
            error={!!errors.email}
          />
        </Grid>
        <Grid item xs={12} md={6}>
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
            autoComplete="tel"
            fullWidth
            variant="outlined"
            type={'tel'}
            error={!!errors.tel}
          />
        </Grid>
        <Box sx={{ p: 3, pr: 0 }} >
          <FormControlLabel
            sx={{ backgroundColor: `${errors.firstCheckbox ? '#fff' : '#BAE6FF50'}`, border: `${errors.firstCheckbox ? '1px solid #e74c3c' : 'none'}`, borderRadius: '10px', mb: 1, py: 2 }}
            control={
              <Checkbox
                {...register('firstCheckbox', {
                  required: 'Чтобы продолжить, необходимо принять пользовательские соглашения',
                })}
                value='true'
                color="primary"
                required
              />
            }
            label={<Typography variant='caption' component={'span'}>Регистрируясь на сайте вы ознакомились и соглашаетесь с <Link underline="none" href={'/'}>договором оферты</Link>, <Link underline="none" href={'/'}>политикой конфиденциальности</Link>, <Link underline="none" href={'/'}>тарифами</Link> и даёте своё <Link underline="none" href={'/'}>согласие на обработку персональных данных</Link>.</Typography>}
          />
          <FormControlLabel
            sx={{ backgroundColor: `${errors.firstCheckbox ? '#fff' : '#BAE6FF50'}`, border: `${errors.secondCheckbox ? '1px solid #e74c3c' : 'none'}`, borderRadius: '10px', py: 2 }}
            control={
              <Checkbox
                {...register('secondCheckbox', {
                  required: 'Чтобы продолжить, необходимо принять пользовательские соглашения',
                })}
                value="true" color="primary" required
              />
            }
            label={<Typography variant='caption' component={'p'}>Соглашаетесь с <Link underline="none" href={'/'}>тарифами</Link> сервиса и <Link underline="none" href={'/'}>рекуррентными</Link> платежами. Первое списание в размере 889 ₽ через 72 часа после подписки и далее, согласно тарифу раз в 5 дней 889 ₽</Typography>}
          />
        </Box>
      </Grid>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', pt: 2, pb: 1 }} >
        <Button
          color="error"
          variant={'outlined'}
          onClick={() => navigate('/')}
          sx={{ mr: 1 }}
        >
          Назад
        </Button>
        <Button
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
    </Box>
  );
}
