import React from 'react'
import {  TextField, Button } from '@mui/material';
import { LoginComponent, Title } from './styled';

const Login = () => {


  return (
    <LoginComponent>
      <Title>Entrar</Title>
      <TextField 
          id="email" 
          name="email"
          label="Email"
          variant="outlined" 
          size='larger' 
          fullWidth
      />
      <TextField 
          type="password" 
          id="password" 
          name="password"
          label="Senha"
          variant="outlined" 
          size='larger' 
          fullWidth
      />
      <Button variant="contained"> Entrar </Button>
    </LoginComponent>
  )


}

export default Login;
