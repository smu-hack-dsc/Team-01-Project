import React from 'react';
import Briefing from "resources/img/Briefing.png";
import Post from "resources/img/Post.png";
import Team from "resources/img/Team.png";
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
          <img src={Team} alt="Clickable"
            className={css`
            &:hover {
              background-color: #F5F5F7;
            }
          `}
          />
        </a>
        <a href="BriefingWebsite" onClick={this.handleClick}>
          <img src={Briefing} alt="Clickable"
            className={css`
            &:hover {
              background-color: #F5F5F7;
            }
          `}
          />
        </a>
        <a href="PostWebsite" onClick={this.handleClick}>
          <img src={Post} alt="Clickable"
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
