import React from "react";

export default class RightButton extends React.PureComponent {
  render() {
    return (
      <div
        onClick={this.props.click}
        className={`ad pictureR${
          this.props.counter !== 1 ? this.props.counter - 1 : 5
        }`}
      />
    );
  }
}
