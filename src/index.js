import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_ch from "./translations/ch.json";
import common_en from "./translations/en.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      common: common_en
    },
    ch: {
      common: common_ch
    }
  }
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
  document.getElementById("root")
);
registerServiceWorker();