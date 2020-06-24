import React, { Component } from 'react'
import Link from 'next/link';
import { withTranslation } from '@/i18n'

class GettingStart extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <section className="services-section ptb-100 gray-light-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="section-heading text-center mb-5">
                                <h2>{this.props.t('gettingStartContent.title', {returnObjects: false})}</h2>
                                <p className="lead">{this.props.t('gettingStartContent.description', {returnObjects: false})} </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            this.props.t('gettingStartContent.items', {returnObjects: true}).map((item, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                <div
                                    className="services-single text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg rounded">
                                    <span className="icon-lg color-default d-block mb-4"><i className={`fa fa-${item.icon}`}></i></span>
                                    <h5>{item.title}</h5>
                                    <p className="mb-0">{item.content}</p>
                                    <Link href="/service-details"><a className="detail-link mt-4">{item.read_more}<span
                                        className="ti-arrow-right"></span></a></Link>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </div>
                <style jsx>{`
                .services-single {
                    min-height: 380px;
                }
                `}</style>
            </section>
        )
    }
}

export default withTranslation('home')(GettingStart)