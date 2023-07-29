import React, { useState } from 'react';
// import { Button } from 'components/shared/Button';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const LoginInput = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., API call to authenticate user)
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

  const createAccountStyles = css`
    color: #9663FC;
    font-family: Uncut Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; /* 66.668% */
    letter-spacing: -0.12px;
    &:hover {
      color: #732ffb;
    }
  `;

  const containerStyles = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
  `;

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
            class = "w-full h-[80px] rounded-xl border-[1px] border-black font-RecoletaAlt text-2xl mb-4 pl-8 placeholder:text-gray-200"
          />
        </div>
        <div className="form-group w-full">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
            required
            placeholder='Password'
            class = "w-full h-[80px] justify-center rounded-xl border-[1px] border-black font-RecoletaAlt text-2xl mb-4 pl-8 placeholder:text-gray-200"
          />
        </div>

        <div class="w-full flex justify-between items-center mt-4">
          <div css={createAccountStyles}>
            Create account
          </div>

          <button variant='purple' size='small'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginInput;