import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withTranslation } from '@/i18n'

const CallForwardingFeatures = (props) => {
    return (
        <section className="project-details-section ptb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="section-heading text-center mb-5">
                            <h2>{props.t("ourCallFeatures.title", {returnObjects: false})}</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        props.t("ourCallFeatures.items", {returnObjects: true}).map((item, index) => {
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                    <div
                                        className="services-single text-center p-4 my-md-3 my-lg-3 my-sm-0 shadow-lg gray-light-bg rounded service-item">
                                        <span className={`icon-md color-${item.iconColor} d-block mb-4 far mx-auto`}>
                                            <FontAwesomeIcon icon={['fas', item.icon]} />
                                        </span>
                                        <h5>{item.title}</h5>
                                        <h6 className="mb-0">{item.content}</h6>
                                    </div>
                                    <style jsx>{`
                                        .service-item {
                                            min-height: 310px;
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

export default withTranslation("callForwarding")(CallForwardingFeatures);