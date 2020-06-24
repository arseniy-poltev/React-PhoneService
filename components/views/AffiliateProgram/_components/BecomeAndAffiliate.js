import { withTranslation } from '@/i18n'
const BecomeAndAffiliate = (props) => {
    return (
        <section className="services-section ptb-100 gray-light-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="project-details-content">
                            <div className="section-heading text-center mb-5">
                                <h2>{props.t("becomeAndAffiliate", {returnObjects: false})}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-12 justify-content-center text-center">
                        <button type="submit" className="btn-lg btn btn-warning" id="btnContactUs">
                            {props.t("btn_signup_now", {returnObjects: false})}
                                </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withTranslation("affiliateProgram")(BecomeAndAffiliate);