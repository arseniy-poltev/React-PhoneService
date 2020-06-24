import { withTranslation } from '@/i18n'
const FaxForwardHeader = (props) => {
    return (
        <section className="about-us-section ptb-100">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-12 col-lg-6">
                        <div className="card border-0 shadow-sm text-white">
                            <img src="/img/faxforward_1.jpg" className="img-fluid rounded shadow-sm" />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <div className="video-promo-content mb-md-4 mb-lg-0">
                            <ul className="list-unstyled tech-feature-list">
                                {props.t("header", { returnObjects: true }).map((item, index) => (
                                    <li className="py-2" key={index}><strong>{item.title}  </strong>
                                        {item.content}
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

export default withTranslation("faxForwarding")(FaxForwardHeader);