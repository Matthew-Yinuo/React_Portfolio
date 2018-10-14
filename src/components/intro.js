import React from "react";
import { Trans } from "react-i18next";

export default class Intro extends React.PureComponent {
  render() {
    return (
      <section className="profile-section">
        <h1 className="profile-title">
          <Trans i18nKey="intro.title" />
        </h1>
        <p>
          <Trans i18nKey="intro.blurb" />
          <a className="profile-a" href="google.com">
            <Trans i18nKey="intro.link" />
          </a>
          <Trans i18nKey="intro.blurb2" />
        </p>
      </section>
    );
  }
}
