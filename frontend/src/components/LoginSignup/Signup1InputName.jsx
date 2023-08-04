import React, { useState } from 'react';
import { Button } from 'components/Button';
import { useNavigate, Link } from 'react-router-dom';
import api from '../../api';
/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';

const Signup1InputName = ({ isVolunteer }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [isFailPWCheck, setIsFailPWCheck] = useState(false);
  const [hasDuplicate, setHasDuplicate] = useState(false);

  const navigate = useNavigate();
  const role = isVolunteer ? 'user' : 'volunteerOrg';

  const handleSignup = async (e) => {
    e.preventDefault();
    // Perform signup logic here (e.g., API call to register the user)
    try {
      //check if the password is valid
      if (passwordCheck !== password) {
        setIsFailPWCheck(true);
      } else {
        setIsFailPWCheck(false);
      }

      if (!isFailPWCheck) {
        //check if the email has been used
        await api.post('/user/register', {
          email: email,
          name: name,
          password: password,
          role: role
        });
        const response = await api.post('/user/login', {
          email:email,
          password:password
        });
        const { token } = response.data;
        localStorage.setItem('token', token);
        //navigate to signupDetails
        navigate('/signupDetails', { state: { role } });
      } else {
        setHasDuplicate(true);
      }
    } catch (error) {
      if (error.response?.status === 500) {
        setHasDuplicate(true);
      }
      console.log(error);
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
            class="w-full rounded-xl border-[1px] border-black font-DMSans text-xl mb-4 py-4 px-5 placeholder:text-gray-200"
          />
        </div>
        <div class="w-full">
          <input
            type="text" // Change the input type to 'text' for Email
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={handleNameFocus}
            onBlur={handleNameBlur}
            required
            placeholder='Name'
            class="w-full rounded-xl border-[1px] border-black font-DMSans text-xl mb-4 py-4 px-5 placeholder:text-gray-200"
          />
        </div>
        <div className="form-group w-full">
          <input
            type="password" // Change the input type to 'password' for Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={handleNameFocus}
            onBlur={handleNameBlur}
            required
            placeholder='Password'
            class="w-full rounded-xl border-[1px] border-black font-DMSans text-xl mb-4 py-4 px-5 placeholder:text-gray-200"
          />
        </div>
        <div class="form-group w-full">
          <input
            type="password" // Change the input type to 'password' for Password
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
            onFocus={handleNameFocus}
            onBlur={handleNameBlur}
            required
            placeholder='Confirm Password'
            class="w-full rounded-xl border-[1px] border-black font-DMSans text-xl mb-4 py-4 px-5 placeholder:text-gray-200"
          />
        </div>
        {isFailPWCheck ?
          <div>
            The password is not consistent!
          </div> : null}
        {hasDuplicate ?
          <div>
            The email used has created an account already!
          </div> : null}

          <div class="w-full flex justify-center my-4">
            <button class="flex flex-col px-4 py-2 w-full justify-center items-center flex-shrink-0 bg-purple-500 hover:bg-purple-400 text-white rounded-full px-8 text-base font-semibold"
                    onClick={() => {
                      if (email && name && password && passwordCheck && !isFailPWCheck && !hasDuplicate) {
                        navigate('/signupDetails', { state: { role } });
                      }
                    }}>
              NEXT
            </button>
          </div>

          <div>
            Already have an account?{' '}
            <Link to="/login" class="font-DMSans font-bold text-purple_800CDB">
                Login
            </Link>
          </div>
      </form>
    </div>
  );
};

export default Signup1InputName;