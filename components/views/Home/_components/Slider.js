import React, { Component } from 'react'
import Link from 'next/link';
import { withTranslation } from '@/i18n'

class Slider extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        $('.hero-content-slider').owlCarousel({
            loop: true,
            autoplay: true,
            dots: false,
            autoplayHoverPause: true,
            items: 1,
            smartSpeed: 1000,
            animateOut: "slideOutUp",
            animateIn: "slideInDown",
        });
    }

    render() {
        return (
            <div>
                <section className="hero-equal-height pt-165 pb-100 gradient-overly-right-color">
                    <div className="container">
                        <div className="row">
                            <div className="owl-carousel owl-theme hero-content-slider custom-dot custom-dot-2">
                                {
                                    this.props.t("carouselItems", {returnObjects: true}).map((item, index) => (
                                        <div className="item" key={index}>
                                                <div className="col-md-8 col-lg-7 col-12">
                                                    <div className="hero-content-wrap text-white">
                                                        <span className="text-uppercase">{item.titleTop}</span>
                                                        <h1 className="text-white">{item.mainTitle}</h1>
                                                        <p className="lead">{item.content} </p>
                                                        <ul className="list-unstyled tech-feature-list text-white">
                                                            {
                                                                item.list.map((subItem, sindex) => {
                                                                    return (
                                                                        <li className="py-1" key={sindex}>
                                                                            <span className="ti-control-forward mr-2"></span><strong>{subItem.title} </strong>{subItem.content}
                                                                        </li>
                                                                    )
                                                                })
                                                            }

                                                        </ul>
                                                        <div className="action-btns mt-4">
                                                            <a href="#" className="btn secondary-solid-btn mr-3">{this.props.t('btn_check_prices', {returnObjects: false})}</a>
                                                            <a href="#" className="btn outline-white-btn">{this.props.t('btn_learn_more', {returnObjects: false})}</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </section>

                <style jsx global>{`
                    .hero-equal-height {
                            background: url('/img/homePage_1.jpg')no-repeat center center / cover;
                    }
                `}
                </style>

            </div>
        )
    }
}

export default withTranslation('home')(Slider)