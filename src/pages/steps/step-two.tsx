import { Box, Typography, TextField, FormControlLabel, Checkbox, Button, Grid, Link, InputAdornment } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../hooks/storeHooks';
import { setCurrentStep } from '../../store/app-process';
import { steps } from '../../utils/conts';


export default function StepTwo({ currentStep }: { currentStep: number }) {

  const dispatch = useAppDispatch();

  const handleNext = (data: unknown) => {
    // eslint-disable-next-line no-console
    console.log(data);

    if (isValid && isDirty) {
      dispatch(setCurrentStep(currentStep + 1));
    }
  };

  const handleBack = () => {
    dispatch(setCurrentStep(currentStep - 1));
  };

  const { register, handleSubmit, formState: { errors, isDirty, isValid, isSubmitting } } = useForm({ mode: 'onBlur' });

  useEffect(() => {
    toast.warning(errors.height?.message);
    toast.warning(errors.weight?.message);
  });

  return (
    <Box component={'form'} onSubmit={handleSubmit(handleNext)}>
      <Typography variant='h5' component={'h2'} mb={4}>Какой у Вас рост и вес?</Typography>
      <Grid container spacing={3} >
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            {...register('height', {
              required: '"Рост" это обязательное поле',
              pattern: {
                value: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
                message: '"Рост" не может состоять из цифр и специальных символов',
              },
            })}
            required
            InputProps={{
              endAdornment: <InputAdornment position="end">см</InputAdornment>,
            }}
            id="height"
            name="height"
            label="Рост"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            error={!!errors.height}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            {...register('weight', {
              required: '"Вес" это обязательное поле',
              pattern: {
                value: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
                message: '"Вес" не может состоять из цифр и специальных символов',
              },
            })}
            required
            id="weight"
            name="weight"
            label="Вес"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
            InputProps={{
              endAdornment: <InputAdornment position="end">кг</InputAdornment>,
            }}
            error={!!errors.weight}
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
            fullWidth
            variant="outlined"
            type={'email'}
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
            fullWidth
            variant="outlined"
            type={'tel'}
          />
        </Grid>
        <Box sx={{ p: 3, pr: 0 }} >
          <FormControlLabel
            sx={{ backgroundColor: '#BAE6FF50', borderRadius: '10px', mb: 1, py: 2 }}
            control={<Checkbox value="remember" color="primary" required />}
            label={<Typography variant='caption' component={'span'}>Регистрируясь на сайте вы ознакомились и соглашаетесь с <Link underline="none" href={'/'}>договором оферты</Link>, <Link underline="none" href={'/'}>политикой конфиденциальности</Link>, <Link underline="none" href={'/'}>тарифами</Link> и даёте своё <Link underline="none" href={'/'}>согласие на обработку персональных данных</Link>.</Typography>}
          />
          <FormControlLabel
            sx={{ backgroundColor: '#BAE6FF50', borderRadius: '10px', py: 2 }}
            control={<Checkbox value="remember" color="primary" required />}
            label={<Typography variant='caption' component={'p'}>Соглашаетесь с <Link underline="none" href={'/'}>тарифами</Link> сервиса и <Link underline="none" href={'/'}>рекуррентными</Link> платежами. Первое списание в размере 889 ₽ через 72 часа после подписки и далее, согласно тарифу раз в 5 дней 889 ₽</Typography>}
          />
        </Box>
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
