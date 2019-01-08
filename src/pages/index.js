import React from 'react'
import IndexWrapper from '../indexWrapper'
import { Helmet } from 'react-helmet'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import common_ch from '../translations/ch.json'
import common_en from '../translations/en.json'
import logo from '../images/logoxx.ico'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      common: common_en,
    },
    ch: {
      common: common_ch,
    },
  },
})

const index = () => (
  <I18nextProvider i18n={i18next}>
    <Helmet>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
        charSet="utf-8"
      />
      <noscript>Your browser does not support JavaScript!</noscript>
      <title>Matthew Hoth</title>
      <link rel="prerender" href="https://matthewhoth.netlify.com/projects/" />
      <link rel="icon" type="image/x-icon" href={logo} />
    </Helmet>

    <IndexWrapper />
  </I18nextProvider>
)

export default index
