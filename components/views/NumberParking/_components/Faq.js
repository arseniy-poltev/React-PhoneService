import { withTranslation } from '@/i18n'

const Faq = (props) => {
    return (
        <section className="services-section ptb-100 white-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="project-details-content">
                            <div className="section-heading mb-5">
                                <h2>{props.t("faqTitle", {returnObjects: false})}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {
                        props.content.map((item, index) => {
                            return (
                                <div className="col-md-12" key={index}>
                                    <div className="single-faq mt-4">
                                        <h5 className="mb-0">{(index + 1) + ". " + item.title}</h5>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default withTranslation("numberParking")(Faq);