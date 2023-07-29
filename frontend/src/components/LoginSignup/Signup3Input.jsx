import React, { useState } from 'react';
import { Button } from 'components/Button';
import { Link } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Signup3Input = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., API call to authenticate user)

    if (password !== confirmPassword) {
      // Display an error message or handle the mismatched passwords.
      console.log("Passwords do not match.");
      return;
    }

    // Proceed with account creation or other login logic if the passwords match.
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

  const handleConfirmPasswordFocus = (e) => {
    if (e.target.placeholder === 'Confirm password') {
      e.target.placeholder = '';
    }
  };

  const handleConfirmPasswordBlur = (e) => {
    if (e.target.value === '') {
      e.target.placeholder = 'Confirm password';
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

  const containerStyles = css`
    display: flex;
    justify-content: flex-end;
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
        <div className="form-group">
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onFocus={handleConfirmPasswordFocus}
            onBlur={handleConfirmPasswordBlur}
            required
            placeholder='Confirm password'
            css={inputStyles}
          />
        </div>

        <div css={containerStyles}>
          <Button variant='purple' size='large'>
            Create account
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signup3Input;