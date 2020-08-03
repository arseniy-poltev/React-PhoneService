import React, { Component } from 'react'
import Link from 'next/link';
import { i18n, withTranslation } from '@/i18n'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        $(window).on('scroll', function () {
            // checks if window is scrolled more than 500px, adds/removes solid class
            if ($(this).scrollTop() > 60) {
                $('.navbar').addClass('affix');
                $('.scroll-to-target').addClass('open');
            } else {
                $('.navbar').removeClass('affix');
                $('.scroll-to-target').removeClass('open');
            }
        });
    }

    getLanguage = () => i18n.language || window.localStorage.i18nextLng

    switchLang = (lang) => {
        console.log("DDDD", lang)
        // i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')
    }
    render() {
        return (
            <header className="header">
                <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src="/img/logo-white.png" alt="logo" className="img-fluid" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="ti-menu"></span>
                        </button>
                        <div className="collapse navbar-collapse h-auto" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto menu mr-5">
                                <li><Link href="/"><a>{this.props.t('home')}</a></Link></li>
                                {/* <li><Link href="/about"><a>About Us</a></Link></li> */}
                                <li><a href="#" className="dropdown-toggle">{this.props.t('phone_solutions')}</a>
                                    <ul className="sub-menu">
                                        <li><Link href="/phone-solutions/number-parking"><a>{this.props.t('number_parking')}</a></Link></li>
                                        <li><Link href="/phone-solutions/call-forwarding"><a>{this.props.t('call_forwarding')}</a></Link></li>
                                        <li><Link href="/phone-solutions/virtual-number"><a>{this.props.t('toll_free_and_virtual_phone_numbers')}</a></Link></li>
                                        <li><Link href="/phone-solutions/fax-forward"><a>{this.props.t('fax_forwarding')}</a></Link></li>
                                        <li><Link href="/products"><a>{this.props.t('products')}</a></Link></li>
                                    </ul>
                                </li>
                                <li><Link href="/services"><a>{this.props.t('it_services')}</a></Link></li>
                                <li><Link href="/contact"><a>{this.props.t('contact_us')}</a></Link></li>
                            </ul>

                            <ul className="navbar-nav menu navbar-right navbar-language">
                                <li><a href="#" className="dropdown-toggle">{this.props.t('local').toUpperCase()} <img src={`/img/flags/${this.props.t('local')}.png`} className="flag-img"/></a>
                                    <ul className="sub-menu">
                                        <li><a className="lang-item" onClick={() => i18n.changeLanguage('en')}><img src="/img/flags/en.png" /> English</a></li>
                                        <li><a className="lang-item" onClick={() => i18n.changeLanguage('es')}><img src="/img/flags/es.png" /> Español</a></li>
                                        <li><a className="lang-item" onClick={() => i18n.changeLanguage('fr')}><img src="/img/flags/fr.png" /> Français</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <style jsx>{`
                    .navbar-language a.lang-item {
                        cursor: pointer;
                    }
                    .navbar-language a.lang-item:hover {
                        color: white;
                    }
                    .navbar-language ul {
                        // width: 110px;
                    }
                    
                    .navbar-language a.lang-item img, .flag-img {
                        width: 21px;
                        margin-bottom: -3px;
                    }
                `}
                </style>
            </header>
        )
    }
}

export default withTranslation("navbar")(Navbar)
