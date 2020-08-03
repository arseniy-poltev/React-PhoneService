import React from 'react'
import App, { Container } from 'next/app'

import { config } from '@fortawesome/fontawesome-svg-core' 
import '@fortawesome/fontawesome-svg-core/styles.css' 
config.autoAddCss = false 
import { appWithTranslation } from '../i18n'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
        <Component {...pageProps} />
    )
  }
}

export default appWithTranslation(MyApp)