import { CssBaseline, Paper, Box, Grid, TextField, Button } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function SignIn() {

  const { register, formState: { errors, isDirty, isSubmitting, submitCount }, handleSubmit } = useForm({ mode: 'onSubmit' });

  const handleLogin = () => {
    // eslint-disable-next-line no-console
    console.log('terx');
  };


  useEffect(() => {
    toast.warning(errors.login?.message);
    toast.warning(errors.password?.message);
  }, [errors.login?.message, errors.password?.message, submitCount]);

  return (
    <Grid container component="main" height={'100vh'}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6}>
        <Box sx={{
          my: 4,
          mx: 4,
        }}
        >
          <Link to="/" className="logo">
            <img src="/images/logo.svg" alt="" />
          </Link>
          <Grid container spacing={3} py={4} component='form' onSubmit={handleSubmit(handleLogin)}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant='outlined'
                label='Логин'
                {...register('login', {
                  required: 'Введите логин',
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant='outlined'
                label='Пароль'
                {...register('password', {
                  required: 'Введите пароль',
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Проверьте корректность введенной электронной почты',
                  },
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={!isDirty || isSubmitting}
              >
                Войти
              </Button>
              <Grid container>
                <Grid item xs={12} md={5}>
                  <Link to="#">
                    Забыли пароль?
                  </Link>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Link to="#">
                    {'Еще нет аккаунта? Регистрация.'}
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
