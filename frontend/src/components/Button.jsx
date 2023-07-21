import { css } from "@emotion/css";
// import React, { ReactElement } from "react";

const Button = ({
  children,
  variant = "green",
  size = "small",
  icon,
}) => {
  const green = (
    <button
      className={css`
        width: ${size === "large" ? "443px" : "150px"};
        height: ${size === "large" ? "78px" : "32px"};
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #C8F3D9;
        padding: 0;
        border-radius: 40px;
        border: none;
        font-family: inherit;
        white-space: nowrap;
      `}
    >
      {icon}
      <div
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex-shrink: 0;
          color: #000;
          text-align: center;
          font-family: DMSans;
          font-size: ${size === "large" ? "30px" : "14px"};
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          &:hover {
            color: #FFF;
          }
        `}
      >
        {children}
      </div>
    </button>
  );
  const white =(
    <button
      className={css`
      width: 393px;
      height: 131.917px;
      flex-shrink: 0;
      border-radius: 50px;
      background: #FFF;
      border: none;
      &:hover {
        background: #CCC;
      }
      `}
    >
      {icon}
      <div
        className={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
        color: #000;
        text-align: center;
        font-family: DMSans;
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        `}
      >
        {children}
      </div>
    </button>
  );
  const yellow = (
    <button
      className={css`
        width: ${size === "large" ? "358px" : "275px"};
        height: ${size === "large" ? "75px" : "60px"};
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #FFDA7A;
        padding: 0;
        border-radius: 40px;
        border: none;
        font-family: inherit;
        white-space: nowrap;
      `}
    >
      {icon}
      <div
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex-shrink: 0;
          color: #000;
          text-align: center;
          font-family: DMSans;
          font-size: ${size === "large" ? "30px" : "20px"};
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          &:hover {
            color: #FFF;
          }
        `}
      >
        {children}
      </div>
    </button>
  );
  switch (variant) {
    case "green":
      return green;
    case "yellow":
      return yellow;
    case "white":
      return white;
    default:
      return white;
  }
};

export {Button};
