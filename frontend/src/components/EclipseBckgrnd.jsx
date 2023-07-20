import { css } from '@emotion/css';
import { Button } from 'components/Button';

const EclipseBckgrnd = () => (
  <div
    className={css`
    display: flex;
    `}
  >
    <div
      className={css`
      width: 395px;
      height: 232.247px;
      flex-direction: column;
      justify-content: center;
      margin-left: 129px;
      margin-top: 88px;
      flex-shrink: 0;
      color: #000;
      font-family: Recoleta Alt;
      font-size: 72px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      `}
    >
      Explore these Causes
    </div>
    <img src={require("../resources/img/CurlyArrow.png")} alt="CurlyArrow"
      className={css`
      position: absolute;
      margin-top: 386px;
      margin-left: 256px;
      `}
    />

    <img src={require("../resources/img/EclipseTopLeft.png")} alt="EclipseTopLeft"
      className={css`
      position: absolute;
      left: 606px;
      `}
    />

    <div
      className={css`
        position: absolute;
        top: 2355px;
        left: 606px;
        display: flex;
        flex-direction: column;
        gap: 20px;
      `}
    >
      <Button variant="white" size="small">
        CAUSE 1
      </Button>
      <Button variant="white" size="small">
        CAUSE 2
      </Button>
      <Button variant="white" size="small">
        CAUSE 3
      </Button>
      <Button variant="white" size="small">
        CAUSE 4
      </Button>
    </div>
    <img src={require("../resources/img/EclipseTopRight.png")} alt="EclipseTopRight"
      className={css`
      position: absolute;
      margin-left: 1021px;
      `}
    />
    <div
      className={css`
        position: absolute;
        top: 2235px;
        left: 1014px;
        display: flex;
        flex-direction: column;
        gap: 20px;
      `}
    >
      <Button variant="white" size="small">
        CAUSE 5
      </Button>
      <Button variant="white" size="small">
        CAUSE 6
      </Button>
      <Button variant="white" size="small">
        CAUSE 7
      </Button>
      <Button variant="white" size="small">
        DISCOVER MORE
      </Button>
    </div>

    <img src={require("../resources/img/EclipseBottomLeft.png")} alt="EclipseBottomLeft"
      className={css`
      position: absolute;
      margin-top: 802.37px;
      margin-left: 606px;
      `}
    />
    <img src={require("../resources/img/EclipseBottomRight.png")} alt="EclipseBottomRight"
      className={css`
      position: absolute;
      margin-top: 698.37px;
      margin-left: 1014px;
      `}
    />

  </div>
)

export { EclipseBckgrnd };