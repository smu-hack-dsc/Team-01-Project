import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components/Button';
import api from '../../api';
/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';

const LoginInput = ({ onChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., API call to authenticate user)
    try {
      const response = await api.post('/user/login', {
        email:email,
        password:password
      });
      const { user, token } = response.data;

      // Store the tokens in localStorage or secure cookie for later use
      localStorage.setItem('token', token);
      console.log(user);

      // Redirect or perform other actions upon successful login
    } catch (error) {
      // Handle login error
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

  // const containerStyles = css`
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   margin-top: 50px;
  // `;

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
            class="w-full h-[80px] rounded-xl border-[1px] border-black font-RecoletaAlt text-2xl mb-4 pl-8 placeholder:text-gray-200"
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
            class="w-full h-[80px] justify-center rounded-xl border-[1px] border-black font-RecoletaAlt text-2xl mb-4 pl-8 placeholder:text-gray-200"
          />
        </div>

        <div class="w-full flex justify-between items-center mt-4">
          <Link to="/signup" className="font-DMSans font-bold text-2xl text-purple-500">
            Create account
          </Link>

          <Button variant='purple' size='medium'>
            Login
          </Button>
        </div>
      </form>
    </div>

  );
};

export default LoginInput;