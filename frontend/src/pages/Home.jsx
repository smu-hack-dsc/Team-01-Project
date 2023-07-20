import { css } from '@emotion/css';
import { Button } from 'components/Button';
import { ClickableImage } from 'components/ClickableImage';
import { Carousel } from 'components/Carousel';
import { EclipseBckgrnd } from 'components/EclipseBckgrnd';
import { TranslucentPurple } from 'components/TranslucentPurple';

function Home() {
  return (
    <div>
      <div
        className={css`
        position: relative;
        width: 1514px;
        height: 909px;
        flex-shrink: 0;
      `}>
        <img
          src={require("../resources/img/Billboard.png")}
          alt="Billboard"
          className={css`
          width: 100%;
          height: 100%;
        `}
        />
        <div
          className={css`
          position: absolute;
          top: 198px;
          left: 105px;
          width: 738px;
          height: 242px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #FFF;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          font-family: Recoleta Alt;
          font-size: 96px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        `}
        >
          Giving hope through service.
        </div>
        <div
          className={css`
          position: absolute;
          top: 470px;
          left: 100px;
        `}
        >
          <Button
            variant="green"
            size="large"
          >
            BROWSE OPPORTUNITIES
          </Button>
        </div>
      </div>
      <div //purple background
        className={css`
        width: 1514px;
        height: 427px;
        flex-shrink: 0;
        background: #9663FC;
      `}
      ></div>
      <div
        className={css`
        position: absolute;
        top: 745px;
        left: 106px;
        width: 1300px;
        height: 486px;
        flex-shrink: 0;
        border-radius: 24px;
        background: #FFF;
        `}
      >
        <div
          className={css`
          display: flex;
          position: absolute;
          top: 40px;
          left: 281px;
          width: 738px;
          height: 68px;
          flex-direction: column;
          justify-content: center;
          flex-shrink: 0;
          color: #000;
          text-align: center;
          font-family: Recoleta Alt;
          font-size: 48px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        `}
        >
          All-in-one Volunteering
        </div>
        <ClickableImage />
      </div>
      <div
        className={css`
        display: flex;
        width: 1514px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 67px;
        flex-shrink: 0;
        color: #4000C1;
        text-align: center;
        font-family: Recoleta Alt;
        font-size: 72px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        `}
      >
        Trending Projects
      </div>
      <div
        className={css`
        margin-top: 67px;
        `}
      >
        <Carousel />
      </div>
      <div
        className={css`
        margin-top: 85px;
        height: 850px;
        flex-shrink: 0;
        background: #FFDA7A;
        `}
      >
        <EclipseBckgrnd />
      </div>
      <TranslucentPurple />

    </div>
  )
}

export default Home;
