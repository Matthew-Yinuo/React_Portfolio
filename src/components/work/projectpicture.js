import React from "react";

export default class ProjectPicture extends React.PureComponent {
  render() {
    return (
      <section className="rightside">
        <div
          className={`box image animated  ${
            this.props.counter === 1
              ? this.props.rightActive === true
                ? "fadeInUp"
                : "fadeInDown"
              : this.props.counter === 2
                ? this.props.rightActive === true
                  ? "goodbye"
                  : "fadeOutDown"
                : this.props.counter === 5
                  ? this.props.rightActive === true
                    ? "fadeOutUp"
                    : "goodbye"
                  : "goodbye"
          }`}
          style={{}}
        >
          <img src={require("../../images/lyrical.png")} />
        </div>

        <div
          className={`box image animated  ${
            this.props.counter === 2
              ? this.props.rightActive === true
                ? "fadeInUp"
                : "fadeInDown"
              : this.props.counter === 3
                ? this.props.rightActive === true
                  ? "goodbye"
                  : "fadeOutDown"
                : this.props.counter === 1
                  ? this.props.rightActive === true
                    ? "fadeOutUp"
                    : "goodbye"
                  : "goodbye"
          }`}
          style={{}}
        >
          <img src={require("../../images/crypto.png")} />
        </div>

        <div
          className={`box image animated  ${
            this.props.counter === 3
              ? this.props.rightActive === true
                ? "fadeInUp"
                : "fadeInDown"
              : this.props.counter === 4
                ? this.props.rightActive === true
                  ? "goodbye"
                  : "fadeOutDown"
                : this.props.counter === 2
                  ? this.props.rightActive === true
                    ? "fadeOutUp"
                    : "goodbye"
                  : "goodbye"
          }`}
          style={{}}
        >
          <img src={require("../../images/weather.png")} />
        </div>

        <div
          className={`box image animated  ${
            this.props.counter === 4
              ? this.props.rightActive === true
                ? "fadeInUp"
                : "fadeInDown"
              : this.props.counter === 5
                ? this.props.rightActive === true
                  ? "goodbye"
                  : "fadeOutDown"
                : this.props.counter === 3
                  ? this.props.rightActive === true
                    ? "fadeOutUp"
                    : "goodbye"
                  : "goodbye"
          }`}
          style={{}}
        >
          <img src={require("../../images/login.png")} />
        </div>

        <div
          className={`box image animated  ${
            this.props.counter === 5
              ? this.props.rightActive === true
                ? "fadeInUp"
                : "fadeInDown"
              : this.props.counter === 1
                ? this.props.rightActive === true
                  ? "goodbye"
                  : "fadeOutDown"
                : this.props.counter === 4
                  ? this.props.rightActive === true
                    ? "fadeOutUp"
                    : "goodbye"
                  : "goodbye"
          }`}
          style={{}}
        >
          <img src={require("../../images/youtube.png")} />
        </div>
      </section>
    );
  }
}
