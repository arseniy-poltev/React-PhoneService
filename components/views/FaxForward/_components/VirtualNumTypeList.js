import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withTranslation } from '@/i18n'

const VirtualNumTypeList = (props) => {
    return (
        <section className="services-section ptb-100 gray-light-bg">
            <div className="container">
                <div className="row justify-content-center">
                    {
                        props.t("virtualNumTypes", {returnObjects: true}).map((item, index) => {
                            return (
                                <div className="col-lg-4 col-md-4 col-sm-4" key={index}>
                                    <div
                                        className="services-single text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-lg gray-light-bg rounded service-item">
                                        <span className={`icon-md color-${item.iconColor} d-block mb-4 far `}>
                                            <FontAwesomeIcon icon={['fas', item.icon]} fixedWidth />
                                        </span>
                                        <h5>{item.title}</h5>
                                        <h6 className="mb-0">{item.content}</h6>
                                    </div>
                                    <style jsx>{`
                                        .service-item {
                                            min-height: 320px;
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

export default withTranslation("faxForwarding")(VirtualNumTypeList);