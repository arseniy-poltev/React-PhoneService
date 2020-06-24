import { withTranslation } from '@/i18n'

const AffiliateProgramHeader = (props) => {
    return (
        <section className="about-us-section ptb-100">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-12 col-lg-6">
                        <div className="card border-0 shadow-sm text-white">
                            <img src="/img/affiliateProgram_1.jpg" className="img-fluid rounded shadow-sm" />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <div className="video-promo-content mb-md-4 mb-lg-0">
                            <h3>{props.t("header.title", { returnObjects: false })}</h3>
                            <p>{props.t("header.description", { returnObjects: false })}</p>
                            <ul className="list-unstyled tech-feature-list">
                                {props.t("header.items", { returnObjects: true }).map((item, index) => (
                                    <li className="py-1" key={index}><span
                                        className="ti-check-box mr-2 color-secondary"></span>{item.content}
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withTranslation("affiliateProgram")(AffiliateProgramHeader);