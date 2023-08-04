import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'components/Button';
import api from '../../api';
import { checkLoginStatus } from '../NavBar'

/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';

const LoginInput = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isWrongCredentials, setIsWrongCredentials] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., API call to authenticate user)
    try {
      const response = await api.post('/user/login', {
        email:email,
        password:password
      });
      const { token } = response.data;
      localStorage.setItem('token', token);
      // render = () => {
          navigate('/');
      // }
      //window.location.reload();
    } catch (error) {
      // Handle login error
      if (error.response?.status === 500) {
        setIsWrongCredentials(true);
      }
      console.log('error: ', error);
    }
  };

  const handleEmailFocus = (e) => {
    if (e.target.placeholder === 'Email') {
      e.target.placeholder = '';
    }
  };

  const handleEmailBlur = (e) => {
    if (e.target.value === '') {
      e.target.placeholder = 'Email';
    }
  };

  const handlePasswordFocus = (e) => {
    if (e.target.placeholder === 'Password') {
      e.target.placeholder = '';
    }
  };

  const handlePasswordBlur = (e) => {
    if (e.target.value === '') {
      e.target.placeholder = 'Password';
    }
  };

  return (
    <div class="w-3/5">
      <form onSubmit={handleLogin} class=" flex flex-col justify-center items-center">
        <div class="w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
            required
            placeholder='Email'
            class="w-full rounded-xl border-[1px] border-black font-DMSans text-xl mb-4 py-4 px-5 placeholder:text-gray-200"
          />
        </div>
        <div className="w-full">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
            required
            placeholder='Password'
            class="w-full justify-center rounded-xl border-[1px] border-black font-DMSans text-xl mb-4 py-4 px-5 placeholder:text-gray-200"
          />
        </div>
        {isWrongCredentials ? 
        <div>
          The email or password entered is incorrect.
        </div> : null }

        <div class="w-full flex justify-center my-4">
          <button class="flex flex-col px-4 py-2 w-full justify-center items-center flex-shrink-0 bg-purple-500 hover:bg-purple-400 text-white rounded-full px-8 text-base font-semibold">
            LOGIN
          </button>
        </div>

        <div>
          Don't have an account yet?{' '}
          <Link to="/signup" class="font-DMSans font-bold text-purple_800CDB">
              Sign Up
          </Link>
        </div>
      </form>
    </div>

  );
};

export default LoginInput;