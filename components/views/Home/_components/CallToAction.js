import React,{Component} from 'react'
import { withTranslation } from '@/i18n'

class CallToAction extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <section className="promo-section gradient-bg ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-8">
                            <div className="app-business-content text-center text-white">
                                <h2 className="text-white">{this.props.t("download_app.title", {returnObjects: false})}</h2>
                                <p className="lead">{this.props.t("download_app.description", {returnObjects: false})}</p>

                                <div className="action-btns mt-5">
                                    <ul className="list-inline app-download-list">
                                        <li className="list-inline-item">
                                            <a href="#" className="d-flex align-items-center border rounded">
                                                <span className="fab fa-windows icon-sm mr-3"></span>
                                                <div className="download-text text-left">
                                                    <span>{this.props.t("download_app.content", {returnObjects: false})}</span>
                                                    <h5 className="mb-0">Windows</h5>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="d-flex align-items-center border rounded">
                                                <span className="fab fa-apple icon-sm mr-3"></span>
                                                <div className="download-text text-left">
                                                    <span>{this.props.t("download_app.content", {returnObjects: false})}</span>
                                                    <h5 className="mb-0">App Store</h5>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="d-flex align-items-center border rounded">
                                                <span className="fab fa-google-play icon-sm mr-3"></span>
                                                <div className="download-text text-left">
                                                    <span>{this.props.t("download_app.content", {returnObjects: false})}</span>
                                                    <h5 className="mb-0">Google Play</h5>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default withTranslation('home')(CallToAction)