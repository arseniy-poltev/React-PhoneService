import { withTranslation } from '@/i18n'
import parse from 'html-react-parser';


const WhatIsCallForwarding = (props) => {
    return (
        <section className="services-section ptb-100 gray-light-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="project-details-content">
                            <div className="section-heading text-center mb-5">
                                <h2>{props.t("whatIsCallForwarding.title", {returnObjects: false})}</h2>
                            </div>
                            <p>{parse(props.t("whatIsCallForwarding.description", {returnObjects: false}))}</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    {
                        props.t("whatIsCallForwarding.items", {returnObjects: true}).map((item, index) => {
                            return (
                                <div className="col" key={index}>
                                    <div
                                        className="services-single text-center p-3 my-md-1 my-lg-1 my-sm-0 shadow-lg white-bg rounded forward-item">
                                        <h6>{index + 1}</h6>
                                        <h5 className="item-title">{item.title}</h5>
                                        <p className="mb-0">{item.content}</p>
                                    </div>
                                    <style jsx>{`
                                        .forward-item {
                                        min-height: 470px;
                                        }
                                        .item-title {
                                            font-size: 14px;
                                            margin-top: 5px;
                                        }
                                    `}
                                    </style>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default withTranslation("callForwarding")(WhatIsCallForwarding);