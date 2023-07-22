import React, { useState } from 'react';
import { Button } from 'components/shared/Button';
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
    if (e.target.placeholder === 'Username or email') {
      e.target.placeholder = '';
    }
  };

  const handleEmailBlur = (e) => {
    if (e.target.value === '') {
      e.target.placeholder = 'Username or email';
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

  const inputStyles = css`
    width: 700px;
    height: 80px;
    flex-shrink: 0;
    border-radius: 15px;
    border: 1px solid #000;
    outline: none;
    font-family: Uncut Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 66.668% */
    letter-spacing: -0.12px;
    color: #000;
    padding: 0px 30px;
    margin-bottom: 16px;

    ::placeholder {
      /* Set the placeholder text color */
      color: #D9D9D9;
    }
  `;

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
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
            required
            placeholder='Username or email'
            css={inputStyles}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
            required
            placeholder='Password'
            css={inputStyles}
          />
        </div>

        <div css={containerStyles}>
          <div css={createAccountStyles}>
            Create account
          </div>

          <Button variant='purple' size='small'>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginInput;