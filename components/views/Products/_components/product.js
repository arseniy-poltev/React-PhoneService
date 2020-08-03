import ReactCardFlip from 'react-card-flip';
import React from 'react';
import { i18n, withTranslation } from '@/i18n'
import parse from 'html-react-parser';
import Link from 'next/link';

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isFlipped: false,
            product: this.props.product,
            flipItem: this.props.product.id
        }

        this.handleFlip = this.handleFlip.bind(this);
    }

    handleFlip = (e) => {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
        console.log(this.state.product.productName, this.state.isFlipped)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({isFlipped: false})
        this.setState({ product: nextProps.product })
    }

    getTriangleItem = () => {
        let flag = false;
        let triangleFlag = "";
        if (this.state.product.newFlag) {
            triangleFlag = "new"
            flag = true;
        } else if (this.state.product.saleFlag) {
            triangleFlag = "sale"
            flag = true;
        } else if (this.state.product.promoFlag) {
            triangleFlag = "promo"
            flag = true;
        }
        else {
            flag = false;
        }
        if (flag) {
            return (
                <>
                    <div className={`arrow-triangle triangle-${triangleFlag}`}></div>
                    <div className={`mark-new ${triangleFlag}-${this.props.t("lang", { returnObjects: false })}`}>{this.props.t(triangleFlag)}</div>
                    <style jsx>{`
                    .triangle-new {
                        border-left: 60px solid #00ce34;
                    }
                    .triangle-promo {
                        border-left: 60px solid #0000ff;
                    }
                    `}</style>
                </>
            )
        } else {
            return null;
        }
    }

    productListDetail = (fContent) => {
        let contentArr = fContent.split("<br />");
        let content = "<ul>";
        contentArr.map(item => {
            content += "<li>" + item + "</li>";
        });
        content += "</ul>";
        return content;
    }

    render() {
        return (
            <div className={`portfolio-item  shadow-lg ${this.state.product.productCategory}`} >
                <div className="portfolio-wrapper">
                    <Link href={`/products/${this.state.product.id}`}>
                        <a>
                        <ReactCardFlip
                            flipSpeedBackToFront={0.4}
                            flipSpeedFrontToBack={0.4}
                            isFlipped={this.state.isFlipped}
                        >
                            <div className="product-front" onMouseEnter={this.handleFlip}>
                                <img className="img-fluid" src={this.state.product.masterImage} alt="Product" />
                                <div className="prodcuts-overlay h-100">
                                    <h4 className="text-center my-auto pt-2 pb-2 text-white">{this.state.product.productName}</h4>
                                </div>
                                {this.getTriangleItem()}
                            </div>
                            <div className="product-details text-center" onMouseLeave={this.handleFlip} >
                                <img className="img-fluid" src={this.state.product.masterImage} alt="Product" />
                                <div className="prodcuts-overlay  h-100" style={{ visibility: "none" }}>
                                    <h4 className="text-center my-auto pt-2 pb-2">{this.state.product.productName}</h4>
                                </div>
                                <div className="prodcuts-content pt-4">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6">
                                            <h4 className="pl-2 text-white">{this.state.product.productName}</h4>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <img className="mx-auto thumenail-img" src={this.state.product.thumbnailImage} />
                                        </div>
                                    </div>
                                    <div className="row product-detail">
                                        <div className="col-md-11 col-sm-12 text-white text-left pt-3 pl-4" style={{ fontSize: 13 }}>
                                            {parse(this.productListDetail(this.state.product.listDetail))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ReactCardFlip>
                        </a>
                    </Link>
                </div>
            </div>
        )
    }
}

export default withTranslation('product')(Product);