import { withTranslation } from '@/i18n'
const Faq = (props) => {
    return (
        <section className="services-section ptb-100 white-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="project-details-content">
                            <div className="section-heading mb-5">
                                <h2 className="text-center">{props.t("faqTitle", {returnObjects: false})}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        props.faqItems.map((item, index) => {
                            return (
                                <div className="col-md-12" key={index}>
                                    <div className="single-faq mt-4">
                                        <h5>{item.title}</h5>
                                        <p>{item.content}</p>
                                        <ul className="list-unstyled tech-feature-list faq-port-in-numbers">
                                            {
                                                item.subitems && item.subitems.map((sItem, index) => {
                                                    return (
                                                        <li key={index}>
                                                            {sItem.content}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="col-md-12">
                        <h5 className="text-left mt-4">Port In Phone Numbers</h5>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        <ul className="list-unstyled tech-feature-list faq-port-in-numbers">
                            {
                                props.faqPortInNumItems.map((item, index) => {
                                    return (
                                        <li>
                                            <strong>{item.title}</strong>{item.content}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="col-md-12">
                        <h5 className="text-left mt-4">Pricing:</h5>
                        <h5 className="text-left mt-2 ml-3">WHAT WE OFFER:</h5>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        <ul className="list-unstyled tech-feature-list faq-port-in-numbers">
                            {
                                props.pricingItems.map((item, index) => {
                                    return (
                                        <li>
                                            <strong>{item.title}</strong> {item.content}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <style jsx>{`
            .faq-port-in-numbers {
                list-style-type: disc !important;
                padding-left:3em !important;
                margin-left:1em;
            }
        `}
            </style>
        </section>

    )
}

export default withTranslation("faxForwarding")(Faq);