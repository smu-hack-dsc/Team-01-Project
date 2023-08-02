import React, { useState } from "react";
import { css } from "@emotion/css";

const HeaderRow = ({ onChange, isChecked }) => {
  const headerStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 880px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 4px;
  background: #F5F5F7;
  margin-top: 5px;
  padding: 0 20px;
  `;

  const textStyles = css`
  color: #000;
  font-family: DM Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  `;

  return (
    <div className={headerStyles}>
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-indigo-600 rounded-6 transition duration-150 ease-in-out"
        onChange={onChange}
        checked={isChecked}
      />
      <div className={textStyles}>Name</div>
      <div className={textStyles}>Skills/Interests</div>
      <div className={textStyles}>Availability</div>
      <div className={textStyles}>Date Applied</div>
    </div>
  );
};

const ContainerRow = ({ isChecked, onCheckboxChange }) => {
  const containerStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 880px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #F5F5F7;
  background: #FFF;
  margin-top: 0px;
  padding: 0 20px;
  `;

  const textStyles = css`
  color: #000;
  font-family: DM Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  `;

  return (
    <div className={containerStyles}>
      <input
        type="checkbox"
        className="container-checkbox form-checkbox h-5 w-5 text-indigo-600 rounded-6 transition duration-150 ease-in-out"
        onChange={onCheckboxChange}
        checked={isChecked}
      />
      <div className={textStyles}>Name</div>
      <div className={textStyles}>Skills/Interests</div>
      <div className={textStyles}>Availability</div>
      <div className={textStyles}>Date Applied</div>
    </div>
  );
};

const VOSignupRow = () => {
  const [headerCheckboxChecked, setHeaderCheckboxChecked] = useState(false);
  const [containerCheckboxChecked1, setContainerCheckboxChecked1] =
    useState(false);
  const [containerCheckboxChecked2, setContainerCheckboxChecked2] =
    useState(false);

  const handleHeaderCheckboxChange = () => {
    setHeaderCheckboxChecked(!headerCheckboxChecked);
    setContainerCheckboxChecked1(!headerCheckboxChecked);
    setContainerCheckboxChecked2(!headerCheckboxChecked);
  };

  const handleContainerCheckboxChange1 = (event) => {
    setContainerCheckboxChecked1(event.target.checked);
    if (!event.target.checked) {
      setHeaderCheckboxChecked(false);
    } else {
      setHeaderCheckboxChecked(
        containerCheckboxChecked2 || event.target.checked
      );
    }
  };

  const handleContainerCheckboxChange2 = (event) => {
    setContainerCheckboxChecked2(event.target.checked);
    if (!event.target.checked) {
      setHeaderCheckboxChecked(false);
    } else {
      setHeaderCheckboxChecked(
        containerCheckboxChecked1 || event.target.checked
      );
    }
  };

  return (
    <div>
      <HeaderRow
        onChange={handleHeaderCheckboxChange}
        isChecked={
          containerCheckboxChecked1 && containerCheckboxChecked2
        }
      />
      <ContainerRow
        onCheckboxChange={handleContainerCheckboxChange1}
        isChecked={containerCheckboxChecked1}
      />
      <ContainerRow
        onCheckboxChange={handleContainerCheckboxChange2}
        isChecked={containerCheckboxChecked2}
      />
    </div>
  );
};

export default VOSignupRow;