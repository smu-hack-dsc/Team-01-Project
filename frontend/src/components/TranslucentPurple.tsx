import { css } from '@emotion/css';
// import FooterImg from 'resources/img/FooterImg.png';
import { Button } from 'components/Button';
const TranslucentPurple = () => (
  <div
    className={css`
    display: flex;
    justify-content: center;
    align-items: center;
    `}>
    <div
      className={css`
        position: relative;
        width: 1514px
        height: 730px;
        flex-shrink: 0;
      `}
    >
      <div
        className={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(150, 99, 252, 0.55);
          z-index: 2;
        `}
      ></div>
      <img
        src={require("../resources/img/FooterImg.png")}
        alt="FooterImg"
        className={css`
          width: 1514px;
          position: relative;
          z-index: 1;
        `}
      />

    </div>
    <div
      className={css`
      position: absolute;
      align-items: center;
      display: flex;
      width: 1020px;
      height: 62.434px;
      flex-direction: column;
      justify-content: center;
      flex-shrink: 0;
      color: #FFF;
      text-align: center;
      `}
    >
      <div
        className={css`
      font-family: Recoleta Alt;
      font-size: 64px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      z-index: 3;
      `}
      >
        You can make a difference today!
      </div>
      <div
        className={css`
      color: #FFF;
      text-align: center;
      font-family: DM Sans;
      font-size: 36px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      z-index: 3;
      `}
      >
        There’s a lot more we can do, together.
      </div>
      <div
        className={css`
        z-index: 3;
        margin-top: 49px;
        `}
      >
        <Button variant="yellow" size="large">
          SIGN UP NOW
        </Button>
      </div>
    </div>

  </div>
);

export { TranslucentPurple };