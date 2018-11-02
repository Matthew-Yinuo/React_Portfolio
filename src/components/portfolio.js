import React from "react";
import { Trans } from "react-i18next";

export default class Portfolio extends React.PureComponent {
  render() {
    return (
      <header className="app-portfolio-container">
        <div className="app-portfolio">
          <section className="portfolio-resume">
            <div className="ribbon ribbon-top-left">
              <span onClick={this.props.click}>
                <Trans i18nKey="welcome.language" />
              </span>
            </div>

            <button className="resume-download btn">
              <i className="fas fa-download" />
              <Trans i18nKey="welcome.resume" />
            </button>
          </section>
          <section className="portfolio-title-container">
            <div className="portfolio-title">
              <h1 className="portfolio-title-top">
                <span className="portfolio-title-upper">
                  <Trans i18nKey="welcome.title-upper" />
                </span>
                <span className="portfolio-title-lower">
                  <Trans i18nKey="welcome.title-lower" />
                </span>
              </h1>
            </div>
          </section>
          <nav className="portfolio-contact">
            <ul className="portfolio-contact-list">
              <li>
                <a
                  href="https://goo.gl/maps/6uY34GshTM22"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-map-marker-alt" />
                  <span className="i-label">
                    <Trans i18nKey="welcome.location" />
                  </span>
                </a>
              </li>
              <li>
                <a href="google.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in" />
                  <span className="i-label">/in/ahyeah</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/Matthew-Yinuo" target="_blank">
                  <i className="fab fa-github" />
                  <span className="i-label">
                    <Trans i18nKey="welcome.github" />
                  </span>
                </a>
              </li>
              <li>
                <a href="google.com">
                  <i className="fas fa-phone" />
                  <span className="i-label">
                    <Trans i18nKey="welcome.phone" />
                  </span>
                </a>
              </li>
              <li>
                <a href="google.com">
                  <i className="fas fa-envelope" />
                  <span className="i-label">matthewhoth@gmail.com</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
