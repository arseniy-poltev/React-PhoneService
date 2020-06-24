import React, { Component } from 'react'
import { withTranslation } from '@/i18n'

class Promo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="promo-block ptb-100 mt--165 z-index position-relative">
                <div className="container">
                    <div className="row">
                        {
                            this.props.t("promoItems", {returnObjects: true}).map((item, index) => (
                                <div className="col-md-4 col-lg-4 d-flex flex-column" key={index}>
                                <div
                                    className="single-promo-block promo-hover-bg-1 hover-image shadow-lg p-5 custom-radius white-bg">
                                    <div className="promo-block-icon mb-3">
                                        <span className={`far fa-${item.icon} icon-md color-primary`}></span>
                                    </div>
                                    <div className="promo-block-content">
                                        <h5>{item.title}</h5>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </div>
                <style jsx>{`
                .single-promo-block {
                    min-height: 310px;
                }
                `}</style>
            </section>

        )
    }
}

export default withTranslation("home")(Promo)