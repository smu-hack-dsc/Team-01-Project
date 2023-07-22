/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isOption1Selected, setOption1Selected] = useState(true);

  const switchStyles = css`
    display: flex;
    width: 400px;
    height: 65px;
    background-color: #D9D9D9;
    border-radius: 50px;
    cursor: pointer;
    align-items: center;
  `;

  const optionStyles = css`
    flex: 1;
    text-align: center;
    padding: 30px 8px;
    user-select: none;
    font-family: Uncut Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 66.668% */
    letter-spacing: -0.12px;
  `;

  const option1Styles = css`
    background-color: ${isOption1Selected ? '#9663FC' : '#D9D9D9'};
    color: ${isOption1Selected ? '#FFF' : '#000'};
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
  `;

  const option2Styles = css`
    background-color: ${isOption1Selected ? '#D9D9D9' : '#9663FC'};
    color: ${isOption1Selected ? '#000' : '#FFF'};
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
  `;

  const handleToggle = () => {
    setOption1Selected(!isOption1Selected);
  };

  return (
    <div css={switchStyles} onClick={handleToggle}>
      <div css={[optionStyles, option1Styles]}>Volunteer</div>
      <div css={[optionStyles, option2Styles]}>Organisation</div>
    </div>
  );
};

export default ToggleSwitch;