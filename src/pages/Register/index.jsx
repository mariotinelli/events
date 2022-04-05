import React from 'react'
import {  TextField, Button } from '@mui/material';
import { LoginComponent, Title } from '../Login/styled';

const Register = () => {


  return (
    <LoginComponent>
      <Title>Registro</Title>
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
      <TextField 
          type="password" 
          id="password_confirm" 
          name="password_confirm"
          label="Confirme sua senha"
          variant="outlined" 
          size='larger' 
          fullWidth
      />
      <Button variant="contained"> Cadastrar </Button>
    </LoginComponent>
  )


}

export default Register;
