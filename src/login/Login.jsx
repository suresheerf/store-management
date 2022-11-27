import { Button, Card, Input, InputLabel } from '@mui/material';
import React, { useState } from 'react';
import { Form, redirect } from 'react-router-dom';
import './style.css';

export const login = async ({ request }) => {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log('updates:', updates);
  localStorage.setItem('isLoggin', true);
  return redirect('/home');
};

function Login() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <div className="loginContainer">
        <h1>Login</h1>
        <Form method="post">
          <InputLabel htmlFor="phone">phone:</InputLabel>
          <Input
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></Input>
          <InputLabel htmlFor="password">password:</InputLabel>
          <Input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <br />
          <Button
            variant="contained"
            style={{ marginTop: '10%' }}
            type="submit"
          >
            login
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Login;
