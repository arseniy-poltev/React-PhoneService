import React, { Component } from 'react'
import Link from 'next/link';
import { i18n, withTranslation } from '@/i18n'
import axios from 'axios'
import Popover, { ArrowContainer } from 'react-tiny-popover'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countrySelectPopup: false,
            countryWithLangPopup: false,
            countryCode: "us",
            languageCode: null,
            countrySelect: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function () {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 500);
            });
        }
        this.getGeoInfo();
        this.getLanguage();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.setState({ countrySelectPopup: false })
        this.setState({ countryWithLangPopup: false })
    }

    getGeoInfo = () => {
        const savedCountry = localStorage.getItem("country_code");
        if (savedCountry === undefined || savedCountry === null) {
            axios.get("http://ip-api.com/json").then((response) => {
                let countryCode = response.data.countryCode;
                const countryCodeList = ['us', 'ca', 'mx'];
                if (countryCodeList.includes(countryCode.toLowerCase())) {
                    this.setState({ countryCode: countryCode })
                } else {
                    this.setState({ countryCode: "us" })
                }
            }).catch((error) => {
                this.setState({ countryCode: "us" })
            });
        } else {
            this.setState({ countryCode: savedCountry })
        }
    };

    handleCountryPopupClick = (pState) => {
        if (this.state.countryWithLangPopup) {
            this.setState({ countryWithLangPopup: false });
            this.setState({ countrySelectPopup: false });
        } else {
            this.setState({ countryWithLangPopup: false });
            this.setState({ countrySelectPopup: pState });
        }
    }

    handleCountryWithLangClick = (code) => {
        this.setState({ countryCode: code })
        this.setState({ countrySelectPopup: false });
        this.setState({ countryWithLangPopup: true });
        this.setState({ countrySelect: true })
        localStorage.setItem("country_code", code)
    }

    handleOutsiteLangPop = () => {
        if (!this.state.countrySelect) {
            this.setState({ countryWithLangPopup: false });
        } else {
            this.setState({ countrySelect: false })
        }
    }

    getCountryNameFromCode = () => {
        let name = "";
        if (this.state.countryCode === "us") {
            name = "United State";
        }
        if (this.state.countryCode === "ca") {
            name = "Canada";
        }
        if (this.state.countryCode === "mx") {
            name = "Mexico";
        }
        return name;
    }

    getLangFromCode = () => {
        let name = "";
        if (this.state.languageCode === "en") {
            name = "English";
        }
        if (this.state.languageCode === "es") {
            name = "Española";
        }
        if (this.state.languageCode === "fr") {
            name = "Française";
        }
        return name;
    }

    setLangAndCountry = (lang) => {
        this.setState({ languageCode: lang })
        i18n.changeLanguage(lang);
    }
    getCountryWithLanPopContent = ({ position, targetRect, popoverRect }) => {
        return (
            <ArrowContainer
                position={position}
                targetRect={targetRect}
                popoverRect={popoverRect}
                arrowColor={'blue'}
                arrowSize={10}
                arrowStyle={{ opacity: 0.7 }}
            >
                <ul className="country-list" >
                    <li onClick={e => this.setLangAndCountry("en")}><a className="country-item  country-flag" ><img src={`/img/flags/${this.state.countryCode}.png`} /> {this.getCountryNameFromCode()} (English)</a></li>
                    <li onClick={e => this.setLangAndCountry("es")}><a className="country-item  country-flag" ><img src={`/img/flags/${this.state.countryCode}.png`} /> {this.getCountryNameFromCode()} (Española)</a></li>
                    <li onClick={e => this.setLangAndCountry("fr")}><a className="country-item  country-flag" ><img src={`/img/flags/${this.state.countryCode}.png`} /> {this.getCountryNameFromCode()} (Française)</a></li>
                    <style jsx>{`
                .country-list {
                    background: white;
                }
                .country-selector {
                    cursor: pointer;
                    top: -11px;
                }

                .country-flag img {
                    margin-bottom: -3px;
                }
                

                .country-list li {
                    padding: 5px 10px;
                    cursor: pointer;
                }
                .country-list li:hover {
                    color: #ffffff;
                    background: #2c3e50;
                    transition: all 0.3s ease-in-out 0s;
                }
                `}</style>
                </ul>
            </ArrowContainer>
        )
    }
    getLanguage = () => {
        const lang = i18n.language || window.localStorage.i18nextLng;
        this.setState({ languageCode: lang })
    }

    getCountryPopoverContent = ({ position, targetRect, popoverRect }) => {
        return (
            <ArrowContainer
                position={position}
                targetRect={targetRect}
                popoverRect={popoverRect}
                arrowColor={'blue'}
                arrowSize={10}
                arrowStyle={{ opacity: 0.7 }}
            >
                <ul className="country-list" >
                    <li onClick={e => this.handleCountryWithLangClick("us")}><a className="country-item  country-flag" ><img src="/img/flags/us.png" /> United State</a></li>
                    <li onClick={e => this.handleCountryWithLangClick("ca")}><a className="country-item  country-flag" ><img src="/img/flags/ca.png" /> Canada</a></li>
                    <li onClick={e => this.handleCountryWithLangClick("mx")}><a className="country-item  country-flag" ><img src="/img/flags/mx.png" /> Mexico</a></li>
                    <style jsx>{`
                .country-list {
                    background: white;
                }
                .country-selector {
                    cursor: pointer;
                    top: -11px;
                }

                .country-flag img {
                    margin-bottom: -3px;
                }
                

                .country-list li {
                    padding: 5px 10px;
                    cursor: pointer;
                }
                .country-list li:hover {
                    color: #ffffff;
                    background: #2c3e50;
                    transition: all 0.3s ease-in-out 0s;
                }
                `}</style>
                </ul>
            </ArrowContainer>
        )
    }

    render() {

        return (
            <div>
                <footer className="footer-section">
                    <div className="footer-top gradient-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="row footer-top-wrap">
                                        <div className="col-md-3 col-sm-6">
                                            <div className="footer-nav-wrap text-white">
                                                <h4 className="text-white">{this.props.t('quick_link')}</h4>
                                                <ul className="nav flex-column">
                                                    <li className="nav-item">
                                                        <Link href="/pricing"><a className="nav-link">{this.props.t('pricing')}</a></Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/department-services"><a className="nav-link">{this.props.t('department_services')}</a></Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/case-studies"><a className="nav-link">{this.props.t('our_case_studies')}</a></Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/business-growth"><a className="nav-link">{this.props.t('our_business_growth')}</a></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <div className="footer-nav-wrap text-white">
                                                <h4 className="text-white">{this.props.t('company')}</h4>
                                                <ul className="nav flex-column">
                                                    <li className="nav-item">
                                                        <Link href="/services"><a className="nav-link">{this.props.t('about_our_services')}</a></Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/affiliate-program"><a className="nav-link">{this.props.t('our_affiliates_program')}</a></Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/blog"><a className="nav-link">{this.props.t('view_our_blog')}</a></Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/careers"><a className="nav-link">{this.props.t('check_our_careers')}</a></Link>
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <div className="footer-nav-wrap text-white">
                                                <h4 className="text-white"> {this.props.t('legal')}</h4>
                                                <ul className="nav flex-column">
                                                    <li className="nav-item">
                                                        <Link href="/legal"><a className="nav-link">{this.props.t('legal_information')}</a></Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/privacy-policy"><a className="nav-link">{this.props.t('privacy_policy')}</a></Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/report"><a className="nav-link">{this.props.t('report_Aause')}</a></Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/terms-service"><a className="nav-link">{this.props.t('terms_of_Service')}</a></Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/911-service"><a className="nav-link">{this.props.t('911_service')}</a></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <div className="footer-nav-wrap text-white">
                                                <h4 className="text-white">{this.props.t('customer_resources')}</h4>
                                                <ul className="nav flex-column">
                                                    <li className="nav-item">
                                                        <Link href="/customer-login"><a className="nav-link">{this.props.t('customer_login')}</a></Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/knowledge-base"><a className="nav-link">{this.props.t('knowledge_base')}</a></Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/help"><a className="nav-link">{this.props.t('help_centre')}</a></Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/system-status"><a className="nav-link">{this.props.t('system_status')}</a></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="row footer-top-wrap">
                                        <div className="col-12">
                                            <div className="footer-nav-wrap text-white">
                                                <h4 className="text-white">{this.props.t('get_in_touch')}</h4>
                                                <ul className="get-in-touch-list">
                                                    <li className="d-flex align-items-center py-2">
                                                        <span className="fas fa-map-marker-alt mr-2"></span> 10215 178th Street NW<br />Edmonton, Alberta, Canada
                                                    </li>
                                                    <li className="d-flex align-items-center py-2">
                                                        <span className="fas fa-envelope mr-2"></span> info@tridacom.com
                                                    </li>
                                                    <li className="d-flex align-items-center py-2">
                                                        <span className="fas fa-phone-alt mr-2"></span> (877) 489-0123
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom gray-light-bg py-2">
                        <div className="container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-md-5 col-lg-5">
                                    <p className="copyright-text pb-0 mb-0">{this.props.t('copyrights')} © 2020.
                                    {this.props.t('rights_reserved_by')}
                                        <a href="https://tridacom.com"> Tridacom IT Solutions Inc.</a></p>
                                </div>
                                <div className="col-md-5 col-lg-4 d-none d-md-block d-lg-block">
                                    <div className="social-nav text-right">
                                        <ul className="list-unstyled social-list mb-0">
                                            <li className="list-inline-item tooltip-hover">
                                                <a href="#" className="rounded"><span
                                                    className="ti-facebook"></span></a>
                                                <div className="tooltip-item">Facebook</div>
                                            </li>
                                            <li className="list-inline-item tooltip-hover"><a href="#"
                                                className="rounded"><span
                                                    className="ti-twitter"></span></a>
                                                <div className="tooltip-item">Twitter</div>
                                            </li>
                                            <li className="list-inline-item tooltip-hover"><a href="#"
                                                className="rounded"><span
                                                    className="ti-linkedin"></span></a>
                                                <div className="tooltip-item">Linkedin</div>
                                            </li>
                                            <li className="list-inline-item tooltip-hover"><a href="#"
                                                className="rounded"><span
                                                    className="ti-dribbble"></span></a>
                                                <div className="tooltip-item">Dribbble</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-2 col-lg-3 d-none d-md-block d-lg-block" style={{ position: "relative" }}>
                                    {/* Popup to select lan */}
                                    <Popover
                                        isOpen={this.state.countryWithLangPopup}
                                        position={'top'}
                                        content={this.getCountryWithLanPopContent}
                                        arrowSize={5}
                                        onClickOutside={this.handleOutsiteLangPop}
                                        disableReposition={true}
                                        transitionDuration={0.1}
                                    >
                                        <div className="text-center country-selector" ><a> <img className="img country-flag" src="/img/flags/en.png" /> United States</a> </div>
                                    </Popover>

                                    <Popover
                                        transitionDuration={0.1}
                                        disableReposition={true}
                                        isOpen={this.state.countrySelectPopup}
                                        position={'top'}
                                        content={this.getCountryPopoverContent}
                                        arrowSize={5}
                                        onClickOutside={() => this.handleCountryPopupClick(false)}
                                    >
                                        <div className="text-center country-selector" onClick={() => this.handleCountryPopupClick(!this.state.countrySelectPopup)}>
                                            <a>
                                                <img className="img country-flag" src={`/img/flags/${this.state.countryCode}.png`} />
                                                 {this.getCountryNameFromCode()} ({this.props.t("lang")})
                                            </a>
                                        </div>
                                    </Popover>
                                </div>
                            </div>
                        </div>
                    </div>

                </footer>

                <button className="scroll-top scroll-to-target open" data-target="html">
                    <span className="ti-angle-up"></span>
                </button>
                <style jsx>{`
                .country-selector {
                    cursor: pointer;
                    top: -11px;
                    position: absolute;
                    background: #F6F6F6;
                }

                .country-flag {
                    margin-bottom: -3px;
                    margin-right: 5px;
                }
                `}</style>
            </div>
        )
    }
}



export default withTranslation("footer")(Footer)

