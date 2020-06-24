import React, { Component } from 'react'
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from '../_helpers/seo.config';
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import PropTypes from 'prop-types'

import { i18n, Link, withTranslation } from '../../i18n'

config.autoAddCss = false;
library.add(fas, fal, fab)

class Layout extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <React.Fragment>
                 <main>
            <div>
                <Head>
                    <title>Tridacom IT Solutions - Managed IT and Voice Services</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="description" content="Tridacom IT Solutions - Managed IT and Voice Services" />
                    <link rel="icon" type="image/png" href="/img/favicon.png" sizes="16x16" />
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700%7COpen+Sans:400,600&amp;display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/css/magnific-popup.css" />
                    <link rel="stylesheet" href="/css/themify-icons.css" />
                    <link rel="stylesheet" href="/css/all.min.css" />
                    <link rel="stylesheet" href="/css/animate.min.css" />
                    <link rel="stylesheet" href="/css/jquery.mb.YTPlayer.min.css" />
                    <link rel="stylesheet" href="/css/owl.carousel.min.css" />
                    <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
                    <link rel="stylesheet" href="/css/style.css" />
                    <link rel="stylesheet" href="/css/responsive.css" />
                </Head>
                <DefaultSeo {...SEO} />
                <Navbar />
                {this.props.children}
                <script src="/js/jquery-3.4.1.min.js"></script>
                <script src="/js/popper.min.js"></script>
                <script src="/js/bootstrap.min.js"></script>
                <script src="/js/jquery.magnific-popup.min.js"></script>
                <script src="/js/jquery.easing.min.js"></script>
                <script src="/js/jquery.mb.YTPlayer.min.js"></script>
                <script src="/js/mixitup.min.js"></script>
                <script src="/js/wow.min.js"></script>
                <script src="/js/owl.carousel.min.js"></script>
                <script src="/js/jquery.countdown.min.js"></script>
                <Footer />
                <script async src='https://r.wdfl.co/rw.js' data-rewardful='552071'></script>
            </div>
            </main>
            </React.Fragment>
        );
    }
}

Layout.getInitialProps = async () => ({
    namespacesRequired: ['common', 'footer'],
})

Layout.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('footer')(Layout)
