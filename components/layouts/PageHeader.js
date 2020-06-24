import React, { Component, Fragment } from 'react'
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { i18n, withTranslation } from '../../i18n'
class PageHeader extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <NextSeo
                    title={this.props.title + ` | Tridacom IT Solutions - Managed IT and Voice Services`}
                    description={this.props.subtitle}
                    canonical="https://threesisters.tridacom.com"
                />
                <section className="hero-section ptb-100 gradient-overlay">
                    <div className="container">
                      
                        <div className="row justify-content-center">
                            <div className="col-md-12 col-lg-12">
                                <div className="page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0">
                                    <h1 className="text-white mb-0">{this.props.title}</h1>
                                    {this.props.subtitle && (<h3 className="text-white mb-0">{this.props.subtitle}</h3>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <style jsx>{`
                    .hero-section {
                            background: url('/img/homePage_1.jpg')no-repeat center center / cover
                    }
                `}
                </style>
            </div>

        )
    }
}


// PageHeader.getInitialProps = async () => ({
//     namespacesRequired: ['common'],
// })


export default withTranslation("more-examples")(PageHeader)
