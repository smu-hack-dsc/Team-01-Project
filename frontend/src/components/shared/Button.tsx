import { css } from "@emotion/css";
import React, { ReactElement } from "react";

const Button = ({
  children,
  variant = "green",
  size = "small",
  icon,
}: {
  children: string;
  variant?: "green" | "yellow";
  size?: "large" | "small";
  icon?: ReactElement;
} & React.ButtonHTMLAttributes<{}>) => {
  const green = (
    <button
      className={css`
        width: ${size === "large" ? "250px" : "150px"};
        height: ${size === "large" ? "32px" : "32px"};
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
          font-family: DM Sans;
          font-size: ${size === "large" ? "16px" : "14px"};
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
  const yellow = (
    <button
      className={css`
        width: ${size === "large" ? "300px" : "150px"};
        height: ${size === "large" ? "32px" : "32px"};
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
          font-family: DM Sans;
          font-size: ${size === "large" ? "16px" : "14px"};
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
  }
};

export {Button};
