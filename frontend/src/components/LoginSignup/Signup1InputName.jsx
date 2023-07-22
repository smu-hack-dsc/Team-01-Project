import React, { useState } from 'react';
import { Button } from 'components/shared/Button';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Signup1InputName = () => {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Perform signup logic here (e.g., API call to register the user)
  };

  const handleFirstNameFocus = (e) => {
    if (e.target.placeholder === 'First name') {
      e.target.placeholder = '';
    }
  };

  const handleFirstNameBlur = (e) => {
    if (e.target.value === '') {
      e.target.placeholder = 'First name';
    }
  };

  const handleSurnameFocus = (e) => {
    if (e.target.placeholder === 'Surname (optional)') {
      e.target.placeholder = '';
    }
  };

  const handleSurnameBlur = (e) => {
    if (e.target.value === '') {
      e.target.placeholder = 'Surname (optional)';
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
      <form onSubmit={handleSignup}>
        <div>
          <input
            type="text" // Change the input type to 'text' for First name
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            onFocus={handleFirstNameFocus}
            onBlur={handleFirstNameBlur}
            required
            placeholder='First name'
            css={inputStyles}
          />
        </div>
        <div className="form-group">
          <input
            type="text" // Change the input type to 'text' for Surname
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            onFocus={handleSurnameFocus}
            onBlur={handleSurnameBlur}
            placeholder='Surname (optional)'
            css={inputStyles}
          />
        </div>

        <div css={containerStyles}>
          <Button variant='purple' size='small'>
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signup1InputName;