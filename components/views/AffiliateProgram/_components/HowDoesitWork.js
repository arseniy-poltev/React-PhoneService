import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withTranslation } from '@/i18n'

const HowDoesitWork = (props) => {
    return (
        <section className="services-section ptb-100 gray-light-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="project-details-content">
                            <div className="section-heading text-center mb-5">
                                <h2>{props.t("howDoesItWork.title", {returnObjects: false})}</h2>
                            </div>
                            <h5 className="text-center">{props.t("howDoesItWork.description", {returnObjects: false})}</h5>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col-md-12">
                        <div className="work-process-wrap text-center">
                            {
                                props.t("howDoesItWork.items", {returnObjects: true}).map((item, index) => {
                                    return (
                                        <div className="single-work-process" key={index}>
                                            <div className="work-process-icon-wrap secondary-bg rounded my-auto">
                                                {/* <i className="ti-vector icon-md text-white"></i> */}
                                                <span className="icon-md text-white  align-self-center wp-icon">
                                                    <FontAwesomeIcon className="justify-content-center" icon={[item.icon == "paypal" ? "fab" : "fas", item.icon]} fixedWidth />
                                                </span>

                                                <span className="process-step primary-bg text-white shadow-sm">{index + 1}</span>
                                            </div>
                                            <span className="work-process-divider"></span>
                                            <div className="work-process-content mt-4">
                                                <h5>{item.title}</h5>
                                                <p>{item.content}</p>
                                            </div>
                                            <style jsx>{`
                                                .wp-icon {
                                                    position: absolute;
                                                    left: 50%;
                                                    top: 50%;
                                                    -webkit-transform: translate(-50%, -50%);
                                                    -ms-transform: translate(-50%, -50%);
                                                    transform: translate(-50%, -50%);
                                                }
                                            `}
                                            </style>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withTranslation("affiliateProgram")(HowDoesitWork);