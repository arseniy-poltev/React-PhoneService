import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withTranslation } from '@/i18n'

const CanProvide = (props) => {
    return (
        <section className="call-to-action ptb-100 gradient-overlay">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-8">
                        <div className="call-to-action-content text-white text-center mb-4">
                            <h2 className="text-white mb-1">{props.t("serviceBottom.title", { returnObjects: false })}</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        props.t("serviceBottom.items", { returnObjects: true }).map((item, index) => {
                            return (
                                <div className="col-md-4 col-lg-4" key={index}>
                                    <div className="single-counter rounded p-4 text-center text-white  service-footer-item">
                                        <span className={`icon-md color-${item.iconColor} d-block mb-4`}>
                                            <FontAwesomeIcon icon={['fas', item.icon]} fixedWidth />
                                        </span>
                                        <h5 className="mb-0 text-white">{item.title}</h5>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <style jsx>{`
                .service-footer-item {
                    min-height: 350px;
                }
                .call-to-action {
                    background: url('/img/itservice1.jpg')no-repeat top center / cover fixed
                }
            `}
            </style>
        </section>
    )
};

export default withTranslation('itService')(CanProvide);