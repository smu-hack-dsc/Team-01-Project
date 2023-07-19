import React from 'react';
import { css } from '@emotion/css';

class ClickableImage extends React.Component {
  handleClick = () => {
    // Handle click event here
    console.log('Image clicked!');
  };

  render() {
    return (
      <div>
        <a href="TeamWebsite" onClick={this.handleClick}>
          <img src={require("../resources/img/Team.png")} alt="Clickable"
            className={css`
            &:hover {
              background-color: #F5F5F7;
            }
          `}
          />
        </a>
        <a href="BriefingWebsite" onClick={this.handleClick}>
          <img src={require("../resources/img/Briefing.png")} alt="Clickable"
            className={css`
            &:hover {
              background-color: #F5F5F7;
            }
          `}
          />
        </a>
        <a href="PostWebsite" onClick={this.handleClick}>
          <img src={require("../resources/img/Post.png")} alt="Clickable"
            className={css`
              &:hover {
                background-color: #F5F5F7;
              }
            `}
          />
        </a>
      </div>
    );
  }
}

export { ClickableImage };
