import { Box, Typography, TextField, Button, Grid, InputAdornment, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../hooks/storeHooks';
import { setCurrentStep } from '../../store/app-process';
import { steps } from '../../utils/conts';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import DateAdapter from '@mui/lab/AdapterDayjs';
import { startRegistration } from '../../store/api-actions';

export default function StepTwo({ currentStep }: { currentStep: number }) {

  const [value, setValue] = useState<Date | null>(null);
  const [genderValue, setGenderValue] = useState('female');

  const dispatch = useAppDispatch();

  const handleNext: SubmitHandler<FieldValues> = (data) => {

    dispatch(startRegistration(data));
  };

  const handleBack = () => {
    dispatch(setCurrentStep(currentStep - 1));
  };

  const { register, handleSubmit, formState: { errors, isDirty, isSubmitting } } = useForm({ mode: 'onSubmit' });

  useEffect(() => {
    toast.warning(errors.height?.message);
    toast.warning(errors.weight?.message);
    toast.warning(errors.dateBirth?.message);
  }, [errors.dateBirth?.message, errors.height?.message, errors.weight?.message]);


  return (
    <Box component={'form'} onSubmit={handleSubmit(handleNext)}>
      <Typography variant='h5' component={'h2'} mb={4}>Какой у Вас рост и вес?</Typography>
      <Grid container spacing={3} >
        <Grid item xs={12} md={6}>
          <TextField
            {...register('height', {
              required: '"Рост" это обязательное поле',
              min: 100,
            })}
            required
            InputProps={{
              endAdornment: <InputAdornment position="end">см</InputAdornment>,
            }}
            id="height"
            name="height"
            label="Рост"
            fullWidth
            variant="outlined"
            error={!!errors.height}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...register('weight', {
              required: '"Вес" это обязательное поле',
              min: 30,
            })}
            required
            id="weight"
            name="weight"
            label="Вес"
            fullWidth
            variant="outlined"
            InputProps={{
              endAdornment: <InputAdornment position="end">кг</InputAdornment>,
            }}
            error={!!errors.weight}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DatePicker
              label="Дата рождения"
              cancelText='Отмена'
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField fullWidth {...params} {...register('dateBirth', {
                  required: '"Дата рождения" это обязательное поле',
                })}
                />)}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Пол</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              value={genderValue}
              onChange={(evt) => setGenderValue(evt.target.value)}
            >
              <FormControlLabel value="female" control={
                <Radio {...register('gender', {
                  required: '"Дата рождения" это обязательное поле',
                })}
                />
              } label="Женщина"
              />
              <FormControlLabel value="male" control={
                <Radio {...register('gender', {
                  required: '"Дата рождения" это обязательное поле',
                })}
                />
              } label="Мужчина"
              />
            </RadioGroup>
          </FormControl>
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
          disabled={!isDirty || isSubmitting}
        >
          {currentStep === steps.length - 1
            ? 'Завершить'
            : 'Далее'}
        </Button>
      </Box>
    </Box>
  );
}
