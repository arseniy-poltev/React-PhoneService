import React, { Component } from 'react'
import { withTranslation } from '@/i18n'

class About extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }

    render() {
        return (
            <section className="about-us-section ptb-100">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-12 col-lg-5">
                            <div className="video-promo-content mb-md-4 mb-lg-0">
                                <h3>{this.props.t("about.title", { returnObjects: false })}</h3>
                                <p>{this.props.t("about.description", { returnObjects: false })}</p>
                                <ul className="list-unstyled tech-feature-list">
                                    {this.props.t("about.items", { returnObjects: true }).map((item, index) => (
                                        <li className="py-1" key={index}><span
                                            className="ti-check-box mr-2 color-secondary"></span><strong>{item.title} – </strong>
                                            {item.content}
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div className="card border-0 shadow-sm text-white">
                                <img src="/img/parallax-3.jpg" alt="video" className="img-fluid rounded shadow-sm" />
                                <div className="card-img-overlay text-center">
                                    <a href="https://www.youtube.com/watch?v=9No-FiEInLA"
                                        className="popup-youtube video-play-icon color-bip shadow"><span
                                            className="ti-control-play"></span> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default withTranslation("home")(About)