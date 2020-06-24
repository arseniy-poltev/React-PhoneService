import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip';

export default class Project extends React.Component {
    constructor() {
        super()
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    componentDidMount() {
        $(function () {
            var containerEl = document.querySelector("#MixItUp");
            if (typeof (containerEl) != 'undefined' && containerEl != null) {
                var mixer = mixitup(containerEl, {
                    selectors: {
                        control: '[data-mixitup-control]',
                    },
                    animation: {
                        effects: "fade translateZ(-100px)",
                    }
                });
            }
        });
    }

    render() {
        return (
            <section className="our-portfolio-section ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-heading text-center mb-5">
                                <h2>Check Our Quality Work</h2>
                                <p className="lead">Dynamically pursue reliable convergence rather than 24/7 process
                                    improvements. Intrinsicly
                                    develop end-to-end customer service without extensive data.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center pb-2">
                                <button type="button" className="filter-btn mixitup-control-active"
                                    data-mixitup-control="" data-filter="all">All
                                </button>
                                <button type="button" className="filter-btn" data-mixitup-control=""
                                    data-filter=".branding">Branding
                                </button>
                                <button type="button" className="filter-btn" data-mixitup-control=""
                                    data-filter=".animation">Animation
                                </button>
                                <button type="button" className="filter-btn" data-mixitup-control=""
                                    data-filter=".other">Others
                                </button>
                            </div>
                            <div className="portfolio-container" id="MixItUp">
                                <div className="mix portfolio-item branding" data-ref="mixitup-target">
                                    <div className="portfolio-wrapper">
                                        <a href="/project-details">
                                            <div className="content-overlay"></div>
                                            <img className="img-fluid" src="/img/portfolios/3.jpg" alt="portfolio" />
                                            <div className="content-details fadeIn-bottom text-white">
                                                <h5 className="text-white mb-1">Creative Design</h5>
                                                <p>Design</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="mix portfolio-item other animation" data-ref="mixitup-target">
                                    <div className="portfolio-wrapper">
                                        <a href="/project-details">
                                            <ReactCardFlip
                                                isFlipped={this.state.isFlipped}
                                            >
                                                <div onMouseOver={this.handleClick}>
                                                    <img className="img-fluid" src="/img/portfolios/2.jpg" alt="portfolio" />
                                                </div>
                                                <div className="project-details text-center" onMouseLeave={this.handleClick}>
                                                    <img className="img-fluid" src="/img/portfolios/2.jpg" alt="portfolio" />
                                                    <div className="overlay-content d-flex h-100">
                                                        <div className="justify-content-center align-self-center mx-auto">
                                                            <h5>Web UI/UX Design</h5>
                                                            <p>Web, Design</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ReactCardFlip>
                                        </a>
                                    </div>
                                </div>
                                <div className="mix portfolio-item animation" data-ref="mixitup-target">
                                    <div className="portfolio-wrapper">
                                        <a href="/project-details">
                                            <div className="content-overlay"></div>
                                            <img className="img-fluid" src="/img/portfolios/4.jpg" alt="portfolio" />
                                            <div className="content-details fadeIn-bottom text-white">
                                                <h5 className="text-white mb-1">Corporate Flyer Design</h5>
                                                <p>Flyer Design</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="mix portfolio-item branding" data-ref="mixitup-target">
                                    <div className="portfolio-wrapper">
                                        <a href="/project-details">
                                            <div className="content-overlay"></div>
                                            <img className="img-fluid" src="/img/portfolios/1.jpg" alt="portfolio" />
                                            <div className="content-details fadeIn-bottom text-white">
                                                <h5 className="text-white mb-1">Web UI/UX Design</h5>
                                                <p>Web, Design</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="mix portfolio-item animation other" data-ref="mixitup-target">
                                    <div className="portfolio-wrapper">
                                        <a href="/project-details">
                                            <div className="content-overlay"></div>
                                            <img className="img-fluid" src="/img/portfolios/5.jpg" alt="portfolio" />
                                            <div className="content-details fadeIn-bottom text-white">
                                                <h5 className="text-white mb-1">Wall Painting Design</h5>
                                                <p>Painting Design</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="mix portfolio-item branding " data-ref="mixitup-target">
                                    <div className="portfolio-wrapper">
                                        <a href="/project-details">
                                            <div className="content-overlay"></div>
                                            <img className="img-fluid" src="/img/portfolios/6.jpg" alt="portfolio" />
                                            <div className="content-details fadeIn-bottom text-white">
                                                <h5 className="text-white mb-1">Corporate Identity Design</h5>
                                                <p>Corporate Design</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}