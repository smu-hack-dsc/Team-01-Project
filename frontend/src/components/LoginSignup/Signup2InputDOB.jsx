import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components/Button';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Signup2InputDOB = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [gender, setGender] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Perform signup logic here (e.g., API call to register the user)
    const dateOfBirth = `${year}-${month}-${day}`;
    console.log('Date of Birth:', dateOfBirth);
  };

  const handleGenderFocus = (e) => {
    if (e.target.placeholder === 'Gender') {
      e.target.placeholder = '';
    }
  };

  const handleGenderBlur = (e) => {
    if (e.target.value === '') {
      e.target.placeholder = 'Gender';
    }
  };

  const dayStyles = css`
    width: 85px;
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

    ::placeholder {
      color: #D9D9D9;
    }
  `;

  const dropdownStyles = css`
    width: 225px;
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
  `;

  const genderStyles = css`
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

  const overallStyles = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
  `;

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const years = Array.from({ length: 100 }, (_, index) => 2023 - index); // You can adjust the year range as needed

  return (
    <div>
      <form onSubmit={handleSignup}>
        <div css={overallStyles}>
          <div>
            <label htmlFor="day"></label>
            <input
              type="number"
              id="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              min="1"
              max="31"
              required
              placeholder='Day'
              css={dayStyles}
            />
          </div>
          <div>
            <label htmlFor="month"></label>
            <select
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              required
              css={dropdownStyles}
              style={{
                color: month ? 'black' : '#D9D9D9',
              }}
            >
              <option value="">Month</option>
              {months.map((month, index) => (
                <option key={index} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="year"></label>
            <select
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
              css={dropdownStyles}
              style={{
                color: year ? 'black' : '#D9D9D9',
              }}
            >
              <option value="">Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        <input
          type="text" // Change the input type to 'text' for First name
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          onFocus={handleGenderFocus}
          onBlur={handleGenderBlur}
          required
          placeholder='Gender'
          css={genderStyles}
        />

        <div css={containerStyles}>
          <Button variant='purple' size='small'>
            <Link to="/signup_personalise">
              Next
            </Link>
          </Button>
        </div>
      </form>
    </div>

  );
};

export default Signup2InputDOB;
