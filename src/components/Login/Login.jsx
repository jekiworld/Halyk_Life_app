import styles from './login.css'
import React, { useState } from 'react'
import halyk from '../img/halyk-bank-icon.png';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);


  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);



  const handleLogin = () => {
    const userData = {
      email,
      password,
    };

    fetch('https://halyklife-insurance-auth.onrender.com/api/auth/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {

        const jwtToken = data.token;

        if (jwtToken) {
          setLoggedIn(true);

          console.log('JWT Токен:', jwtToken);
        } else {
          console.error('Токен JWT не найден в ответе');
        }
      })
      .catch((error) => {
        console.error('Неверный email или пароль', error);
      });

  };



  return (
    <div className='loginpage'>
      <div className="logpas">
        <img className='loglog' src={halyk} alt="Logo" style={{ width: '100px', height: 'auto' }} />

        {/* <h1 className='welcome'>{halyk}</h1> */}
        <input onChange={handleEmail} className="login" placeholder='Почта' />
        <input type='password' onChange={handlePassword} className="password" placeholder='Пароль' />
        {loggedIn ? (
          <Link to="/adminpanel">Go to Admin Panel</Link>
        ) : (
          <button onClick={handleLogin} className='submit_log'>Войти</button>
        )}      </div>
    </div>
  );
};

export default Login;