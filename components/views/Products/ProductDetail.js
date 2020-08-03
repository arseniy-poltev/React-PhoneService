import React, { Component } from 'react'
import ReactImageMagnify from 'react-image-magnify';
import { i18n, withTranslation } from '@/i18n'
import Slider from "react-slick";
import { ProductsService } from "@/components/_services/products.service";
import parse from 'html-react-parser';
import Product from './_components/product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

class ProductDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productMaterImgSrc: null,
            product: ProductsService.getProductDetail()
        }
    }

    componentWillMount() {
        this.setState({ productMaterImgSrc: this.state.product.masterImage })
    }

    bindFeatureContent = (fContent) => {
        let contentArr = fContent.split("<br />");
        let content = "<ul>";
        contentArr.map(item => {
            content += "<li>" + item + "</li>";
        });
        content += "</ul>";
        return content;
    }

    getDatasheetLink = () => {
        const lang = i18n.language || window.localStorage.i18nextLng;
        let resources = this.state.product.resources;

        let datasheetLink = "";
        resources.map(item => {
            if (item.type === 'datasheet') {
                item.languages.map(langItem => {
                    if (langItem.code.toLowerCase() === lang.toLowerCase()) {
                        datasheetLink = langItem.link;
                        var win = window.open(datasheetLink, '_blank');
                        win.focus();
                    }
                })
            }
        })

    }

    navigateToResources = (resource) => {
        if (!resource || resource.languages.length === 0) {
            return;
        }
        if (resource.type === 'datasheet') {
            this.getDatasheetLink();
        } else {
            const lang = i18n.language || window.localStorage.i18nextLng;
            let resourceLink = ""
            resource.languages.map(langItem => {
                if (langItem.code.toLowerCase() === lang.toLowerCase()) {
                    resourceLink = langItem.link;
                }
            })
            if (resourceLink === "") {
                resourceLink = resource.languages[0].link;
            }
            var win = window.open(resourceLink, '_blank');
            win.focus();
        }
    }

    handleGalleryItemClick = (imgItem) => {
        this.setState({ productMaterImgSrc: imgItem.image })
    }

    render() {
        var sliderSettings = {
            speed: 500,
            // slidesToShow: 1,
            slidesToScroll: 1,
            slidesPerRow: 5,
            autoplay: true,
            arrows: true,
            draggable: true,
            autoplay: true,
            draggable: true,
            focusOnSelect: true,
            swipeToSlide: true,
            swipe: true,
            useTransform: true
        };
        return (
            <>
                <section className="project-details-section ptb-100">
                    <div className="container">
                        <div className="row justify-content-between product-info-containter-top">
                            <div className="col-md-6 col-lg-6">
                                <div className="img-wrap img-thumbnail mb-md-4 mb-lg-0" style={{ background: "white" }}>
                                    <ReactImageMagnify {...{
                                        smallImage: {
                                            alt: this.props.t("master_img_alt", { returnObjects: false }),
                                            isFluidWidth: true,
                                            src: this.state.productMaterImgSrc,
                                        },
                                        largeImage: {
                                            src: this.state.productMaterImgSrc,
                                            width: 1200,
                                            height: 1200
                                        },
                                        isHintEnabled: true,
                                        shouldHideHintAfterFirstActivation: false,
                                        hintTextMouse: this.props.t("imgMagnifierHintTextMouse", { returnObjects: false }),
                                        hintTextTouch: this.props.t("imgMagnifierHintTextTouch", { returnObjects: false }),
                                        enlargedImageContainerStyle: { background: "white" },
                                    }} />
                                </div>
                                <div className="slide-container ">
                                    <Slider {...sliderSettings}>
                                        {
                                            this.state.product.imageGallery.map((item, index) => (
                                                <div className="item single-client" key={index} onClick={e => this.handleGalleryItemClick(item)}>
                                                    <img src={item.image} alt={item.imageAlt} className="client-img" />
                                                </div>
                                            ))
                                        }
                                    </Slider>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 d-flex align-items-end flex-column" style={{ zIndex: 1 }}>
                                <div className="project-details-sidebar d-flex align-items-end flex-column">
                                    <div className="d-block">
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12">
                                                <h3 className="mb-0">{this.state.product.productTitle}</h3>
                                                <p className="pt-2">{parse(this.state.product.shortDescription)}</p>
                                            </div>
                                        </div>
                                        <div className="row pt-5">
                                            <div className="col-md-6 col-sm-6">
                                                <h5 className="pb-0 mb-0">{this.props.t("vendor_part", { returnObjects: false })}: </h5>
                                                <p> {this.state.product.productName}</p>
                                            </div>
                                            <div className="col-md-6 col-sm-6 ">
                                                <h5 className="pb-0 mb-0">{this.props.t("availability", { returnObjects: false })}: </h5>
                                                <p>{(new Date(this.state.product.itemEnd)).getTime() > (new Date()).getTime() ?
                                                    this.props.t("end_of_life", { returnObjects: false }) : this.props.t("out_of_stock", { returnObjects: false })}</p>
                                            </div>
                                        </div>
                                        <div className="row pt-5">
                                            <div className="col-md-12 col-sm-12">
                                                <h5 className="pb-2 mb-0">{this.props.t("compatible_with", { returnObjects: false })}: </h5>
                                                <ul className="list-unstyled tech-feature-list">
                                                    {this.state.product.compatible.map((item, index) => (
                                                        <li className="py-1" key={index}><span className="ti-check-box mr-2 color-secondary"></span>
                                                            <Link key={index} href={item.link}><a>{item.name}</a></Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row pt-5">
                                            <div className="col-md-6 col-sm-6">
                                                <Link href="/contact"><a><button className="btn btn-primary btn-block product-action-btn">{this.props.t("contact_sales", { returnObjects: false })}</button></a></Link>
                                            </div>
                                            <div className="col-md-6 col-sm-6">
                                                <button onClick={this.getDatasheetLink} className="btn btn-primary btn-block product-action-btn">{this.props.t("product_datasheet", { returnObjects: false })}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="project-description-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="project-details-content">
                                    <h2>{this.props.t("description", { returnObjects: false })}</h2>
                                    <hr />
                                    <p>{this.state.product.productDescription}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="project-feature-section">
                    <div className="container">
                        <div className="row mt-5 mb-5">
                            <div className="col-md-12">
                                <div className="project-feature-content">
                                    <h2>{this.props.t("features", { returnObjects: false })}</h2>
                                    <hr />
                                    <div className="row">
                                        <div className={`col-md-${this.state.product.featureImage && (this.state.product.featureImage.image === undefined || this.state.product.featureImage.image === null) ? "12" : "8"}`}>
                                            {parse(this.bindFeatureContent(this.state.product.features))}
                                        </div>
                                        {
                                            (this.state.product.featureImage.image !== undefined && this.state.product.featureImage.image !== null)
                                            &&
                                            <div className="col-md-4 pt-3">
                                                <img src={this.state.product.featureImage.image} />
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {
                    this.state.product.featureIcons && this.state.product.featureIcons.length > 0 &&
                    <section className="project-details-section pt-1 pb-5 gray-light-bg">
                        <div className="container">
                            <div className="row">
                                {
                                    this.state.product.featureIcons.map((item, index) => (
                                        <div className="col-xs-6 col-sm-3 col-md-2 feature-icon text-center pt-5" key={index}>
                                            <span className={`icon-md color-primary d-block mb-2 far mx-auto`}>
                                                <FontAwesomeIcon icon={['fas', item.icon]} />
                                            </span>
                                            <h6 className="text-center">{item.text}</h6>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                }


                <section className="datasheet-section ptb-100 ">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="section-heading text-center mb-5">
                                    <h2>{this.props.t("datasheets_and_other_resources", { returnObjects: false })}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                this.state.product.resources.map((item, index) => (
                                    <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                        <div
                                            onClick={e => this.navigateToResources(item)}
                                            className="services-single text-center p-4 my-md-3 my-lg-3 my-sm-0 shadow-lg white-bg rounded service-item">
                                            <span className={`icon-md color-${item.color} d-block mb-4`}>
                                                <FontAwesomeIcon icon={['fas', item.icon]} />
                                            </span>
                                            <h5>{item.resourceName}</h5>
                                            <h6 className="mb-0">{item.description}</h6>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>

                <section className="related-products-section ptb-100 gray-light-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-12">
                                <h2>{this.props.t("related_products", { returnObjects: false })}</h2>
                                <hr className="section-divider" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-10 col-lg-10 mx-auto">
                                <div className="portfolio-container pl-5 pr-5">
                                    {
                                        this.state.product.relatedProducts.map((item, index) => (
                                            <Product product={item} key={index} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                        .datasheet-section .services-single {
                            cursor: pointer;
                        }
                        .resuource-btn {
                            height: 100px;
                        }
                        .feature-icon img {
                            max-width: 130px;
                        }
                        .feature-icon h6 {
                            font-size: 14px;
                            color: #295288;
                        }
                        .img-wrap {
                            position: relative;
                        }
                        .img-wrap:hover {
                            z-index: 3 !important;
                        }
                        .product-action-btn {
                            background: #3B6E8E;
                            border-color: #3B6E8E;
                        }
                `}</style>
            </>

        )
    }
}

export default withTranslation("product")(ProductDetail)