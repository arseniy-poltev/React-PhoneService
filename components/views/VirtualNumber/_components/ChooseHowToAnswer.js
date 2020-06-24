import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withTranslation } from '@/i18n'

const ChooseHowToAnswer = (props) => {
    return (
        <section className="services-section ptb-100 white-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="project-details-content">
                            <div className="section-heading text-center mb-5">
                                <h2>{props.t("howToAnswer.title", {returnObjects: false})}</h2>
                                <p>{props.t("howToAnswer.description", {returnObjects: false})}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {
                        props.t("howToAnswer.items", {returnObjects: true}).map((item, index) => {
                            return (
                                <div className="col-lg-3 col-md-3 col-sm-6" key={index}>
                                    <div
                                        className="services-single text-center p-4 my-md-3 my-lg-3 my-sm-0 shadow-lg white-bg rounded v-num-item">
                                        <span className={`icon-md color-${item.iconColor} d-block mb-4 far`}>
                                            <FontAwesomeIcon icon={['fas', item.icon]} fixedWidth />
                                        </span>
                                        <h5>{item.title}</h5>
                                        <h6 className="mb-3">{item.content}</h6>
                                    </div>
                                    <style jsx>{`
                                        .v-num-item {
                                            min-height: 315px;
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

export default withTranslation("virtualNumber")(ChooseHowToAnswer);