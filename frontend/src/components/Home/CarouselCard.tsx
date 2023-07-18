import { css } from '@emotion/css';
import { Button } from 'components/Button';
import Project from 'resources/img/Project.png';

const CarouselCard = () => (
  <div
    className={css`
      display: flex;
      flex-direction: column;
      width: 424px;
      height: 459.965px;
      flex-shrink: 0;
      border-radius: 30px;
      background: #F5F5F7;
    `}
  >
    <img src={Project} alt="Project"
      className={css`
        width: 100%;
        height: 187px;
        overflow: hidden;
      `}
    />
    <div
      className={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      <div
        className={css`
        display: flex;
        width: 247px;
        height: 59.682px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
        color: #000;
        font-family: DM Sans;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-left: 16px;
      `}
      >
        Project Name
      </div>
      <div
        className={css`
        display: flex;
        width: 35.2px;
        height: 39.514px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
        color: #000;
        text-align: center;
        font-family: DM Sans;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-right: 32px;
        margin-top: 12px;
      `}
      >
        Org Logo
      </div>
    </div>
    <p
      className={css`
        height: 82px;
        color: #000;
        font-family: DM Sans;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-left: 16px;
        margin-top: 15px;
      `}
    >
      Project description
    </p>
    <div
      className={css`
        margin-left: 11px;
        margin-top: auto;
        margin-bottom: 14px;
      `}
    >
      <Button
        variant="green" size="small"
      >
        LEARN MORE
      </Button>
    </div>
  </div>
)

export { CarouselCard };
