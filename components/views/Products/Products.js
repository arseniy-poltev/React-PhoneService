import React, { Component } from 'react'
import { ProductsService } from "@/components/_services/products.service";
import Product from './_components/product';
import { i18n, withTranslation } from '@/i18n'
import Pagination from "react-js-pagination";

const itemsCountPerPage = 9;
const pageRangeDisplayed = 5;

class Products extends React.Component {
    constructor() {
        super()
        this.state = {
            categories: null,
            products: [],
            catProducts: [],
            activePage: 1,
            productsCount: null,
            activeCategory: "all"
        };
    }

    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }

    UNSAFE_componentWillMount() {
        const categories = ProductsService.getCategories();
        const products = ProductsService.getProductsList();
        this.setState({ productsCount: products.length })
        this.setState({ categories })
        this.setState({ products })
        this.setState({ catProducts: products })
    }

    componentDidMount() {
    }

    handleCategoryClick = (category) => {
        let catProducts = this.state.products.filter(item => {
            if (category === 'all') {
                return true;
            } else {
                return item.productCategory === category;
            }
        })

        this.setState({ activePage: 1 })
        this.setState({ activeCategory: category })
        this.setState({ productsCount: catProducts.length })
        this.setState({ catProducts })
    }

    render() {
        return (
            <section className="our-portfolio-section ptb-100" >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-heading text-center mb-5">
                                <h2>{this.props.t("product_panel_title", { returnObjects: false })}</h2>
                                <p className="lead">{this.props.t("product_panel_description", { returnObjects: false })}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-md-center justify-content-lg-center">
                        <div className="col-md-10 col-lg-10">
                            <div className="text-center pb-2">
                                <button className={`filter-btn ${this.state.activeCategory === `all` ? `mixitup-control-active` : null}`}
                                    onClick={e => this.handleCategoryClick('all')}
                                >{this.props.t("category_all", { returnObjects: false })}
                                </button>
                                {
                                    this.state.categories.map((item, index) => (
                                        <button key={index} className={`filter-btn ${this.state.activeCategory === item.slug ? `mixitup-control-active` : null}`}
                                            onClick={e => this.handleCategoryClick(item.slug)}
                                        >{item.name}
                                        </button>
                                    ))
                                }
                            </div>
                            <div className="portfolio-container" >
                                {
                                    this.state.catProducts.map((item, index) => {
                                        if (
                                            index >= (this.state.activePage - 1) * itemsCountPerPage &&
                                            index < this.state.activePage * itemsCountPerPage
                                        ) return (
                                            <Product product={item} key={index} />
                                        )
                                    }
                                    )
                                }
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <Pagination
                                        activePage={this.state.activePage}
                                        itemsCountPerPage={itemsCountPerPage}
                                        totalItemsCount={this.state.productsCount}
                                        pageRangeDisplayed={pageRangeDisplayed}
                                        onChange={this.handlePageChange.bind(this)}
                                        itemClass="page-item"
                                        linkClass="page-link"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default withTranslation("product")(Products)