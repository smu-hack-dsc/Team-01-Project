import React, { useState } from 'react';
import { Button } from 'components/Button';
import { useNavigate, Link } from 'react-router-dom';
import api from '../../api';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';

const Signup1InputName = ({ isVolunteer }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [msg, setMsg] = useState('');

  const navigate = useNavigate();
  const role = isVolunteer ? 'volunteerOrg' : 'user';

  const isValid = (email, password, passwordCheck) => {
    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) return false;
    if (password !== passwordCheck) return false;
    if (password.length < 8) return false;
    return true;
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    // Perform signup logic here (e.g., API call to register the user)
    try {
      // setting the error msg
      if (!isValid(email, password, passwordCheck)) {
        if (password.length < 8) {
          setMsg("Password should be at least 8 characters");
        } else if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
          setMsg("Email is invalid");
        } else if (password !== passwordCheck) {
          setMsg("Passwords are not consistent!")
        }
        return;
      }

      //since all the inputs are valid,
      if (isVolunteer) {
        await api.post('user/register', {
          email: email,
          name: name,
          password: password,
          dateOfBirth: startDate,
          role: role
        });
      } else {
        await api.post('user/register', {
          email: email,
          name: name,
          password: password,
          role: role
        });

      }

      const response = await api.post('/user/login', {
        email: email,
        password: password
      });
      const { token } = response.data;
      localStorage.setItem('token', token);
      navigate('/signup_personalise', {state: {role}})

    } catch (error) {
      if (error.response?.status === 500) {
        setMsg('This email has an account already!');
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

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const [startDate, setStartDate] = useState(new Date());
  const handleDateChange = (date) => {
    // setSelectedDate(date);
    setShowDatePicker(true);
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
        <div class="flex justify-between w-full">
          <input
            type="text" // Change the input type to 'text' for Email
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={handleNameFocus}
            onBlur={handleNameBlur}
            required
            placeholder='Name'
            class="w-[68%] rounded-xl border-[1px] border-black font-DMSans text-xl mb-4 py-4 px-5 placeholder:text-gray-200"
          />

          {/* FIX THIS LATER  (edited such that only a volunteer has the dob button) */}
          {!isVolunteer ?
            <div className="w-[30%]">
              <DatePicker
                className="w-[100%] rounded-xl border-[1px] border-black font-DMSans text-lg mb-4 py-4 px-5 placeholder:text-gray-200"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div> : null
          }
          {/* <button
            onClick={() => setShowDatePicker(true)}
            className="self-end w-[30%] rounded-xl border-[1px] border-black font-DMSans text-xl mb-4 py-4 px-5 placeholder:text-gray-200"
          >
            {selectedDate ? selectedDate.toDateString() : 'Birthday'}
          </button> */}

          {/* {showDatePicker && (
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MM/dd/yyyy"
              isClearable
            />
          )} */}
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

        <div class="w-full flex flex-col justify-center my-4">
          <div class="flex flex-col px-4 py-2 w-full justify-center items-center text-base font-semibold">
            {msg}
          </div>
          <button class="flex flex-col px-4 py-2 w-full justify-center items-center flex-shrink-0 bg-purple-500 hover:bg-purple-400 text-white rounded-full px-8 text-base font-semibold">
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