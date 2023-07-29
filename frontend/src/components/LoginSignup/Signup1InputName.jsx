import React, { useState } from 'react';
import { Button } from 'components/Button';
import { Link } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';

const Signup1InputName = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Perform signup logic here (e.g., API call to register the user)
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

  const handleNameFocus = (e) => {
    if (e.target.placeholder === 'Name') {
      e.target.placeholder = '';
    }
  };

  const handleNameBlur = (e) => {
    if (e.target.value === '') {
      e.target.placeholder = 'Name';
    }
  };

  // const inputStyles = css`
  //   width: 700px;
  //   height: 80px;
  //   flex-shrink: 0;
  //   border-radius: 15px;
  //   border: 1px solid #000;
  //   outline: none;
  //   font-family: Uncut Sans;
  //   font-size: 24px;
  //   font-style: normal;
  //   font-weight: 600;
  //   line-height: 16px; /* 66.668% */
  //   letter-spacing: -0.12px;
  //   color: #000;
  //   padding: 0px 30px;
  //   margin-bottom: 16px;

  //   ::placeholder {
  //     /* Set the placeholder text color */
  //     color: #D9D9D9;
  //   }
  // `;

  // const containerStyles = css`
  //   display: flex;
  //   justify-content: flex-end;
  //   margin-top: 50px;
  // `;

  return (
    <div class="w-3/5">
      <form onSubmit={handleSignup} class=" flex flex-col justify-center items-center">
        <div class="w-full">
          <input
            type="text" // Change the input type to 'text' for Email
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
            required
            placeholder='Email'
            class="w-full h-[80px] rounded-xl border-[1px] border-black font-RecoletaAlt text-2xl mb-4 pl-8 placeholder:text-gray-200"
          />
        </div>
        <div className="form-group w-full">
          <input
            type="password" // Change the input type to 'password' for Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={handleNameFocus}
            onBlur={handleNameBlur}
            placeholder='Password'
            class="w-full h-[80px] justify-center rounded-xl border-[1px] border-black font-RecoletaAlt text-2xl mb-4 pl-8 placeholder:text-gray-200"
          />
        </div>
        <div className="form-group w-full">
          <input
            type="password" // Change the input type to 'password' for Password
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
            onFocus={handleNameFocus}
            onBlur={handleNameBlur}
            placeholder='Confirm Password'
            class="w-full h-[80px] justify-center rounded-xl border-[1px] border-black font-RecoletaAlt text-2xl mb-4 pl-8 placeholder:text-gray-200"
          />
        </div>

        <div class="w-full flex justify-end items-center mt-4">
          <Button variant='purple' size='medium'>
            <Link to="/signupDetails">
              Next1
            </Link>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signup1InputName;