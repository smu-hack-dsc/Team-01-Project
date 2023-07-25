import React from 'react';

class ClickableImage extends React.Component {
  handleClick = () => {
    // Handle click event here
    console.log('Image clicked!');
  };

  render() {
    return (
      <div className="flex flex-row justify-center">
        <div className="p-4">
          <a href="TeamWebsite" onClick={this.handleClick}>
            <img
              src={require("../resources/img/Team.png")}
              alt="Clickable"
              className="hover:bg-gray-200"
            />
          </a>
        </div>
        <div className="p-4">
          <a href="BriefingWebsite" onClick={this.handleClick}>
            <img
              src={require("../resources/img/Briefing.png")}
              alt="Clickable"
              className="hover:bg-gray-200"
            />
          </a>
        </div>
        <div className="p-4">
          <a href="PostWebsite" onClick={this.handleClick}>
            <img
              src={require("../resources/img/Post.png")}
              alt="Clickable"
              className="hover:bg-gray-200"
            />
          </a>
        </div>
      </div>
    );
  }
}

export { ClickableImage };
