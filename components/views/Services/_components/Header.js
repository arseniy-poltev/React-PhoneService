import { withTranslation } from '@/i18n'

const ServiceHeader = (props) => {
    return (
        <section className="promo-block ptb-100 z-index position-relative">
            <div className="container">
                <div className="row">
                    {props.t("serviceHeaderList", { returnObjects: true }).map((item, index) => (
                        <div className="col-md-4 col-lg-4" key={index}>
                            <div
                                className="single-promo-block promo-hover-bg-1 hover-image shadow-lg p-4 custom-radius white-bg service-top-item">
                                <div className="promo-block-icon mb-3">
                                    {/* <span className="far fa-parking icon-md color-primary"></span> */}
                                </div>
                                <div className="promo-block-content">
                                    <h5 className="text-center"> {item.title}</h5>
                                    <p className="text-center">{item.content}</p>
                                </div>
                                <style jsx>{`
                                    .service-top-item {
                                        min-height: 380px;
                                    }
                                `}
                                </style>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default withTranslation("itService")(ServiceHeader);