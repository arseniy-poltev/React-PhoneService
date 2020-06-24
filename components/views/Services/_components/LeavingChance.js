import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withTranslation } from '@/i18n'

const LeavingChance = (props) => {
    return (
        <section className="services-section ptb-100 gray-light-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="section-heading text-center mb-5">
                            <h2>{props.t("serviceItems.title", {returnObjects: false})}</h2>
                            <p className="lead">{props.t("serviceItems.description", {returnObjects: false})}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        props.t("serviceItems.items", {returnObjects: true}).map((item, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                            <div
                                className="services-single text-center p-4 my-md-3 my-lg-3 my-sm-0 shadow-lg white-bg rounded service-item">
                                <span className={`icon-md color-${item.iconColor} d-block mb-4`}>
                                    <FontAwesomeIcon icon={['fas', item.icon]} fixedWidth />
                                </span>
                                <h5>{item.title}</h5>
                                <h6 className="mb-0">{item.content}</h6>
                            </div>
                            <style jsx>{`
                                .service-item {
                                    min-height: 350px;
                                }
                            `}
                            </style>
                        </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default withTranslation("itService")(LeavingChance);